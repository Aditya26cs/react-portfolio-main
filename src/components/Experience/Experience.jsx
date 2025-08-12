import React from "react";
import styles from "./Experience.module.css";
import history from "../../data/history.json";

const Experience = () => {
  return (
    <section className={styles.experienceSection}>
      <h2 className={styles.heading}>Experience</h2>
      <div className={styles.cardsContainer}>
        {history.map((item, idx) => (
          <div className={styles.card} key={`${item.company || 'company'}-${idx}`} style={{ animationDelay: `${idx * 0.2}s` }}>
            <div className={styles.logoWrapper}>
              <img src={`/assets/history/${item.logo}`} alt={item.company} className={styles.logo} />
            </div>
            <div className={styles.details}>
              <h3 className={styles.company}>{item.company}</h3>
              <p className={styles.role}>{item.role}</p>
              <p className={styles.duration}>{item.duration}</p>
              <p className={styles.description}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
