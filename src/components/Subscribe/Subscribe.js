import styles from "./Subscribe.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

const Subscribe = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>Subscribe to our newsletter</h2>
        <p>
          Get the latest Quantstamp news, events, articles, and resources sent
          straight to your inbox.
        </p>
      </div>
      <div className={styles.subscribeContainer}>
        <input type="text" name="" id="" placeholder="Email" />
        <button className={styles.btn}>
          <a
            href="https://www.linkedin.com/in/omar-ragab/"
            target="_blank"
            rel="noopener"
            className={styles.a}
          >
            Subscribe
          </a>
        </button>
      </div>
    </div>
  );
};

export default Subscribe;
