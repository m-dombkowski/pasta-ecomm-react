import { useEffect, useState } from "react";
import { getPastaTypes } from "../../firebase/fetchingData";
import styles from "./FilterBar.module.css";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import types from "@testing-library/user-event";

const FilterBar = (props) => {
  const [typesArray, setTypesArray] = useState([]);

  useEffect(() => {
    const initializeTypes = async () => {
      const data = await getPastaTypes(process.env.REACT_APP_FIREBASE_URL);

      for (const type in data) {
        setTypesArray((prevState) => [...prevState, type]);
      }
    };

    initializeTypes().catch((err) => console.error(err));
  }, []);

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

  console.log(props.filterState);

  return (
    <div className={styles.filtersContainer}>
      <section>
        <header className={styles.header}>Filter by type</header>
        <button className={styles.showAllButton} onClick={showAllButtonHandler}>
          Show all
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
    </div>
  );
};

export default FilterBar;
