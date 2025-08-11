import React from "react";

import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import googleLogo from "../../assets/history/google.png";
import microsoftLogo from "../../assets/history/microsoft.png";
import netflixLogo from "../../assets/history/netflix.png";
import cssIcon from "../../assets/skills/css.png";
import figmaIcon from "../../assets/skills/figma.png";
import graphqlIcon from "../../assets/skills/graphql.png";
import htmlIcon from "../../assets/skills/html.png";
import mongodbIcon from "../../assets/skills/mongodb.png";
import nodeIcon from "../../assets/skills/node.png";
import reactIcon from "../../assets/skills/react.png";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            let icon;
            switch (skill.imageSrc) {
              case "skills/css.png": icon = cssIcon; break;
              case "skills/figma.png": icon = figmaIcon; break;
              case "skills/graphql.png": icon = graphqlIcon; break;
              case "skills/html.png": icon = htmlIcon; break;
              case "skills/mongodb.png": icon = mongodbIcon; break;
              case "skills/node.png": icon = nodeIcon; break;
              case "skills/react.png": icon = reactIcon; break;
              default: icon = null;
            }
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  {icon && <img src={icon} alt={skill.title} />}
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.history}>
          {history.map((historyItem, id) => {
            let logo;
            switch (historyItem.imageSrc) {
              case "history/google.png": logo = googleLogo; break;
              case "history/microsoft.png": logo = microsoftLogo; break;
              case "history/netflix.png": logo = netflixLogo; break;
              default: logo = null;
            }
            return (
              <li key={id} className={styles.historyItem}>
                {logo && (
                  <img
                    src={logo}
                    alt={`${historyItem.organisation} Logo`}
                  />
                )}
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
