import { useEffect, useState } from "react";
import styles from "./PastaType.module.css";

const PastaType = (props) => {
  const [arr, setArr] = useState([]);

  useEffect(() => {
    let array = [];
    const initializeArray = async () => {
      const data = await props.specificSubTypeObj(array, props.type);
      for (let i = 0; i < data.length; i++) {
        setArr(data);
      }
    };

    initializeArray().catch((err) => console.log(err));
  }, [props]);

  return (
    <div className={styles.mainContainer}>
      <h1 className={styles.type}>{props.title}</h1>
      <ul className={styles.list}>
        {arr.map((element) => (
          <li key={Math.random()} className={styles.typeBox}>
            <p className={styles.pastaName}>{element.Name}</p>
            <p className={styles.pastaPrice}>{element.Price} $/kg</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PastaType;
