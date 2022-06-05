import styles from "./News.module.css";
import React from "react";

import justLogoSVG from "../../images/justLogo.svg";
import comUpdate from "../../images/comUpdate.webp";
import dice from "../../images/dice.webp";
import buffcoin from "../../images/buffcoin.webp";
const News = () => {
  return (
    <div className={styles.container}>
      <img src={justLogoSVG} alt="" className={styles.logo} />
      <h2>Recent Quantstamp News</h2>

      {/* -------------------------------------------------------------------------- */}

      <div className={styles.contentBackgroundContainer}>
        <div className={styles.darkBackground}></div>
        <div className={styles.contentContainer}>
          {/* -------------------------------------------------------------------------- */}
          <div className={styles.contentLeftContainer}>
            <div className={styles.contentTextContainer}>
              <h3>Quantstamp Community Update - January 2022</h3>
              <div>
                <p>
                  NFT growth on Ethereum, more audits, and preparing for
                  ETHDenver! Here's what happened at Quantstamp in January.
                </p>
                <a
                  href="https://www.linkedin.com/in/omar-ragab/"
                  target="_blank"
                  rel="noopener"
                >
                  Continue Reading
                </a>
              </div>
            </div>
            <div className={styles.cardsContainer}>
              <div className={styles.card}>
                <img
                  src={dice}
                  alt="dice"
                  className={styles.smallImage}
                  width="247"
                  height="137"
                />
                <h4>
                  Proper Treatment of Randomness <br /> on EVM-Compatible
                  Networks
                </h4>
              </div>
              <div className={styles.card}>
                <img
                  src={buffcoin}
                  alt=""
                  className={styles.smallImage}
                  width="247"
                  height="137"
                />

                <h4>
                  Quantstamp is attending <br /> ETHDenver and we are hiring!
                </h4>
              </div>
            </div>
          </div>
          {/* -------------------------------------------------------------------------- */}
          <div className={styles.contentRightContainer}>
            <img
              src={comUpdate}
              alt=""
              className={styles.contentRightImage}
              width="590"
              height="442"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
