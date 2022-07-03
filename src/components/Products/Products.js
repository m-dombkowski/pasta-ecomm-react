import { Fragment } from "react";
import { getPastaTypes } from "../../firebase/fetchingData";
import PastaType from "../PastaType/PastaType";
import styles from "./Products.module.css";

const Products = () => {
  const specificPastaTypeObj = async (typeName) => {
    const data = await getPastaTypes(process.env.REACT_APP_FIREBASE_URL);
    for (const name in data) {
      if (name === typeName) {
        return data[name];
      }
    }
  };

  const specificPastaTypeNames = async (array, setArray, typeName) => {
    const data = await specificPastaTypeObj(typeName);
    for (const name in data) {
      if (!array.includes(name)) {
        setArray((prevState) => [...prevState, name]);
      }
    }
  };
  const getPrice = async (typeName) => {
    const data = await specificPastaTypeObj(typeName);
    for (const price in data) {
      console.log(data[price]);
    }
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <PastaType
          title="Long"
          type="long"
          typeNames={specificPastaTypeNames}
          price={getPrice}
        />
        <PastaType
          title="Short"
          type="short"
          typeNames={specificPastaTypeNames}
        />

        <PastaType
          title="Sheet"
          type="sheet"
          typeNames={specificPastaTypeNames}
        />
        <PastaType
          title="Filled"
          type="filled"
          typeNames={specificPastaTypeNames}
        />
        <PastaType
          title="Dumpling"
          type="dumpling"
          typeNames={specificPastaTypeNames}
        />
      </div>
    </Fragment>
  );
};

export default Products;
