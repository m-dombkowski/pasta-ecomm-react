import React, { useCallback, useEffect } from "react";
import { specificPastaTypeObj } from "../../firebase/fetchingData";
import styles from "./PastaType.module.css";

const PastaType = (props) => {
  const { title, state, type } = props;

  console.log(state);

  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.type}>{title}</h1>
        <ul className={styles.list}>
          {state.map((element) => {
            return (
              <li key={Math.random()} className={styles.typeBox}>
                <p className={styles.pastaName}>{element.Name}</p>
                <p className={styles.pastaPrice}>{element.Price} $/kg</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PastaType;

// console.log(context.initializeArray());

// const [p, setP] = useState([]);

// const test = useCallback(async () => {
//   let arr = [];
//   const data = await specificPastaTypeObj(arr, type);
//   setP(data);
// }, [type]);

// useEffect(() => {
//   test();
// }, [test]);
