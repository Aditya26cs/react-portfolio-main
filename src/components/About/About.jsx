import styles from "./About.module.css";
import aboutImage from "../../assets/about/passportPHOTO.jpeg";
 

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles?.aboutImage}
        />
        <div className={styles.aboutText}>
          <h3>I'm a passionate MEAN stack developer who loves turning ideas into fully functional web apps.</h3>
          <ul>
            <li>💻 Skilled in MongoDB, Express.js, Angular, and Node.js</li>
            <li>🚀 Focused on creating fast and scalable solutions</li>
            <li>🎯 Clean code + great user experience = my development mantra</li>
            <li>📚 Always learning and exploring new technologies</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
