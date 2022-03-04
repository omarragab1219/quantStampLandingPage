import styles from "./Main.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import sheildLogo from "../../images/shield.svg";

const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <p className={styles.smartContract}> SMART CONTRACT SECURITY</p>
          <h1 className={styles.title}>Leaders in Blockchain Security</h1>
          <h4 className={styles.description}>
            Quantstamp's mission is to secure the decentralized internet, and
            has protected over $200B in digital asset risk from hackers. More
            than 250 startups, foundations and enterprises work with Quantstamp
            to keep their innovative products safe.
          </h4>
          <div className={styles.btnContainer}>
            <div className={styles.btn}>Start Now</div>
          </div>
        </div>

        <div className={styles.imgContainer}>
          <img src={sheildLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;
