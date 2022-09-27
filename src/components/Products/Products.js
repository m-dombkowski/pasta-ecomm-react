import {  useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import FilterBar from "../FilterBar/FilterBar";
import PastaType from "../PastaType/PastaType";
import styles from "./Products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../features/cartSlice/cartSlice";
import { getPastaTypes } from "../../firebase/fetchingData";


const Products = () => {
  const [subTypes, setSubTypes] = useState([]);
  const [filters, setFilters] = useState([
    "dumpling",
    "filled",
    "long",
    "sheet",
    "short",
  ]);

  const [sortingValue, setSortingValue] = useState('ascendingName');

  const isError = useSelector((state) => state.cart.isError);
  const errMessage = useSelector((state) => state.cart.errorMessage);
  const dispatch = useDispatch();

  const closeErrorModalHandler = () => {
    dispatch(cartActions.closeErrorModal());
  };

  useEffect(() => {
    const init = async () => {
      const data = await getPastaTypes(process.env.REACT_APP_FIREBASE_API_KEY);
      for (const name in data) {
        for (const type in data[name]) {
          setSubTypes((prevState) => [...prevState, data[name][type]]);
        }
      }
    };

    init().then();
  }, []);

  return (
    <div className={styles.container}>
      <FilterBar
        filterState={filters}
        setFilterState={setFilters}
        subTypes={subTypes}
        setSortingValue={setSortingValue}
      />
      <div className={styles.productsContainer}>
        {filters.map((element) => (
          <PastaType
            subTypes={subTypes}
            key={Math.random()}
            title={capitalizeFirstLetter(element)}
            type={element}
            setSubTypes={setSubTypes}
            sortingValue={sortingValue}
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
