import React from "react";
import { motion } from "framer-motion";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard"; // Ensure this path is correct
import { FloatingIcons } from "./FloatingIcons"; 

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <FloatingIcons />
      
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={styles.sectionTitle}
      >
        <span className={styles.hollowText}>FEATURED</span>
        <span className={styles.colorText}>PROJECTS</span>
      </motion.h2>

      <motion.div 
        className={styles.projectsGrid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} 
      >
        {projects.map((project, id) => (
          <motion.div 
             key={id}
             variants={cardVariants}
             style={{ height: "100%" }}
          >
             <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};