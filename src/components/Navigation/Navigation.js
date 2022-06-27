import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import pastaSvg from "../../assets/pastaSvg.svg";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.naviList}>
        <li>
          <NavLink className={styles.mainAnchor} to="/">
            <img className={styles.pastaSvg} src={pastaSvg} alt="pasta icon" />{" "}
            <span>Home</span>
          </NavLink>
        </li>
        <li className={styles.userAnchor}>
          <NavLink className={styles.userAnchor2} to="/user">
            User
          </NavLink>
        </li>
        <li className={styles.productsAnchor}>
          <NavLink to="/products">Products</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
