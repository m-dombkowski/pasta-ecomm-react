import { useEffect, useState } from "react";

import styles from "./FilterBar.module.css";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import { useDispatch } from "react-redux/es/exports";
import { initializeArray } from "../../features/sorting/sortingSlice";

const FilterBar = (props) => {
  const dispatch = useDispatch();
  const [typesArray, setTypesArray] = useState([]);

  useEffect(() => {
    dispatch(initializeArray(setTypesArray));
  }, [dispatch]);

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

  console.log(props.filterState.length);

  return (
    <div className={styles.filtersContainer}>
      <section className={styles.filterSection}>
        <header className={styles.header}>Filter by type</header>
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
        <select onChange={props.sortHandler}>
          <option value="ascendingName">Name (A-Z)</option>
          <option value="descendingName">Name (Z-A)</option>
          <option value="ascendingPrice">Price (lowest to highest)</option>
          <option value="descendingPrice">Price (Highest to lowest</option>
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
*/
