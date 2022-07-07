import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";

import sortReducer from "../features/sorting/sortingSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    sorting: sortReducer,
  },
});
