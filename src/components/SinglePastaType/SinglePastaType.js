import { Fragment, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../features/cartSlice/cartSlice";
import styles from "./SinglePastaType.module.css";

const SinglePastaType = ({ loopElement, index, subTypes }) => {
  const errorMessage = useSelector((state) => state.cart.errorMessage);
  const dispatch = useDispatch();

  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, subTypes.length);
  }, [subTypes.length]);

  const addToCartHandler = (event) => {
    event.preventDefault();

    for (const key in subTypes) {
      if (subTypes[key].Name === event.target.children[0].innerHTML) {
        dispatch(
          cartActions.addItemToCart({
            id: subTypes[key].id,
            name: subTypes[key].Name,
            price: subTypes[key].Price,
            quantity: +itemsRef.current[key].value,
            totalItemPrice: subTypes[key].Price * +itemsRef.current[key].value,
          })
        );
      }
    }
    itemsRef.current.map((element) => (element.value = ""));
  };

  return (
    <Fragment>
      <form onSubmit={addToCartHandler} className={styles.cartForm}>
        <label className={styles.pastaName}>{loopElement.Name}</label>
        <label className={styles.pastaPrice}>{loopElement.Price} $/kg</label>
        <input
          type="number"
          className={styles.numberInput}
          step="0.1"
          ref={(element) => (itemsRef.current[index] = element)}
        />
        <input
          type="submit"
          value="Add to Cart"
          className={styles.submitButton}
        />
      </form>
      <div>{errorMessage && <p>{errorMessage}</p>}</div>
    </Fragment>
  );
};

export default SinglePastaType;
