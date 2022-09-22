import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import {
  getPastaTypes,
  specificPastaTypeObj,
} from "../../firebase/fetchingData";

export const initializeFiltersArray = createAsyncThunk(
  "sort",
  async (setArray) => {
    const data = await getPastaTypes(process.env.REACT_APP_FIREBASE_API_KEY);

    for (const type in data) {
      setArray((prevState) => [...prevState, type]);
    }
  }
);

export const initializeArrayToSort = createAsyncThunk("sort", async (type) => {
  let arr = [];
  const data = await specificPastaTypeObj(arr, type);
  return data;
});

export const sortSlice = createSlice({
  name: "sort",

  initialState: {
    arrayToSort: [],
  },

  reducers: {
    sortNameAToZ: (a, b) => {
      if (a.Name < b.Name) {
        return -1;
      }
      if (a.Name > b.Name) {
        return 1;
      }
      return 0;
    },
    sortNameZToA: (a, b) => {
      if (a.Name > b.Name) {
        return -1;
      }
      if (a.Name < b.Name) {
        return 1;
      }
      return 0;
    },
    sortPriceLowToHigh: (a, b) => {
      if (a.Price > b.Price) {
        return -1;
      }
      if (a.Price < b.Price) {
        return 1;
      }
      return 0;
    },
    sortPriceHighToLow: (a, b) => {
      if (a.Price < b.Price) {
        return -1;
      }
      if (a.Price > b.Price) {
        return 1;
      }
      return 0;
    },
  },
});

export const sortingActions = sortSlice.actions;

export default sortSlice;
// export const selectArray = (state) => state.sorting.arrayToSort;
