import styles from "./About.module.css";
import "../../fonts/fonts.css";
import pastaImg from "../../assets/pastaRaw.jpg";
import sparkles from "../../assets/sparkles.jpg";
import { Link } from "react-router-dom";

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
            alt="Sparkles (cold fires) by Ethan Hoover on Unsplash
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
            <div className={styles.pastaTypesContainer}>
              <h2>Pasta we make can be divided into 5 types</h2>
              <ul className={styles.pastaGroups}>
                <li className={styles.pastaTypeAnchor}>
                  <Link to="/">Long</Link>
                </li>
                <li>
                  <Link className={styles.pastaTypeAnchor} to="/">
                    Short
                  </Link>
                </li>
                <li>
                  <Link className={styles.pastaTypeAnchor} to="/">
                    Sheet
                  </Link>
                </li>
                <li>
                  <Link className={styles.pastaTypeAnchor} to="/">
                    Filled
                  </Link>
                </li>
                <li>
                  <Link className={styles.pastaTypeAnchor} to="/">
                    Dumpling
                  </Link>
                </li>
              </ul>
            </div>
            <div className={styles.allTypesContainer}>
              <h3 className={styles.type}>Long</h3>
              <ul className={styles.longList}>
                <li className={styles.typeBox}>
                  <div>
                    <p>Angel's Hair</p>
                  </div>
                </li>
                <li className={styles.typeBox}>
                  <div>
                    <p>Bucatini</p>
                  </div>
                </li>
                <li className={styles.typeBox}>
                  <div>
                    <p>Fettuccine</p>
                  </div>
                </li>
                <li className={styles.typeBox}>
                  <div>
                    <p>Spaghetti</p>
                  </div>
                </li>
                <li className={styles.typeBox}>
                  <p>Linguine</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Pappardelle</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Tagliatelle</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Vermicelli</p>
                </li>
              </ul>
              <h3 className={styles.type}>Short</h3>
              <ul className={styles.shortList}>
                <li className={styles.typeBox}>
                  <p>Campanelle</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Casarecce</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Cavatappi</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Fusilli</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Radiatori</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Rotini</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Elbows</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Farfalle</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Gemelli</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Rotelli</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Rigatoni</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Orecchiette</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Ziti</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Conchiglie</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Orzo</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Ditalini</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Penne</p>
                </li>
              </ul>
              <h3 className={styles.type}>Sheet</h3>
              <ul className={styles.sheetList}>
                <li className={styles.typeBox}>
                  <p>Lasagne</p>
                </li>
              </ul>
              <h3 className={styles.type}>Filled</h3>
              <ul className={styles.filledList}>
                <li className={styles.typeBox}>
                  <p>Tortellini</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Ravioli</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Manicotti</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Cannelloni</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Jumbo shells</p>
                </li>
                <li className={styles.typeBox}>
                  <p>Mezzelune</p>
                </li>
              </ul>
              <h3 className={styles.type}>Dumpling</h3>
              <ul className={styles.dumplingList}>
                <li className={styles.typeBox}>
                  <p>Gnocchi</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
