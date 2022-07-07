import { Fragment, useState } from "react";
import { getPastaTypes } from "../../firebase/fetchingData";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import FilterBar from "../FilterBar/FilterBar";
import PastaType from "../PastaType/PastaType";
import styles from "./Products.module.css";
import { useDispatch } from "react-redux";
import { ascendingPrice } from "../../features/sorting/sortingSlice";

const Products = () => {
  const [filters, setFilters] = useState([
    "dumpling",
    "filled",
    "long",
    "sheet",
    "short",
  ]);
  const dispatch = useDispatch();

  const pastaObj = async (typeName) => {
    const data = await getPastaTypes(process.env.REACT_APP_FIREBASE_URL);
    for (const name in data) {
      if (name === typeName) {
        return data[name];
      }
    }
  };

  const specificPastaTypeObj = async (array, typeName) => {
    const data = await pastaObj(typeName);
    for (const name in data) {
      array.push(data[name]);
    }
    return array;
  };

  // const sortHandler = (event, array) => {
  //   const sortType = event.target.value;
  //   switch (sortType) {
  //     case "ascendingPrice":
  //       dispatch(ascendingPrice());
  //   }
  // };

  return (
    <div className={styles.container}>
      <FilterBar
        // sortHandler={sortHandler}
        filterState={filters}
        setFilterState={setFilters}
      />
      <div className={styles.productsContainer}>
        {filters.map((element) => (
          <PastaType
            key={Math.random()}
            title={capitalizeFirstLetter(element)}
            type={element}
            specificSubTypeObj={specificPastaTypeObj}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
