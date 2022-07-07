import { createSlice, createAsyncThunk } from "@reduxjs/toolkit/";
import { getPastaTypes } from "../../firebase/fetchingData";

const initialState = {
  arrayToSort: [],
};

export const initializeArray = createAsyncThunk(
  "sort/fetchArray",
  async (setArray) => {
    const data = await getPastaTypes(process.env.REACT_APP_FIREBASE_URL);

    for (const type in data) {
      setArray((prevState) => [...prevState, type]);
    }
  }
);

export const sortSlice = createSlice({
  name: "sort",
  initialState,

  reducers: {
    ascendingName: (arrayToSort) => {
      arrayToSort.map((element) => element.name.sort((a, b) => a - b));
    },
    descendingName: (arrayToSort) => {
      arrayToSort.map((element) => element.name.sort((a, b) => a + b));
    },
    ascendingPrice: (arrayToSort) => {
      arrayToSort.map((element) => element.price.sort((a, b) => a - b));
    },
    descendingPrice: (arrayToSort) => {
      arrayToSort.map((element) => element.price.sort((a, b) => a + b));
    },
  },
});

export const {
  ascendingName,
  descendingName,
  ascendingPrice,
  descendingPrice,
} = sortSlice.actions;

export default sortSlice.reducer;
