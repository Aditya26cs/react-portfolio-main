import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

export const Experience = () => {
  const history = [
    {
      company: "MAQ Software",
      role: "Software Engineer Intern",
      date: "May 2024 - Present",
      description: [
        "Developed scalable backend APIs using Node.js and Express.",
        "Optimized database queries in MongoDB, reducing load times by 20%.",
        "Collaborated with senior developers to integrate React frontend components."
      ]
    }
  ];

  return (
    <section className={styles.container} id="experience">
      
      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sectionTitle}
      >
        <span className={styles.hollowText}>MY</span>
        <span className={styles.colorText}>EXPERIENCE</span>
      </motion.h2>

      <div className={styles.contentWrapper}>
        
        {/* The Continuous Vertical Line */}
        <div className={styles.timelineLine}></div>

        <div className={styles.cardsContainer}>
          {history.map((item, id) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: id * 0.2 }}
              className={styles.card}
            >
              {/* The Glowing Dot (Timeline Marker) */}
              <div className={styles.timelinePoint}></div>

              {/* The Content Card */}
              <div className={styles.cardContent}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <h4 className={styles.company}>{item.company}</h4>
                  </div>
                  <span className={styles.date}>{item.date}</span>
                </div>
                
                <ul className={styles.descriptionList}>
                  {item.description.map((desc, index) => (
                    <li key={index} className={styles.descItem}>
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;