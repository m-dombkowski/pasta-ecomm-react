import "../../fonts/fonts.css";
import styles from "./Hero.module.css";
import heroBackground from "./../../assets/pastaHorizontal.jpg";

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>Pasta is love, pasta is life!</h1>
        <a href="/" className={styles.button}>
          <span>FIND MORE...</span>
        </a>
      </div>
    </section>
  );
};

export default Hero;
