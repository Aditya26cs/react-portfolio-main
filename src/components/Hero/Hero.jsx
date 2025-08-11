import React from "react";

import styles from "./Hero.module.css";
import heroImage from "../../assets/hero/heroImage.png";
import cssIcon from "../../assets/skills/css.png";
import figmaIcon from "../../assets/skills/figma.png";
import graphqlIcon from "../../assets/skills/graphql.png";
import htmlIcon from "../../assets/skills/html.png";
import mongodbIcon from "../../assets/skills/mongodb.png";
import nodeIcon from "../../assets/skills/node.png";
import reactIcon from "../../assets/skills/react.png";
import { ParticleBackground } from "./ParticleBackground";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <ParticleBackground />
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I’m Aditya Maheshwari
        </h1>
        <h2 className={styles.subheading}>
          MERN Stack Developer | Turning ideas into interactive web experiences
        </h2>
        <p className={styles.summary}>
          Specializing in building high-performance, scalable, and user-friendly web applications.
        </p>
        <div className={styles.ctaBtns}>
          <a href="#projects" className={styles.primaryBtn}>View My Projects</a>
          <a href="#contact" className={styles.secondaryBtn}>Get In Touch</a>
        </div>
        <div className={styles.techIconsBg}>
          <img src={reactIcon} alt="React" className={styles.techIcon} />
          <img src={nodeIcon} alt="Node.js" className={styles.techIcon} />
          <img src={mongodbIcon} alt="MongoDB" className={styles.techIcon} />
          <img src={cssIcon} alt="CSS" className={styles.techIcon} />
          <img src={htmlIcon} alt="HTML" className={styles.techIcon} />
          <img src={graphqlIcon} alt="GraphQL" className={styles.techIcon} />
          <img src={figmaIcon} alt="Figma" className={styles.techIcon} />
        </div>
      </div>
      <img
        src={heroImage}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
