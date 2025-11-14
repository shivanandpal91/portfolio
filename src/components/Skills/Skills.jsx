import React from "react";
import styles from "./Skills.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>

      <div className={styles.skillsWrapper}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillCard}>
            <img
              src={getImageUrl(skill.imageSrc)}
              alt={skill.title}
              className={styles.icon}
            />
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
