import React, {
  createRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../features/cartSlice/cartSlice";

import { specificPastaTypeObj } from "../../firebase/fetchingData";
import styles from "./PastaType.module.css";

const PastaType = (props) => {
  const { title, type } = props;
  const [subTypes, setSubTypes] = useState([]);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cart = useSelector((state) => state.cart);
  const itemsRef = useRef([]);

  const initializeSubTypesArray = useCallback(async () => {
    let arr = [];
    const data = await specificPastaTypeObj(arr, type);
    setSubTypes(data);
  }, [type]);

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, subTypes.length);
  }, [subTypes.length]);

  useEffect(() => {
    initializeSubTypesArray();
  }, [initializeSubTypesArray]);

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
    console.log(cart);
  };

  const validateNumberInput = (event) => {
    // console.log(event.target.value);
    // const numberValue = numberRef.current.value;
    // if (+numberValue > 9999) {
    //   console.log("nope");
    //   return false;
    // }
  };

  return (
    <div>
      <div className={styles.mainContainer}>
        <h1 className={styles.type}>{title}</h1>
        <ul className={styles.list}>
          {subTypes.map((element, index) => {
            return (
              <li key={index} className={styles.typeBox}>
                <form onSubmit={addToCartHandler} className={styles.cartForm}>
                  <label className={styles.pastaName}>{element.Name}</label>
                  <label className={styles.pastaPrice}>
                    {element.Price} $/kg
                  </label>

                  <input
                    type="number"
                    className={styles.numberInput}
                    step="0.1"
                    onChange={validateNumberInput}
                    ref={(element) => (itemsRef.current[index] = element)}
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
