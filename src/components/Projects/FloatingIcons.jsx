import React from "react";
import { motion } from "framer-motion";
import styles from "./FloatingIcons.module.css";
import { getImageUrl } from "../../utils";

// Define the icons you want floating in the background
const icons = [
    "skills/react.png",
    "skills/node.png",
    "skills/mongodb.png",
    "skills/figma.png",
    // Add more relevant project icons here
];

export const FloatingIcons = () => {
  return (
    <div className={styles.iconsContainer}>
      {icons.map((icon, index) => {
        // Generate random positioning and delay for natural movement
        const randomTop = Math.floor(Math.random() * 90) + "%";
        const randomLeft = Math.floor(Math.random() * 90) + "%";
        const randomDelay = Math.random() * 5;
        const randomDuration = Math.floor(Math.random() * 10) + 15; // Slow duration between 15-25s

        return (
          <motion.img
            key={index}
            src={getImageUrl(icon)}
            alt="floating-tech"
            className={styles.floatingIcon}
            style={{ top: randomTop, left: randomLeft }}
            animate={{
              y: [0, -30, 0], // Float up and down slightly
              x: [0, 20, 0], // Float right and left slightly
              rotate: [0, 10, -10, 0], // Subtle rotation
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: randomDelay,
            }}
          />
        );
      })}
    </div>
  );
};