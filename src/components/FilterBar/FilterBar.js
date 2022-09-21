import { useEffect, useState } from "react";
import styles from "./FilterBar.module.css";
import {
  capitalizeFirstLetter,
  sortNameAToZ,
  sortNameZToA,
  sortPriceHighToLow,
  sortPriceLowToHigh,
} from "../../helpers/helpers";
import { useDispatch } from "react-redux/es/exports";
import { initializeFiltersArray } from "../../features/sorting/sortingSlice";
import { specificPastaTypeObj } from "../../firebase/fetchingData";

const FilterBar = (props) => {
  const dispatch = useDispatch();
  const [typesArray, setTypesArray] = useState([]);

  const [chosenSubTypes, setChosenSubTypes] = useState([]);

  useEffect(() => {
    dispatch(initializeFiltersArray(setTypesArray));
  }, [dispatch]);

  useEffect(() => {
    if (props.filterState.length === 0) {
      props.setFilterState(typesArray);
    }
  }, [props, typesArray]);

  const checkBoxHandler = (event) => {
    const filterName = event.target.value;
    if (props.filterState.length === 5) {
      props.setFilterState([filterName]);
    } else {
      if (!props.filterState.includes(filterName)) {
        props.setFilterState((prevState) => [...prevState, filterName]);
      } else {
        props.setFilterState((prevState) =>
          prevState.filter((element) => {
            if (!element) {
              return props.setFilterState(typesArray);
            }
            return element !== filterName;
          })
        );
      }
    }
  };

  const showAllButtonHandler = () => {
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }

    props.setFilterState(typesArray);
  };

  const initializeSortingArray = () => {
    let arr = [];
    props.filterState.map((element) => {
      const response = specificPastaTypeObj(arr, element);
      response.then((data) => props.setSubTypes(data));
    });
  };

  const sortingHandler = (event) => {
    const sortType = event.target.value;
    initializeSortingArray();

    switch (sortType) {
      case "ascendingName":
        props.subTypes.sort(sortNameAToZ);
        console.log(props.subTypes);
        break;
      case "descendingName":
        props.subTypes.sort(sortNameZToA);
        console.log(props.subTypes);
        break;
      case "descendingPrice":
        props.subTypes.sort(sortPriceHighToLow);
        console.log(props.subTypes);
        break;
      case "ascendingPrice":
        props.subTypes.sort(sortPriceLowToHigh);
        console.log(props.subTypes);
        break;
      default:
        console.log("lipa");
        break;
    }
  };

  return (
    <div className={styles.filtersContainer}>
      <section className={styles.filtersSection}>
        <header className={styles.filtersHeader}>Filter by type</header>
        <button className={styles.showAllButton} onClick={showAllButtonHandler}>
          Show all types
        </button>
        {typesArray.map((element) => (
          <div key={element} className={styles.typeFilterContainer}>
            <input
              value={element}
              type="checkbox"
              className={styles.checkbox}
              onChange={checkBoxHandler}
            />
            <label className={styles.typeLabel}>
              {capitalizeFirstLetter(element)}
            </label>
          </div>
        ))}
      </section>
      <section>
        <header className={styles.header}>Sort Subtypes By</header>
        <select onChange={sortingHandler}>
          <option value="ascendingName">Name (A-Z)</option>
          <option value="descendingName">Name (Z-A)</option>
          <option value="ascendingPrice">Price (Highest to Lowest)</option>
          <option value="descendingPrice">Price (Lowest to Highest)</option>
        </select>
      </section>
    </div>
  );
};

export default FilterBar;

/*  Old useEffect 
    const initializeTypes = async () => {
      const data = await getPastaTypes(process.env.REACT_APP_FIREBASE_URL);

      for (const type in data) {
        setTypesArray((prevState) => [...prevState,type]);
      }
    };

    initializeTypes().catch((err) => console.error(err));



const sortHandler = async (event) => {
  const sortType = event.target.value;

  switch (sortType) {
    case "ascendingName":
      toSort.map((element) => element.Name.sort((a, b) => a - b));
      console.log(toSort);
      break;
    case "descendingName":
      toSort.map((element) => element.Name.sort((a, b) => a + b));
      console.log(toSort);
      break;
    case "ascendingPrice":
      toSort.map((element) => element.Price.sort((a, b) => a - b));
      console.log(toSort);
      break;
    case "descendingPrice":
      toSort.map((element) => element.Price.sort((a, b) => a + b));
      console.log(toSort);
      break;
    default:
      console.log("lipa");
      break;
  }

   <section>
        <header className={styles.header}>Sort Subtypes By</header>
        <select onChange={sortHandler}>
          <option value="ascendingName">Name (A-Z)</option>
          <option value="descendingName">Name (Z-A)</option>
          <option value="descendingPrice">Price (Highest to Lowest)</option>
          <option value="ascendingPrice">Price (Lowest to Highest)</option>
        </select>
      </section>

};

*/
