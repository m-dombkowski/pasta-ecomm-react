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

const FilterBar = (props) => {
  const { subTypes, setSortingValue } = props;
  const dispatch = useDispatch();
  const [typesArray, setTypesArray] = useState([]);

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

  const sortingHandler = (event) => {
    const sortType = event.target.value;

    console.log(subTypes);

    switch (sortType) {
      case "ascendingName":
        // subTypes.sort(dispatch.sortingActions.sortNameAtoZ());
        subTypes.sort(sortNameAToZ);
        console.log(subTypes);
        props.setSortingValue("ascendingName");
        break;
      case "descendingName":
        subTypes.sort(sortNameZToA);
        console.log(subTypes);
        props.setSortingValue("descendingName");
        break;
      case "descendingPrice":
        subTypes.sort(sortPriceHighToLow);
        console.log(subTypes);
        props.setSortingValue("descendingPrice");
        break;
      case "ascendingPrice":
        subTypes.sort(sortPriceLowToHigh);
        console.log(subTypes);
        props.setSortingValue("ascendingPrice");
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
