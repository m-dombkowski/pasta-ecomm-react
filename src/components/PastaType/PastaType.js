import React, { useCallback, useEffect, useRef, useState } from "react";

import { specificPastaTypeObj } from "../../firebase/fetchingData";
import styles from "./PastaType.module.css";

const PastaType = (props) => {
  const { title, type } = props;
  const numberRef = useRef();

  const [p, setP] = useState([]);

  const test = useCallback(async () => {
    let arr = [];
    const data = await specificPastaTypeObj(arr, type);
    setP(data);
  }, [type]);

  useEffect(() => {
    test();
  }, [test]);

  const submitHandler = (event) => {
    event.preventDefault();

    for (const key in p) {
      if (p[key].Name === event.target.children[0].innerHTML) {
        console.log({
          price: p[key].Price * +numberRef.current.value,
          name: event.target.children[0].innerHTML,
          quantity: +numberRef.current.value,
        });
      }
    }
  };

  const validateNumberInput = () => {
    const numberValue = numberRef.current.value;
    if (+numberValue > 9999) {
      console.log("nope");
    }
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.type}>{title}</h1>
        <ul className={styles.list}>
          {p.map((element) => {
            return (
              <li key={Math.random()} className={styles.typeBox}>
                <form onSubmit={submitHandler} className={styles.cartForm}>
                  <label className={styles.pastaName}>{element.Name}</label>
                  <label className={styles.pastaPrice}>
                    {element.Price} $/kg
                  </label>

                  <input
                    type="number"
                    className={styles.numberInput}
                    step="0.1"
                    onChange={validateNumberInput}
                    ref={numberRef}
                  />
                  <input
                    type="submit"
                    value="Add to Cart"
                    className={styles.submitButton}
                  />
                </form>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PastaType;
