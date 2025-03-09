import styles from "./About.module.css";

function About() {
  return (
    <div className={styles.about} id="about">
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}>
          <img src="./about.png" alt="About Car" />
        </div>
        <div className={styles.aboutText}>
          <h3>
            A Revolutionary Vision of
            <br /> the Future
          </h3>
          <p>
            The BMW – OUT OF THREE BOX website embraces a dark, futuristic UI,
            placing the spotlight on the vehicle’s unique design and
            engineering.
          </p>
          <br />
          <p>
            A cinematic hero image draws users into the experience, while a
            sleek, minimalist layout enhances readability and engagement. The
            interface is designed for seamless navigation, emphasizing key
            features like sustainability, performance, and AI-driven technology.
          </p>
          <br />
          <p>
            Smooth animations and interactive elements ensure an immersive
            digital experience, matching the car’s forward-thinking vision.
            Would you like suggestions for interactive elements or animations to
            enhance the site’s user experience? 🚀
          </p>

          <button className="btn-outline">Know more</button>
        </div>
      </div>
    </div>
  );
}

export default About;
