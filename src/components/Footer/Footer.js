import styles from "./Footer.module.css";
import React from "react";
import quantLogoSVG from "../../images/QuantLogo.svg";
import socialMediaSVG from "../../images/socialMedia.svg";
import backgroundImage from "../../images/background5.jpeg";

const Footer = () => {
  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className={styles.logoTitleContainer}>
        <img src={quantLogoSVG} alt="" />
        <h3>Leaders in Blockchain Security and Solutions</h3>
      </div>

      <div className={styles.allOptionBoxContainer}>
        <div className={styles.optionBox}>
          <h4 className={styles.green}>SMART CONTRACT AUDITS</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Security Network
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Blockchain Security Auditing
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Enterprise Solutions
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.optionBox}>
          <h4 className={styles.yellow}>INFORMATION</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Run a Node
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Media Resources
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Smart Contract Security Alliance
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.optionBox}>
          <h4 className={styles.blue}>COMPANY</h4>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Our Team
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Careers
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.link}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.optionBox}>
          <h4 className={styles.orange}>STAY INFORMED</h4>
          <ul className={styles.socialMediaList}>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.discord}
                style={{
                  backgroundImage: `url(${`  https://assets.website-files.com/5bb269510fd6bf857fcd50c7/5d1156aa96e64007fd8b99a1_v5-footer-icons.svg`})`,
                }}
              >
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.youtube}
                style={{
                  backgroundImage: `url(${`  https://assets.website-files.com/5bb269510fd6bf857fcd50c7/5d1156aa96e64007fd8b99a1_v5-footer-icons.svg`})`,
                }}
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.github}
                style={{
                  backgroundImage: `url(${`  https://assets.website-files.com/5bb269510fd6bf857fcd50c7/5d1156aa96e64007fd8b99a1_v5-footer-icons.svg`})`,
                }}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.facebook}
                style={{
                  backgroundImage: `url(${`  https://assets.website-files.com/5bb269510fd6bf857fcd50c7/5d1156aa96e64007fd8b99a1_v5-footer-icons.svg`})`,
                }}
              >
                FaceBook
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.linkedin}
                style={{
                  backgroundImage: `url(${`  https://assets.website-files.com/5bb269510fd6bf857fcd50c7/5d1156aa96e64007fd8b99a1_v5-footer-icons.svg`})`,
                }}
              >
                Linkedin
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/omar-ragab/"
                target="_blank"
                rel="noopener"
                className={styles.twitter}
                style={{
                  backgroundImage: `url(${`  https://assets.website-files.com/5bb269510fd6bf857fcd50c7/5d1156aa96e64007fd8b99a1_v5-footer-icons.svg`})`,
                }}
              >
                Twitter
              </a>
            </li>
          </ul>
          <div className={styles.disclosuresContainer}>
            <a
              href="https://www.linkedin.com/in/omar-ragab/"
              target="_blank"
              rel="noopener"
            >
              Disclosure
            </a>
            <a
              href="https://www.linkedin.com/in/omar-ragab/"
              target="_blank"
              rel="noopener"
            >
              Terms and Conditions
            </a>
            <a
              href="https://www.linkedin.com/in/omar-ragab/"
              target="_blank"
              rel="noopener"
            >
              Privacy Policy
            </a>
          </div>
          <div className={styles.copywrite}>© 2017-2021 Quantstamp, Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
