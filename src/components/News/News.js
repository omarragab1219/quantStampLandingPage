import styles from "./News.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";

import justLogoSVG from "../../images/justLogo.svg";

const News = () => {
  return (
    <div className={styles.container}>
      <img src={justLogoSVG} alt="" />
      <h2>Recent Quantstamp News</h2>
      {/* -------------------------------------------------------------------------- */}
      <div></div>
    </div>
  );
};

export default News;
