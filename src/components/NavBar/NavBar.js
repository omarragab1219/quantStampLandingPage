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
import NavBarMobile from "../NavBarMobile/NavBarMobile";
import QuantLogo from "../../images/QuantLogo.svg";
import britishFlag from "../../images/british.svg";
import japanFlag from "../../images/japan.svg";
import pepsiFlag from "../../images/pepsi.svg";
import chinaFlag from "../../images/china.svg";

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(null);
  return (
    <div className={styles.container0}>
      <div className={styles.container}>
        <div className={styles.ul1}>
          <div>
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
        {/* -------------------------------------------------------------------------- */}
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

      {/* -------------------------------------------------------------------------- */}
      <div className={styles.NavBarMobile}>
        <div className={styles.quantLogoContainer}>
          <img src={QuantLogo} alt="" className={styles.quantLogo} />
        </div>
        <NavBarMobile
          mobileNavOpen={mobileNavOpen}
          setMobileNavOpen={setMobileNavOpen}
        />
      </div>
    </div>
  );
};

export default NavBar;
