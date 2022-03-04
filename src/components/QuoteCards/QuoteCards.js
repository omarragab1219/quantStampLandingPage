import styles from "./QuoteCards.module.css";
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  FC,
  SetStateAction,
  Dispatch,
} from "react";
import rightArrow from "../../images/rightArrow.svg";
import leftArrow from "../../images/leftArrow.svg";

const data = [
  {
    quote: `"As we build blockchain experiences that thrive in the mainstream, alongside thousands of talented independent builders on Flow, Quantstamp is bringing to the ecosystem the high-quality security and code review their firm has long been recognized for. Quantstamp will no doubt be an important part of Flow's continued scaling and success."`,
    person: "Roham Gharegozlou",
    work: "CEO at Dapper Labs",
  },
  {
    quote: `“Quantstamp's ability to quickly produce comprehensive and insightful audits has proven them to be an invaluable partner for our grantees. The importance of the extra layer of due diligence they provide can't be overstated.”`,
    person: "Richard Brown",
    work: "Former Head of Community Development at Maker",
  },
  {
    quote: `"When developing our Plasma MVP Implementation, we wanted to have strong security guarantees. As a scalability solution, our plasma implementations could potentially be handling massive transaction volumes. Quantstamp has audited large-scale, mission-critical initatives in the past, and working with Quantstamp was an obvious decision to make."`,
    person: "Vansa Chatikavanij",
    work: "CEO at OmiseGO",
  },
  {
    quote: `"Quantstamp ensured that our contracts met the highest standards of security through their excellent audit process. They worked hand in hand with our engineers to make sure our smart contracts were as safe as can be and their recommendations helped improve the quality of our code."`,
    person: "Omri Ross",
    work: "Chief Blockchain Scientist, eToro",
  },
  {
    quote: `“Quantstamp’s audit process was comprehensive and streamlined. They provided thorough feedback in addition to an audit certificate and auditor’s opinion letter that gave our stakeholders confidence in our smart contracts.”`,
    person: "Noah Thorp",
    work: "Vice President of Engineering, Sharespost",
  },
  {
    quote: `“Quantstamp was great to work with. They were professional and efficient when working with us to make sure that our production contracts were secure. Their comprehensive analysis resulted in an easy to use audit report that showed where things could be improved and ultimately gave us confidence in our smart contracts.”`,
    person: "Mick Hagen",
    work: "Founder & CEO, Mainframe",
  },
];

const QuoteCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [recentlyDeactivatedIndex, setRecentlyDeactivatedIndex] =
    useState(null);
  const [peviousClicked, setPreviousClicked] = useState(false);

  useEffect(() => {
    console.log("active idex", activeIndex);
  }, [activeIndex, recentlyDeactivatedIndex]);

  const nextSlide = () => {
    if (activeIndex + 1 !== data.length) {
      setActiveIndex(activeIndex + 1);
      setRecentlyDeactivatedIndex(activeIndex - 1);
    } else if (activeIndex + 1 === data.length) {
      setActiveIndex(0);
      setRecentlyDeactivatedIndex(data.length - 1);
    }
  };
  const previousSlide = () => {
    if (activeIndex !== 0) {
      setActiveIndex(activeIndex - 1);
      setRecentlyDeactivatedIndex(activeIndex - 1);
    } else if (activeIndex === 0) {
      setActiveIndex(data.length - 1);
      setRecentlyDeactivatedIndex(1);
    }
  };
  const renderQuotes = () => {
    const currentRender = [data[0]];
    return data.map((quote, i) => {
      return (
        <div
          key={i}
          className={`${
            i === activeIndex
              ? ` ${styles.quoteContainer} ${styles.quoteActive}`
              : i - 1 === recentlyDeactivatedIndex ||
                data.length - 1 === recentlyDeactivatedIndex
              ? ` ${styles.quoteContainer} ${styles.quoteRecentlyDeactivatedLeft}`
              : ` ${styles.quoteContainer} ${styles.quoteDeactivated}`
          }`}
        >
          <p className={styles.quote}>{quote.quote}</p>
          <div className={styles.personWorkContainer}>
            <p className={styles.person}>{quote.person}</p>
            <p className={styles.work}>{quote.work}</p>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={styles.container}>
      <div className={styles.darkContainer}></div>
      <div className={styles.contentContainer}>
        <div className={styles.quoteListContainer}>
          <div className={styles.quoteList}>{renderQuotes()}</div>
        </div>
        <div className={styles.btn}>
          <img
            src={leftArrow}
            alt=""
            className={styles.arrow}
            onClick={() => previousSlide()}
          />
          <div
            className={activeIndex === 0 ? styles.activeDot : styles.dot}
            onClick={() => setActiveIndex(0)}
          ></div>
          <div
            className={activeIndex === 1 ? styles.activeDot : styles.dot}
            onClick={() => setActiveIndex(1)}
          ></div>
          <div
            className={activeIndex === 2 ? styles.activeDot : styles.dot}
            onClick={() => setActiveIndex(2)}
          ></div>
          <div
            className={activeIndex === 3 ? styles.activeDot : styles.dot}
            onClick={() => setActiveIndex(3)}
          ></div>
          <div
            className={activeIndex === 4 ? styles.activeDot : styles.dot}
            onClick={() => setActiveIndex(4)}
          ></div>
          <div
            className={activeIndex === 5 ? styles.activeDot : styles.dot}
            onClick={() => setActiveIndex(5)}
          ></div>
          <img
            src={rightArrow}
            alt=""
            className={styles.arrow}
            onClick={() => nextSlide()}
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteCards;
