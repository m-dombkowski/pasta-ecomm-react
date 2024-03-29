import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartSlice from "../features/cartSlice/cartSlice";
import counterReducer from "../features/counter/counterSlice";

import sortReducer, { sortSlice } from "../features/sorting/sortingSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    sort: sortSlice.reducer,
  },
});
