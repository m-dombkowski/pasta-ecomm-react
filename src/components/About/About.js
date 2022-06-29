import styles from "./About.module.css";
import "../../fonts/fonts.css";
import pastaImg from "../../assets/pastaRaw.jpg";
import sparkles from "../../assets/sparkles.jpg";
import flour from "../../assets/flour.jpg";

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.aboutUsSection}>
        <h1 className={styles.mainTitle}>
          Who we are and what are we really doing?
        </h1>
        <div className={styles.gridContainer}>
          <img
            src={pastaImg}
            alt="different pasta types on the table"
            className={[styles.img, styles.leftImg].join(" ")}
          />
          <div className={styles.textContainer}>
            <p className={styles.history}>
              We are a small family company created back in the early XX century
              in the sunny and beautiful south of Italy.
            </p>
            <p>
              Since then a lot time has passed and a lot of things had happened
              but we still have the same principles like we used to, do it with
              your heart and make it like it's for yourself.
            </p>
          </div>
        </div>
        <div className={styles.gridContainer}>
          <div className={styles.textContainer}>
            <p className={styles.awardsTitle}>
              Out pasta has won a great deal of international awards. Just some
              of the most recent ones:
            </p>
            <ul className={styles.list}>
              <li className={styles.award}>Pastellinni 2020</li>
              <li className={styles.award}>Pasta Masters 2021,2022</li>
              <li className={styles.award}>Pasta La Vista 2021</li>
              <li className={styles.award}>Best New Vegetarian Product 2020</li>
              <li className={styles.award}>Mamma Mia 2020, 2021</li>
              <li className={styles.award}>Pasta of the year 2019,2020,2022</li>
            </ul>
            <p>And many, many more...</p>
          </div>
          <img
            src={sparkles}
            alt="sparkles (cold fires) by Ethan Hoover from Unsplash
            "
            className={[styles.img, styles.rightImg].join(" ")}
          />
        </div>
      </section>
      <section className={styles.aboutProductsSection}>
        <h2 className={styles.productsSectionTitle}>About our products</h2>
        <div className={styles.sectionWrapper}>
          <div className={styles.textContainer}>
            <p>
              We are using the best of bests and not a lab with powders and
              liquids that no one can pronounce the names of. We are very picky
              when it comes to our ingredients. We only use the best nature has
              to offer.
            </p>
            <p>
              Of course most types of pasta has similar if not identical
              ingredients but the perfect ratio and way of preparation makes our
              pasta one of the best if not the best in the world{" "}
            </p>
          </div>
          <div className={styles.textContainer}>
            <div className={styles.pastaTypesContainer}>
              <h2>Pasta we make can be divided into 5 types</h2>
              <ul className={styles.pastaTypes}>
                <li>Long</li>
                <li>Short</li>
                <li>Sheet</li>
                <li>Filled</li>
                <li>Dumpling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
