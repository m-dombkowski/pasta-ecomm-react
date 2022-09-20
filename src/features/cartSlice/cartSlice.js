import { createSlice } from "@reduxjs/toolkit";
import { roundToTwo } from "../../helpers/helpers";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    totalCartPrice: 0,
    isError: false,
    errorMessage: "",
  },

  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalCartPrice = 0;
      if (!existingItem && action.payload.quantity > 0) {
        state.isError = false;
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          name: newItem.name,
          totalItemPrice: newItem.price * newItem.quantity,
        });
      } else if (existingItem && action.payload.quantity > 0) {
        existingItem.quantity += newItem.quantity;
        existingItem.totalItemPrice = roundToTwo(
          existingItem.quantity * existingItem.price
        );
        state.isError = false;
      } else {
        console.log(action.payload.quantity);
        state.isError = true;
        state.errorMessage = "Quantity must be a positive number";
      }

      state.cartItems.map((element) => {
        return roundToTwo((state.totalCartPrice += element.totalItemPrice));
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
