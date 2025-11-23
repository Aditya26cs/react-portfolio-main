import React from "react";
import styles from "./TechStack.module.css";
import cssIcon from "../../assets/skills/css.png";
import htmlIcon from "../../assets/skills/html.png";
import mongodbIcon from "../../assets/skills/mongodb.png";
import nodeIcon from "../../assets/skills/node.png";
import reactIcon from "../../assets/skills/react.png";

// Note: Ensure you have icons for all, or the code handles text-only gracefully.
const categories = [
    {
        title: "Frontend",
        tools: [
            { name: "React", icon: reactIcon },
            { name: "Tailwind CSS", icon: cssIcon }, // Using CSS icon as placeholder if needed
            { name: "JavaScript", icon: null }, // Example of text only
        ],
    },
    {
        title: "Backend",
        tools: [
            { name: "Node.js", icon: nodeIcon },
            { name: "Express.js", icon: null },
        ],
    },
    {
        title: "Database",
        tools: [
            { name: "MongoDB", icon: mongodbIcon },
            { name: "SQL", icon: null },
        ],
    },
    {
        title: "Tools & Platforms",
        tools: [
            { name: "Postman", icon: null },
            { name: "VS Code", icon: null },
            { name: "Vercel", icon: null },
            { name: "Git", icon: null },
            { name: "GitHub", icon: null },
        ],
    },
    {
        title: "Languages",
        tools: [
            { name: "Java", icon: null },
            { name: "JavaScript", icon: null },
        ],
    },
];

export const TechStack = () => {
    return (
        <section className={styles.container} id="techstack">
            
            {/* 1. The "WOW" Title (Matches About Section) */}
            <h2 className={styles.sectionTitle}>
                <span className={styles.hollowText}>TECH</span>
                <span className={styles.colorText}>STACK</span>
            </h2>

            <div className={styles.gridContainer}>
                {categories.map((cat, index) => (
                    // Added animation delay based on index for a "waterfall" entry effect
                    <div 
                        className={styles.categoryCard} 
                        key={cat.title}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className={styles.headerWrapper}>
                            <div className={styles.categoryTitle}>{cat.title}</div>
                            <div className={styles.line}></div>
                        </div>
                        
                        <div className={styles.toolsGrid}>
                            {cat.tools.map((tool) => (
                                <div className={styles.toolItem} key={tool.name}>
                                    {tool.icon ? (
                                        <img
                                            src={tool.icon}
                                            alt={tool.name}
                                            className={styles.skillIcon}
                                        />
                                    ) : (
                                        // Fallback icon circle if no image
                                        <div className={styles.dot}></div>
                                    )}
                                    <span className={styles.skillName}>{tool.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};