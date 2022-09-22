import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sortSlice, {
  initializeArrayToSort,
  sortingActions,
} from "../../features/sorting/sortingSlice";
import { capitalizeFirstLetter } from "../../helpers/helpers";
import SinglePastaType from "../SinglePastaType/SinglePastaType";
import styles from "./PastaType.module.css";

const PastaType = (props) => {
  const { title, subTypes } = props;

  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.type}>{title}</h1>
        <ul className={styles.list}>
          {subTypes.map(
            (element, index) =>
              capitalizeFirstLetter(element.Type) === title && (
                <li key={index} className={styles.typeBox}>
                  <SinglePastaType
                    subTypes={props.subTypes}
                    index={index}
                    loopElement={element}
                  />
                </li>
              )
          )}
        </ul>
      </div>
    </div>
  );
};

export default PastaType;

// const init = useCallback(async () => {
//   let arr = [];
//   const response = await specificPastaTypeObj(arr, type);
//   console.log(response);
// }, []);

// useEffect(() => {
//   init();
// }, [init]);

{
  /* <li key={index} className={styles.typeBox}>
<SinglePastaType
  subTypes={props.subTypes}
  index={index}
  loopElement={element}
/>
</li> */
}
