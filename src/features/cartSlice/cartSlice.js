import { createSlice } from "@reduxjs/toolkit";
import { roundToTwo } from "../../helpers/helpers";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    totalCartPrice: 0,
    errorMessage: "",
  },

  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );
      state.totalCartPrice = 0;
      if (!existingItem) {
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
      } else {
        state.errorMessage = "nie mozna tak";
      }

      state.cartItems.map((element) => {
        return roundToTwo((state.totalCartPrice += element.totalItemPrice));
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
