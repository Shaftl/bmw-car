import styles from "./Offers.module.css";

function Offers() {
  return (
    <div className={styles.offers}>
      <div className={styles.offersContainer}>
        <div className={styles.offersText}>
          <h3>
            Do you want to receive
            <br />
            special Offers?
          </h3>

          <p>
            Stay ahead of the curve with exclusive offers, special discounts,
            and early access to the latest BMW models. Subscribe now and be the
            first to experience cutting-edge luxury, performance, and
            innovation. Don't miss out—your dream BMW is just a click away! 🚀✨
          </p>

          <button className="btn-outline">Subscibe Now</button>
        </div>
      </div>
    </div>
  );
}

export default Offers;
