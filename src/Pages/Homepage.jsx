import { useEffect, useState } from "react";
import Header from "../Components/Header";
import styles from "./Homepage.module.css";
import { Lightning, Gauge, ThermometerCold } from "@phosphor-icons/react";

function Homepage() {
  const [activeBg, setActiveBg] = useState("bg1");
  let bgNumber = 1;

  useEffect(function () {
    setInterval(function () {
      bgNumber++;

      if (bgNumber > 3) {
        bgNumber = 1;
      }

      setActiveBg(`bg${bgNumber}`);
    }, 4000);
  }, []);

  return (
    <div className={`${styles.homepage} ${activeBg}`} id="home">
      <Header />
      <div className={styles.heroContainer}>
        <div className={styles.heroBox}>
          <div className={styles.heroText}>
            <h1 className={styles.headinPrimary}>
              BMW - OUT
              <br />
              OF THREE BOX
            </h1>

            <h3 className={styles.headingTertairy}>Fully electric crossover</h3>

            <div className={styles.options}>
              <button
                className={`${styles.option} ${
                  activeBg === "bg1" ? styles.optionActive : null
                }`}
                onClick={() => setActiveBg("bg1")}
              >
                1
              </button>
              <button
                className={`${styles.option} ${
                  activeBg === "bg2" ? styles.optionActive : null
                }`}
                onClick={() => setActiveBg("bg2")}
              >
                2
              </button>
              <button
                className={`${styles.option} ${
                  activeBg === "bg3" ? styles.optionActive : null
                }`}
                onClick={() => setActiveBg("bg3")}
              >
                3
              </button>
            </div>
          </div>
          <div className={styles.carInfo}>
            <button className={styles.info}>
              <Lightning color="#222" weight="fill" size={20} />

              <div className={styles.hover}>
                <h4>94%</h4>
                <p>Power</p>
              </div>
            </button>
            <button className={styles.info}>
              <Gauge color="#222" weight="fill" size={20} />

              <div className={styles.hover}>
                <h4>873</h4>
                <p>Milege</p>
              </div>
            </button>
            <button className={styles.info}>
              <ThermometerCold color="#222" weight="fill" size={20} />

              <div className={styles.hover}>
                <h4>24°</h4>
                <p>Temperture</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
