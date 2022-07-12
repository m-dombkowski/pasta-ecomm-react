import { useState } from "react";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import FilterBar from "../FilterBar/FilterBar";
import PastaType from "../PastaType/PastaType";
import styles from "./Products.module.css";

const Products = () => {
  const [filters, setFilters] = useState([
    "dumpling",
    "filled",
    "long",
    "sheet",
    "short",
  ]);

  return (
    <div className={styles.container}>
      <FilterBar filterState={filters} setFilterState={setFilters} />
      <div className={styles.productsContainer}>
        {filters.map((element) => (
          <PastaType
            key={Math.random()}
            title={capitalizeFirstLetter(element)}
            type={element}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;

// const test2 = useCallback(async () => {
//   for (let i = 0; i < filters.length; i++) {
//     let arr = [];
//     const data = await specificPastaTypeObj(arr, filters[i]);
//     setState(data);
//   }
// }, [filters]);

// const test2 = useCallback(async () => {
//   for (let i = 0; i < filters.length; i++) {
//     let arr = [];
//     const data = await specificPastaTypeObj(arr, filters[i]);
//     setState((prevState) => [...prevState, data]);
//   }
// }, [filters]);

// useEffect(() => {
//   test2();
// }, [test2]);
