import { useState, useEffect } from "react";
import styles from "./Header.module.css";

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);
  const navLinks = ["Home", "About", "Popular", "Featured"];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) =>
        document.getElementById(link.toLowerCase())
      );
      const scrollPosition = window.scrollY;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop - 100;
          const offsetBottom = offsetTop + section.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [navLinks]);

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <span
            className={styles.indicator}
            style={{ transform: `translateX(${activeIndex * 100}%)` }}
          ></span>
          {navLinks.map((link, index) => (
            <li key={index} className={styles.navItem}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setActiveIndex(index)}
                className={
                  index === activeIndex
                    ? `${styles.navLink} ${styles.navLinkActive}`
                    : styles.navLink
                }
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Header;
