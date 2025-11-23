import { motion } from "framer-motion";
import styles from "./About.module.css";
import aboutImage from "../../assets/about/passportPHOTO.jpeg";

export const About = () => {
  const skills = [
    ["🚀", "Scalable Backend Systems"],
    ["💻", "MongoDB • Express • React • Node"],
    ["📚", "Continuous Learner"],
  ];

  return (
    <section id="about" className={styles.container}>
      {/* Removed the "Orbs" div here if you want it cleaner */}

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={styles.sectionTitle}
      >
        <span className={styles.hollowText}>ABOUT</span>
        <span className={styles.colorText}>ME</span>
      </motion.h2>

      <div className={styles.gridContainer}>
        {/* Profile Card - CHANGED ANIMATION */}
        {/* Now it just gently fades in and scales up slightly. No big slide. */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.profileCard}
        >
          <div className={styles.avatarWrapper}>
            <img src={aboutImage} alt="Aditya" className={styles.avatar} />
          </div>
          
          <h3 className={styles.name}>Aditya Maheshwari</h3>
          <span className={styles.badge}>MERN Stack Developer</span>
        </motion.div>

        {/* BIO */}
        <motion.div
          initial={{ opacity: 0, x: 50 }} /* Kept slight movement here, or remove x if preferred */
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.bioCard}
        >
          <h3>
            Turning ideas into <span className={styles.colorText}>functional reality</span>.
          </h3>
          <p>
            Building high-performance, scalable apps with a strong focus on{" "}
            <strong>clean code</strong> & <strong>seamless user experience</strong>.
          </p>
        </motion.div>

        {/* SKILLS */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.skillsCard}
        >
          {skills.map(([icon, text], idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.02, x: 5 }}
              className={styles.skillItem}
            >
              <span className={styles.icon}>{icon}</span>
              <p>{text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};