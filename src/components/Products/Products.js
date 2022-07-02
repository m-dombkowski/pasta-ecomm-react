import { Fragment, useEffect, useState } from "react";
import { getData } from "../../firebase/fetchingData";
import styles from "./Products.module.css";

const Products = () => {
  const [pastaArr, setPastaArr] = useState([]);

  useEffect(() => {
    const initializeLongPasta = async () => {
      const data = await getData(process.env.REACT_APP_FIREBASE_URL);
      for (const type in data) {
        for (const name in data[type]) {
          if (!pastaArr.includes(name)) {
            setPastaArr((prevState) => [...prevState, name]);
          }
        }
      }
    };

    initializeLongPasta().catch((error) => console.error(error));
  }, [pastaArr]);

  return (
    <Fragment>
      <div className={styles.container}>
        <ul>
          {pastaArr.map((element) => (
            <li key={Math.random()}>{element}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Products;
