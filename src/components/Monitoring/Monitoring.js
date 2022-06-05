import styles from "./Monitoring.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import monitorSVG from "../../images/monitor.svg";
const Monitoring = () => {
  return (
    <div className={styles.container}>
      <img src={monitorSVG} alt="" />
      <h2>24/7 Security Monitoring Software</h2>
      <div className={styles.contentBackgroundContainer}>
        <div className={styles.darkBackground}></div>
        <div className={styles.contentContainer}>
          {/* -------------------------------------------------------------------------- */}
          <div className={styles.contentLeftContainer0}>
            <div className={styles.contentLeftContainer}>
              <p>
                Blockchain security doesn't stop when you sleep. Malicious
                actors can still attempt to exploit your contracts and steal
                your funds. Our security monitoring software scans 5 million
                transactions per day to detect and respond to suspicious
                activity in your blockchain. <br /> <br />• Changes in smart
                contract ownership
                <br />• Changes in token supply
                <br />• Overflow and underflow detection
                <br />• Other attempts to exploit your contracts
                <br />
                <br />
                Work with our state-of-the-art software today.
              </p>
              <button className={styles.btn}>
                <a
                  href="https://www.linkedin.com/in/omar-ragab/"
                  target="_blank"
                  rel="noopener"
                  className={styles.a}
                  style={{ position: "relative" }}
                >
                  Learn More
                  <span
                    style={{
                      opacity: "0",
                      position: "absolute",
                      pointerEvents: "none",
                    }}
                  >
                    Learn More About QuantStamp
                  </span>
                </a>
              </button>
            </div>
          </div>
          {/* -------------------------------------------------------------------------- */}
          <div className={styles.contentRightContainer}>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
