import { useCallback, useEffect } from "react";
import { specificPastaTypeObj } from "../../firebase/fetchingData";
import SinglePastaType from "../SinglePastaType/SinglePastaType";
import styles from "./PastaType.module.css";

const PastaType = (props) => {
  const { title, type, subTypes, setSubTypes } = props;

  const initializeSubTypesArray = useCallback(async () => {
    let arr = [];
    const response = await specificPastaTypeObj(arr, type);
    // props.initData(response);
  }, []);

  initializeSubTypesArray();

  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.type}>{title}</h1>
        <ul className={styles.list}>
          {subTypes.map((element, index) => (
            <li key={index} className={styles.typeBox}>
              <SinglePastaType
                subTypes={props.subTypes}
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
