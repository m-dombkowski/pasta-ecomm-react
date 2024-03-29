import { capitalizeFirstLetter } from "../../helpers/helpers";
import SinglePastaType from "../SinglePastaType/SinglePastaType";
import styles from "./PastaType.module.css";

const PastaType = (props) => {
  const { title, subTypes, sortingValue } = props;

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
                    sortingValue={sortingValue}
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
