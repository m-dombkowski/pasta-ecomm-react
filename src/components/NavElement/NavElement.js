import { NavLink } from "react-router-dom";
import styles from "./NavElement.module.css";

const NavElement = (props) => {
  return (
    <li className={props.anchorClass}>
      <NavLink className={props.navStyle} to={props.path}>
        <img className={props.svgClass} src={props.svg} alt={props.alt} />{" "}
        <span className={props.textStyle}>{props.text}</span>
      </NavLink>
    </li>
  );
};

export default NavElement;
