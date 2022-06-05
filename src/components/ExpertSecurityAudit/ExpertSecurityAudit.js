import styles from "./ExpertSecurityAudit.module.css";
import React, { useState } from "react";
import documentLock from "../../images/documentLock.svg";
import makerCard from "../../images/makerCard.svg";
import idleCard from "../../images/idleCard.svg";
import eth2Card from "../../images/eth2Card.svg";
import viewArrow from "../../images/viewArrow.svg";
import reportDoc from "../../images/reportDoc.png";

const ExpertSecurityAudit = () => {
  const [moveView, setMoveView] = useState(null);
  return (
    <div className={styles.container}>
      <img src={documentLock} alt="" />
      <h2>Expert Security Audits</h2>
      <div className={styles.backgroundAndContentContainer}>
        <div className={styles.darkContainer}></div>
        <div className={styles.contentContainer}>
          <div className={styles.leftDoc}>
            <h3>Expert security audits for blockchains</h3>
            <p>
              Quantstamp conducts smart contract, off-chain, networking, and
              front-end audits in order to enhance the security of your
              decentralized application. We are blockchain agnostic and have
              audited client systems on Ethereum, Solana, Flow, Binance Chain,
              Avalanche and more. We also audit new blockchains and languages. ‍
              <br />
              &zwj;
              <br />
              Learn more about our process by clicking on the button below.
            </p>
            <button className={styles.btn}>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.a}
              >
                View Our Process
              </a>
            </button>
            <div className={styles.mostPop}>
              Our most popular audit reports:
            </div>
            <div className={styles.optionContainer}>
              <div
                className={styles.arrowViewCardContainer}
                onMouseLeave={() => setMoveView(null)}
                onMouseOver={() => setMoveView(1)}
              >
                <img
                  src={makerCard}
                  alt=""
                  className={`${
                    moveView === 1
                      ? `${styles.card} ${styles.darken}`
                      : styles.card
                  }`}
                  // width="160"
                  // height="12"
                />
                <div
                  className={styles.viewArrowContainer}
                  onMouseOver={() => setMoveView(1)}
                >
                  <p
                    className={`${
                      moveView === 1
                        ? `${styles.viewMoveOver} ${styles.darken}`
                        : styles.view
                    }`}
                  >
                    View
                  </p>
                  <img
                    src={viewArrow}
                    alt=""
                    className={`${
                      moveView === 1
                        ? `${styles.viewArrow} ${styles.darken}`
                        : styles.viewArrow
                    }`}
                    // width="6"
                    // height="12"
                  />
                </div>
              </div>
              <div
                className={styles.arrowViewCardContainer}
                onMouseLeave={() => setMoveView(null)}
                onMouseOver={() => setMoveView(2)}
              >
                <img
                  src={eth2Card}
                  alt=""
                  className={`${
                    moveView === 2
                      ? `${styles.card} ${styles.darken}`
                      : styles.card
                  }`}
                  // width="6"
                  // height="12"
                />
                <div
                  className={styles.viewArrowContainer}
                  onMouseOver={() => setMoveView(2)}
                >
                  <p
                    className={`${
                      moveView === 2
                        ? `${styles.viewMoveOver} ${styles.darken}`
                        : styles.view
                    }`}
                  >
                    View
                  </p>
                  <img
                    src={viewArrow}
                    alt=""
                    className={`${
                      moveView === 2
                        ? `${styles.viewArrow} ${styles.darken}`
                        : styles.viewArrow
                    }`}
                    // width="6"
                    // height="12"
                  />
                </div>
              </div>

              <div
                className={styles.arrowViewCardContainer}
                onMouseLeave={() => setMoveView(null)}
                onMouseOver={() => setMoveView(3)}
              >
                <img
                  src={idleCard}
                  alt=""
                  className={`${
                    moveView === 3
                      ? `${styles.card} ${styles.darken}`
                      : styles.card
                  }`}
                  // width="6"
                  // height="12"
                />
                <div
                  className={styles.viewArrowContainer}
                  onMouseOver={() => setMoveView(3)}
                >
                  <p
                    className={`${
                      moveView === 3
                        ? `${styles.viewMoveOver} ${styles.darken}`
                        : styles.view
                    }`}
                  >
                    View
                  </p>
                  <img
                    src={viewArrow}
                    alt=""
                    className={`${
                      moveView === 3
                        ? `${styles.viewArrow} ${styles.darken}`
                        : styles.viewArrow
                    }`}
                    // width="6"
                    // height="12"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightDoc}>
            <img src={reportDoc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpertSecurityAudit;
