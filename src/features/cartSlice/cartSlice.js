import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",

  initialState: {
    cartItems: [],
    totalQuantity: 0,
  },

  reducers: {
    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.totalQuantity += newItem.quantity;
        state.cartItems.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        existingItem.quantity += newItem.quantity;
        existingItem.totalPrice += newItem.price;
        state.totalQuantity += newItem.quantity;
      }
    },
  },
});
