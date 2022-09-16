import React, { Fragment, useCallback, useEffect, useState } from "react";

import { specificPastaTypeObj } from "../../firebase/fetchingData";
import SinglePastaType from "../SinglePastaType/SinglePastaType";
import styles from "./PastaType.module.css";

const PastaType = (props) => {
  const { title, type } = props;
  const [subTypes, setSubTypes] = useState([]);

  const initializeSubTypesArray = useCallback(async () => {
    let arr = [];
    const data = await specificPastaTypeObj(arr, type);
    setSubTypes(data);
  }, [type]);

  useEffect(() => {
    initializeSubTypesArray();
  }, [initializeSubTypesArray]);

  console.log(subTypes);

  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.type}>{title}</h1>
        <ul className={styles.list}>
          {subTypes.map((element, index) => (
            <li key={index} className={styles.typeBox}>
              <SinglePastaType
                subTypes={subTypes}
                index={index}
                loopElement={element}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PastaType;
