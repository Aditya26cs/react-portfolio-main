// About.tsx
import { motion } from "framer-motion";
import aboutImage from "../../assets/about/passportPHOTO.jpeg";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section id="about" className={styles.container}>
      {/* SECTION TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.sectionTitle}
      >
        About <span>Me</span>
      </motion.h2>

      <div className={styles.gridContainer}>
        {/* PROFILE CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.profileCard}
        >
          <img src={aboutImage} alt="Aditya" className={styles.avatar} />
          <h3 className={styles.name}>Aditya Maheshwari</h3>
          <span className={styles.badge}>MEAN Stack Developer</span>
        </motion.div>

        {/* BIO CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={styles.bioCard}
        >
          <h3>Turning ideas into <span>functional reality.</span></h3>
          <p>
            I focus on building fast, scalable solutions with strong emphasis on 
            <strong> Clean Code & Great UX. </strong>
            I constantly learn, iterate, and evolve with tech — because stagnation is not an option.
          </p>
        </motion.div>

        {/* SKILLS CARD */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className={styles.skillsCard}
        >
          {[
            ["🚀", "Scalable Backend Systems"],
            ["💻", "MongoDB • Express • Angular • Node"],
            ["📚", "Continuous Learner"],
          ].map(([icon, text], idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, x: 5 }}
              className={styles.skillItem}
            >
              <span>{icon}</span>
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
