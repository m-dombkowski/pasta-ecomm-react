import { Link } from "react-router-dom";
import "../../fonts/fonts.css";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Pasta is love, pasta is life!</h1>
        <Link className={styles.button} to="/">
          Find out more
        </Link>
      </div>
    </section>
  );
};

export default Hero;
