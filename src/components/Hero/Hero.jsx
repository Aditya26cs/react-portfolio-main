import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import cssIcon from "../../assets/skills/css.png";
import htmlIcon from "../../assets/skills/html.png";
import mongodbIcon from "../../assets/skills/mongodb.png";
import nodeIcon from "../../assets/skills/node.png";
import reactIcon from "../../assets/skills/react.png";
import { ParticleBackground } from "./ParticleBackground";

export const Hero = () => {
  const [fillPercentage, setFillPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300; // Scroll distance to complete the fill
      
      // Calculate percentage (0 to 100)
      const percentage = Math.min((scrollY / maxScroll) * 100, 100);
      setFillPercentage(percentage);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={styles.container}>
      <ParticleBackground />
      
      <div className={styles.content}>
        <h1 
          className={styles.title}
          style={{
            // Logic: Start White (#ffffff) -> Scroll -> Fill with Cyan (#00d2ff)
            // The gradient puts the Cyan on top, but hidden by the percentage stop
            background: `linear-gradient(to bottom, #00d2ff ${fillPercentage}%, #ffffff ${fillPercentage}%)`,
            
            // Necessary for the text fill effect
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            
            // Fallback for older browsers
            color: "transparent" 
          }}
        >
          Hi, I’m Aditya Maheshwari
        </h1>
        
        <h2 className={styles.subheading}>
          MERN Stack Developer
        </h2>
        
        <p className={styles.summary}>
          Turning complex ideas into high-performance, scalable, and interactive web experiences.
        </p>
        
        <div className={styles.ctaBtns}>
          <a href="#projects" className={styles.primaryBtn}>View My Projects</a>
          <a href="#contact" className={styles.secondaryBtn}>Get In Touch</a>
        </div>
      </div>

      <div className={styles.techIconsBg}>
          <img src={reactIcon} alt="React" className={styles.techIcon} />
          <img src={nodeIcon} alt="Node.js" className={styles.techIcon} />
          <img src={mongodbIcon} alt="MongoDB" className={styles.techIcon} />
          <img src={cssIcon} alt="CSS" className={styles.techIcon} />
          <img src={htmlIcon} alt="HTML" className={styles.techIcon} />
      </div>

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};