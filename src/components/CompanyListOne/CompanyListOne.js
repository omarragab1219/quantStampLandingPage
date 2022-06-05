import styles from "./CompanyListOne.module.css";
import React from "react";
import eth2 from "../../images/eth2.png";
import beeple from "../../images/beeple.png";
import curve from "../../images/curve.webp";
import maker from "../../images/maker.svg";
import solana from "../../images/solana.svg";
import topShot from "../../images/topShot.webp";
import compound from "../../images/compound.svg";
import openSea from "../../images/opensea.svg";

const data = [
  {
    image: eth2,
  },
  {
    image: beeple,
  },
  {
    image: curve,
  },
  {
    image: maker,
  },
  {
    image: solana,
  },
  {
    image: topShot,
  },
  {
    image: compound,
  },
  {
    image: openSea,
  },
];

const CompanyListOne = () => {
  const renderItems = () => {
    return data.map((item, i) => {
      return (
        <div key={i} className={styles.companyContainer}>
          <img
            src={item.image}
            alt=""
            className={styles.company}
            width="200"
            height="100"
          />
        </div>
      );
    });
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Leading Blockchain Projects Work With Quantstamp
      </h2>
      <div className={styles.companyList}>{renderItems()}</div>
    </div>
  );
};

export default CompanyListOne;
