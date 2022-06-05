import styles from "./NumberList.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import worldSVG from "../../images/world.svg";
import moneySVG from "../../images/money.svg";
import bookGlassesSVG from "../../images/bookGlasses.svg";
import laptopLockSVG from "../../images/laptopLock.svg";
const data = [
  {
    image: moneySVG,
    title: "$200B+",
    description: "Secured by Quantstamp",
  },
  {
    image: worldSVG,
    title: "Remote 1st Company",
    description: "Legal Entities in Germany, Japan, US, and Canada",
  },
  {
    image: bookGlassesSVG,
    title: "250+",
    description: "Innovative Customers",
  },
  {
    image: laptopLockSVG,
    title: "Security Network",
    description: "Mature and Decentralized",
  },
];

const NumberList = () => {
  const renderItem = () => {
    return data.map((item, i) => {
      return (
        <div key={i} className={styles.item}>
          <img src={item.image} alt="" className={styles.image} />
          <h3 className={styles.title}>{item.title}</h3>
          <p className={styles.description}>{item.description}</p>
        </div>
      );
    });
  };
  return (
    <div className={styles.container0}>
      <div className={styles.container}>
        <div className={styles.itemList}>{renderItem()}</div>
      </div>
    </div>
  );
};

export default NumberList;
