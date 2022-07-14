import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    totalCartPrice: 0,
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
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalItemPrice =
          existingItem.quantity * existingItem.price;
      }
      state.cartItems.map((element) => {
        return (state.totalCartPrice += element.totalItemPrice);
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
