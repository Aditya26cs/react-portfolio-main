import React from "react";
import { motion } from "framer-motion";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

import emailIcon from "../../assets/contact/emailIcon.png";
import linkedinIcon from "../../assets/contact/linkedinIcon.png";
import githubIcon from "../../assets/contact/githubIcon.png";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      
      {/* 1. TITLE SECTION */}
      <motion.div 
        className={styles.titleWrapper}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.sectionTitle}>
          <span className={styles.hollowText}>GET IN</span>
          <span className={styles.colorText}>TOUCH</span>
        </h2>
        <p className={styles.subtitle}>
          Have a project in mind or just want to say hi? My inbox is always open!
        </p>
      </motion.div>

      {/* 2. CONTACT CARDS */}
      <ul className={styles.links}>
        
        {/* Email Card */}
        <motion.li 
          className={styles.link}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <a href="mailto:amaheshwari819@gmail.com">
            <img src={emailIcon} alt="Email" className={styles.icon} />
            <span className={styles.linkText}>Email</span>
          </a>
        </motion.li>

        {/* LinkedIn Card */}
        <motion.li 
          className={styles.link}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
        >
          <a href="https://www.linkedin.com/in/adityamaheshwari00/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className={styles.icon} />
            <span className={styles.linkText}>LinkedIn</span>
          </a>
        </motion.li>

        {/* GitHub Card */}
        <motion.li 
          className={styles.link}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a href="https://github.com/Aditya26cs" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className={styles.icon} />
            <span className={styles.linkText}>GitHub</span>
          </a>
        </motion.li>
      </ul>
    </footer>
  );
};