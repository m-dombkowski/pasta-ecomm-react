import { Fragment } from "react";
import { getPastaTypes } from "../../firebase/fetchingData";
import FilterBar from "../FilterBar/FilterBar";
import PastaType from "../PastaType/PastaType";
import styles from "./Products.module.css";

const Products = () => {
  const pastaObj = async (typeName) => {
    const data = await getPastaTypes(process.env.REACT_APP_FIREBASE_URL);
    for (const name in data) {
      if (name === typeName) {
        return data[name];
      }
    }
  };

  const specificPastaTypeObj = async (array, typeName) => {
    const data = await pastaObj(typeName);
    for (const name in data) {
      array.push(data[name]);
    }
    return array;
  };

  return (
    <div className={styles.container}>
      <FilterBar />
      <div className={styles.productsContainer}>
        <PastaType
          title="Long"
          type="long"
          specificSubTypeObj={specificPastaTypeObj}
        />
        <PastaType
          title="Short"
          type="short"
          specificSubTypeObj={specificPastaTypeObj}
        />

        <PastaType
          title="Sheet"
          type="sheet"
          specificSubTypeObj={specificPastaTypeObj}
        />
        <PastaType
          title="Filled"
          type="filled"
          specificSubTypeObj={specificPastaTypeObj}
        />
        <PastaType
          title="Dumpling"
          type="dumpling"
          specificSubTypeObj={specificPastaTypeObj}
        />
      </div>
    </div>
  );
};

export default Products;
