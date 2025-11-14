import React from "react";

import styles from "./Education.module.css";
import { getImageUrl } from "../../utils";

export const Education = () => {
  return (
    <section className={styles.container} id="education">
      <h2 className={styles.title}>Education</h2>

      <div className={styles.content}>
        <ul className={styles.educationItems}>

          <li className={styles.educationItem}>
            <img
              src={getImageUrl("education/graduation.jpg")}
              alt="Graduation icon"
            />
            <div className={styles.educationItemText}>
              <h3>Motilal Nehru National Institute of Technology, Allahabad</h3>
              <p>
                B.Tech in Computer Science and Engineering  
                <br />2022 – Present  
                <br />CPI: <strong>8.73 (Till 6th Semester)</strong>
              </p>
            </div>
          </li>

          <li className={styles.educationItem}>
            <img
              src={getImageUrl("education/school12.png")}
              alt="School icon"
            />
            <div className={styles.educationItemText}>
              <h3>Sunbeam School Varuna, Varanasi</h3>
              <p>
                Central Board of Secondary Education  
                <br />Completed: June 2021  
                <br />Percentage: <strong>91.6%</strong>
              </p>
            </div>
          </li>

          <li className={styles.educationItem}>
            <img
              src={getImageUrl("education/school10.jpg")}
              alt="School icon"
            />
            <div className={styles.educationItemText}>
              <h3>Central Hindu Boys School (BHU), Varanasi</h3>
              <p>
                Central Board of Secondary Education  
                <br />Completed: June 2019  
                <br />Percentage: <strong>95.4%</strong>
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
