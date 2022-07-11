import React, { useState, useMemo, useCallback, useEffect } from "react";
import { specificPastaTypeObj } from "../firebase/fetchingData";

const SortingContext = React.createContext({
  arrayToSort: [],
  filters: [],
  updateArray: () => {},
});

export const SortingProvider = (props) => {
  let array = [];

  const filters = ["dumpling", "filled", "long", "sheet", "short"];

  const updateFilters = (data, arr) => {
    if (!arr.includes(data)) {
      return arr.push(data);
    }
  };

  useEffect(() => {
    const initializeArray = async () => {};
  });

  const contextValue = {
    arrayToSort: array,
    filters,
  };

  return (
    <SortingContext.Provider value={contextValue}>
      {props.children}
    </SortingContext.Provider>
  );
};

export default SortingContext;
