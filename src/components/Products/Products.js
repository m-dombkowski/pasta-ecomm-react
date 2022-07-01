import axios from "axios";
import styles from "./Products.module.css";

const Products = () => {
  const clickHandler = async () => {
    const { data } = await axios.get(
      "https://pasta-shop-f0b05-default-rtdb.europe-west1.firebasedatabase.app/type.json"
    );

    console.log(data);
  };

  return (
    <div className={styles.container}>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
};

export default Products;
