import styles from "./SuperRare.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import superRare from "../../images/superRare.png";

const SuperRare = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.titleBlue}>Customer Spotlight</h2>

      <div className={styles.backgroundAndTextContainer}>
        <div className={styles.darkContainer}></div>
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <img src={superRare} alt="" className={styles.img} />
            <p>
              SuperRare is a curated digital art gallery and social network
              featuring some of the best and most exclusive NFT artists around.
              From collectible gifs to the biggest names in music, creators can
              tokenize their art on the Ethereum blockchain, preventing forgery
              and providing an immutable record of ownership. Through smart
              contracts, royalties go back to the original creator as digital
              art is bought and traded. SuperRare has partnered with hundreds of
              artists around the globe and is consistently a top market in
              overall market volume. Check out their newest artists over
              at&nbsp;
              <span>superrare.co</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuperRare;
