import styles from "./Navigation.module.css";
import pastaSvg from "../../assets/pastaSvg.svg";
import userSvg from "../../assets/userSvg.svg";
import cartSvg from "../../assets/cartSvg.svg";
import NavElement from "../NavElement/NavElement";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.naviList}>
        <div className={styles.leftNavSide}>
          <NavElement
            anchorClass={styles.mainAnchor}
            navStyle={styles.singleNavElement}
            path="/"
            svg={pastaSvg}
            svgClass={styles.svg}
            alt="pasta icon"
            text="Home"
            textStyle={styles.text}
          />
        </div>
        <div className={styles.rightNavSide}>
          <NavElement
            anchorClass={styles.productsAnchor}
            path="/products"
            text="Our products"
            textStyle={styles.text}
          />
          <NavElement
            anchorClass={styles.userAnchor}
            path="/user"
            svg={userSvg}
            svgClass={[styles.svg, styles.soloIcon].join(" ")}
            alt="user icon"
          />
          <NavElement
            anchorClass={styles.cartAnchor}
            path="/cart"
            svg={cartSvg}
            svgClass={[styles.svg, styles.soloIcon].join(" ")}
            alt="shopping cart icon"
          />
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
