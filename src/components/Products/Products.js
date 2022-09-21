import { useState } from "react";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import FilterBar from "../FilterBar/FilterBar";
import PastaType from "../PastaType/PastaType";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../features/cartSlice/cartSlice";

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

  const initData = (data) => {
    setSubTypes(data);
    console.log(data);
  };

  return (
    <div className={styles.container}>
      <FilterBar
        subTypes={subTypes}
        setSubTypes={setSubTypes}
        filterState={filters}
        setFilterState={setFilters}
      />
      <div className={styles.productsContainer}>
        {filters.map((element) => (
          <PastaType
            key={Math.random()}
            title={capitalizeFirstLetter(element)}
            type={element}
            initData={initData}
            subTypes={subTypes}
            setSubTypes={setSubTypes}
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
