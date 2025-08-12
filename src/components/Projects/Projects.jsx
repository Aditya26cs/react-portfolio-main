import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section className={styles.sectionWrapper} id="projects">
      <div className={styles.container}>
        <h2 className={styles.title}>Projects</h2>
        <div className={styles.projectsList}>
          {projects.map((project, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={project.title + idx}
                className={`${styles.projectCard} ${isEven ? styles.leftImage : styles.rightImage}`}
              >
                {isEven ? (
                  <>
                    <div className={styles.imageWrapper}>
                      <img src={project.image} alt={project.title} className={styles.projectImage} />
                    </div>
                    <div className={styles.detailsWrapper}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDesc}>{project.description}</p>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                          View Project
                        </a>
                      )}
                    </div>
                  </>
                ) : (
                  <>
                    <div className={styles.detailsWrapper}>
                      <h3 className={styles.projectTitle}>{project.title}</h3>
                      <p className={styles.projectDesc}>{project.description}</p>
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className={styles.viewBtn}>
                          View Project
                        </a>
                      )}
                    </div>
                    <div className={styles.imageWrapper}>
                      <img src={project.image} alt={project.title} className={styles.projectImage} />
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
