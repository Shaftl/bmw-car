import styles from "./Footer.module.css";
import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
} from "@phosphor-icons/react";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h2>BMW - The Ultimate Driving Machine</h2>
          <p>
            Experience innovation, performance, and luxury with BMW's
            cutting-edge electric vehicles, designed for the future of mobility.
          </p>
        </div>
        <div className={styles.links}>
          <div>
            <h3>Company</h3>
            <ul>
              <li>About</li>
              <li>Cars</li>
              <li>History</li>
              <li>Shop</li>
            </ul>
          </div>
          <div>
            <h3>Information</h3>
            <ul>
              <li>Request a quote</li>
              <li>Find a dealer</li>
              <li>Contact us</li>
              <li>Services</li>
            </ul>
          </div>
          <div>
            <h3>Follow us</h3>
            <div className={styles.socialIcons}>
              <FacebookLogo size={28} className={styles.icon} />
              <InstagramLogo size={28} className={styles.icon} />
              <TwitterLogo size={28} className={styles.icon} />
            </div>
          </div>
        </div>
        <p className={styles.copyright}>
          © Aliabbas Rahimi. All rights reserved
        </p>
      </div>
    </footer>
  );
}
