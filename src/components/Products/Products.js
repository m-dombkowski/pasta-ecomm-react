import { useCallback, useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import FilterBar from "../FilterBar/FilterBar";
import PastaType from "../PastaType/PastaType";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../features/cartSlice/cartSlice";
import { specificPastaTypeObj } from "../../firebase/fetchingData";

const Products = () => {
  const [subTypes, setSubTypes] = useState([]);
  const [filters, setFilters] = useState([
    "dumpling",
    "filled",
    "long",
    "sheet",
    "short",
  ]);
  const isError = useSelector((state) => state.cart.isError);
  const errMessage = useSelector((state) => state.cart.errorMessage);
  const dispatch = useDispatch();

  const closeErrorModalHandler = () => {
    dispatch(cartActions.closeErrorModal());
  };

  const init = useCallback(async () => {
    for (let i = 0; i < filters.length; i++) {
      let arr = [];
      const response = await specificPastaTypeObj(arr, filters[i]);
      // setSubTypes(response);
    }
    // let arr = [];
    // const response = await specificPastaTypeObj(arr, type);
    // console.log(response);
  });

  useEffect(() => {
    init();
  }, [init]);

  // console.log(subTypes);

  return (
    <div className={styles.container}>
      <FilterBar filterState={filters} setFilterState={setFilters} />
      <div className={styles.productsContainer}>
        {filters.map((element) => (
          <PastaType
            subTypes={subTypes}
            key={Math.random()}
            title={capitalizeFirstLetter(element)}
            type={element}
          />
        ))}
        {isError && (
          <div className={styles.errorModalContainer}>
            <button onClick={closeErrorModalHandler}>x</button>
            <p className={styles.errorModalText}>{errMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
