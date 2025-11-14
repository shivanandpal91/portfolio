import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>I'm Shivanand Pal</h1>

        <p className={styles.description}>
          I'm a dedicated and hardworking full-stack developer pursuing B.Tech 
          in Computer Science and Engineering at MNNIT Allahabad. I enjoy 
          solving challenging problems.
        </p>

        <a href="mailto:palshivanand200@gmail.com" className={styles.contactBtn}>
          Contact Me
          </a>
      </div>

      <img
        src={getImageUrl("hero/heroimage.jpg")}
        alt="Hero image"
        className={styles.heroImg}
      />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
