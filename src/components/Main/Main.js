import styles from "./Main.module.css";
import React from "react";
import sheildLogo from "../../images/shield.svg";
import backgroundImage from "../../images/background5.jpeg";

const Main = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.smartContract}>SMART CONTRACT SECURITY</p>
          <h1 className={styles.title}>Leaders in Blockchain Security</h1>
          <h2 className={styles.description}>
            Quantstamp's mission is to secure the decentralized internet, and
            has protected over $200B in digital asset risk from hackers. More
            than 250 startups, foundations and enterprises work with Quantstamp
            to keep their innovative products safe.
          </h2>
          <button className={styles.btn}>
            <a
              href="https://www.linkedin.com/in/omar-ragab/"
              target="_blank"
              rel="noopener"
              className={styles.a}
              style={{ position: "relative" }}
            >
              Start Now{" "}
              <span
                style={{
                  opacity: "0",
                  position: "absolute",
                  pointerEvents: "none",
                }}
              >
                Start with QuantStamp
              </span>
            </a>
          </button>
        </div>

        <div className={styles.imgContainer}>
          <img
            fetchpriority="high"
            src={sheildLogo}
            alt=""
            className={styles.sheildLogo}
            width="413"
            height="310"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
