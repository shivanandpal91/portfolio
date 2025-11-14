
import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me working on a laptop"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build responsive, user-friendly interfaces using React.js and Tailwind CSS. 
                I focus on clean UI, performance, and smooth user experience across devices.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I develop scalable backend systems with Node.js, Express.js, and MongoDB. 
                I have built full-stack applications with authentication, CRUD APIs, and real-time features.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Blockchain icon" />
            <div className={styles.aboutItemText}>
              <h3>Blockchain & Web3 Developer</h3>
              <p>
                Experienced in building decentralized apps using Solidity, Hardhat, MetaMask, and IPFS. 
                Created an NFT marketplace deployed on the Sepolia testnet with secure wallet integration.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </section>
  );
};
