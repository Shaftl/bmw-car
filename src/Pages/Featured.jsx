import styles from "./Featured.module.css";

const featuredCars = [
  {
    id: 1,
    name: "BMW i7 M70",
    price: "$168,500",
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331rjFhnOqIbqcuu7L3hS47NWJeiVZG4YuzH7Qj9vQFukYcE47UAzLekjnWuOnhJP%25z6eEzFu4fXBjv6z5PftE6BmudhSId4k9VTCrms8fnOl6JQD0mbH8IAeb6qVhFUwlkIVugDLJaCnTNUmVitE61IXQa7GqPx%25aMpygDAM3aJkeYVo70U29lGNHf1hJPX65e3gZ8X5mMxoRCzTWeu%25ViPRKVZVYpezWhbNm6ivPo90ya7wbHi4TnYR9%25wc3OK7iftxdIbew178zB9itECUkepP7slGAMaUCrXpF7i%25lZQ6KCZfXRaYWlRwQ5nmPXiUagOybQ%257nvIT9aNZO2B3inFMIjedwOoGBDMztPuzeqhk7bSZMLoAC9B7hJHFlEYjou%25KXs0KHSfWQrsb%25V1Pa8ILfNEbnULL10s9OGdEE4riIpnLscZwB84HrxRteUcgZ857MGxkRUgChp8B5GaRhj5sgXAOHCrmoShtPo584G",
  },
  {
    id: 2,
    name: "BMW X5 M Competition",
    price: "$122,300",
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331rjFhnOqIbqcau7L3hS47NWJeiVZG4YuzH7Qj9vQFukYcE47UAzLekjnWuOnhJP%25z6eEzFu4fXBjv6z5PxtE6BmudhSId4k9VTCrms8fnOl6JQD0mbH8IAeb6qVhFUwlkIVugDLJaCnTNUm1ZtE61IXQa7GqPx%25aMpygDAM3aJkeYVo70U29lGNHf1hJPX65e3gZ8X5mMxoRCzTWeu%25ViPRKVZVYV2zWhbNmN8QPo90yYh6bHi4TmJd9%25wc3Ol7iftxdIyVw178zBZEtECUkep37slGAtnjCrXpF7r%25lZQ6KCZiXRaYWl98Q5nmPXEaagOybQ%257nvIT9aNSO2B3inFZIjedwOsIBDMztPDgeqhk7b1vMLoAC9VAhJHFlEYVou%25KXs0KHSfWQr4y%25V1PaZ3LfNEbnRZi10s9O5DZE4riIg6iscZwB6krrxlsBgrfZ7dQMw1peLB9Fer4Vx",
  },
  {
    id: 3,
    name: "BMW M8 Coupe",
    price: "$134,100",
    image:
      "https://prod.cosy.bmw.cloud/bmwweb/cosySec?COSY-EU-100-7331pKAuhFqIbVBIHS9gwyljT5lkQM37fNwsKTHRKb0UrOoJqTKQwXXRTXe4bkAhFUhZO%25moubJR1EsHWpIAqsvPwcGQv7sYob%2573Vx19mXOPoxT2aKJnXRT%25NHC9%25vGx6672gfrR5iWw8jSc29Fe0ApbFdKVZcYuzHNWD19msgBGTvEit7bH84lNHCHvHnR0Kc%252%25Ou4WxfjfI4cP81D10OxbUEqjNX89GsLD9FUiprJqT9Gw6ZuLicptYRSJyL67m5VuTkYCygNWz3mlTv0PGiyX324bpzTQdjc9Q23azDxiyZdnkq8wVdzOALUtumkIFJGzbWABKupk81FeWS6AUuKMPVYFzeWhbNmKhjPo90yWocbHi4TPHx9%25wc3bnFiftxd9O%25w178zijotECUkw5O7slGAtgICrXpF7TulZQ6KCOlXRaYWlHXQ5nmPk5sagOybAh5nvIT9FteO2B3iKLSIjedwWJGBDMztPp8eqhk7bI5MLoAC1Q2hJHFlERLou%25KXs0BHSfWQr4m%25V1PaZr9fNEbnRpy10s9O5D6E4riIpgSscZwB6nSrxRteYVVZ857MmFRRUgChyeW5GvloTjegp2XH2Lsv6jQ%25jEr2YDafD97jmqn1q%25HDyLOELA9qTJIsJZWL3uBruRQJdSeZS37uzVMRVbMSkNh5FxDVA0ogKLNNF4HvWCL0Kc%252P9G4WxfjbipcP81D9WSxbUEqiPp89GsLwbIUiprJt9DGw6ZukYoptvYaSwN65eO%25uF4WsKokGpc1Q8CBsJdotX2bgXAJz6410trgdRpEiyZI6M3",
  },
];

const Featured = () => {
  return (
    <section className={styles.featuredSection} id="featured">
      <div className={styles.featuredSectionContainer}>
        <h3>Featured BMW Models</h3>
        <div className={styles.featuredSectionBox}>
          {featuredCars.map((car, index) => (
            <div key={index} className={styles.featuredSectionCard}>
              <img src={car.image} alt={car.name} className={styles.image} />
              <h4>{car.name}</h4>
              <p className={styles.price}>{car.price}</p>
              <button className="btn-outline">Explore</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
