import styles from "./NavBar.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import QuantLogo from "../../images/QuantLogo.svg";
import britishFlag from "../../images/british.svg";
import japanFlag from "../../images/japan.svg";
import pepsiFlag from "../../images/pepsi.svg";
import chinaFlag from "../../images/china.svg";

const NavBar = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul1}>
        <li>
          <img src={QuantLogo} alt="" className={styles.quantLogo} />
        </li>
        <div className={styles.optionListContainer}>
          <li>Audits</li>
          <li>About</li>
          <li>Team</li>
          <li>Careers</li>
          <li>Blog</li>
        </div>
      </ul>
      {/* -------------------------------------------------------------------------- */}
      <ul className={styles.ul2}>
        <li className={styles.request}>Request a Security Audit</li>

        <div className={styles.flags}>
          <li>
            <img src={britishFlag} alt="" className={styles.flag} />
          </li>
          <li>
            <img src={japanFlag} alt="" className={styles.flag} />
          </li>
          <li>
            <img src={pepsiFlag} alt="" className={styles.flag} />
          </li>
          <li>
            <img src={chinaFlag} alt="" className={styles.flag} />
          </li>
        </div>
      </ul>
    </div>
  );
};

export default NavBar;
