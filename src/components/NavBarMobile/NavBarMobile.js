import styles from "./NavBarMobile.module.css";
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
import useWindowDimensions from "../../hooks/useWindowDimensions";

const NavBarMobile = ({ setMobileNavOpen, mobileNavOpen }) => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    if (width > 962) {
      setMobileNavOpen(null);
    }
  }, [width]);
  return (
    <div className={styles.container0}>
      <div
        className={styles.hamburger}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <div className={mobileNavOpen ? styles.firstLine : null}></div>
        <div className={mobileNavOpen ? styles.secondLine : null}></div>
        <div className={mobileNavOpen ? styles.thirdLine : null}></div>
      </div>
      <div
        className={` ${styles.container} ${
          mobileNavOpen === null
            ? null
            : mobileNavOpen
            ? styles.down
            : styles.up
        }`}
      >
        <div className={styles.ul1}>
          <div className={styles.quantLogoContainer}>
            <img src={QuantLogo} alt="" className={styles.quantLogo} />
          </div>
          <ul className={styles.optionListContainer}>
            <li>Audits</li>
            <li>About</li>
            <li>Team</li>
            <li>Careers</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className={styles.ul2}>
          <div className={styles.request}>Request a Security Audit</div>

          <ul className={styles.flags}>
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBarMobile;
