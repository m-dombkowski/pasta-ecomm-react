import { useEffect, useState } from "react";
import { getPastaTypes } from "../../firebase/fetchingData";
import styles from "./FilterBar.module.css";
import { capitalizeFirstLetter } from "../../helpers/helpers";

const FilterBar = () => {
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

  return (
    <div className={styles.filtersContainer}>
      <section>
        <header>Filter by type</header>
        {typesArray.map((element) => (
          <div key={element} className={styles.typeFilterContainer}>
            <label className={styles.typeLabel}>
              {capitalizeFirstLetter(element)}
            </label>
            <input value={element} type="checkbox" />
          </div>
        ))}
      </section>
    </div>
  );
};

export default FilterBar;
