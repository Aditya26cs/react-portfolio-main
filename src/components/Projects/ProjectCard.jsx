import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.container}>
      
      {/* 1. Browser Window Header & Image */}
      <div className={styles.imageWrapper}>
        <div className={styles.browserHeader}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
        <img
          src={getImageUrl(imageSrc)}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>

      {/* 2. Text Content */}
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        
        {/* Tech Stack Chips */}
        <ul className={styles.skills}>
          {skills.map((skill, id) => (
            <li key={id} className={styles.skill}>
              {skill}
            </li>
          ))}
        </ul>
        
        {/* Buttons */}
        <div className={styles.links}>
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.link}>
            Demo ↗
          </a>
          <a href={source} target="_blank" rel="noopener noreferrer" className={styles.link}>
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};