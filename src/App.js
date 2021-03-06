import styles from "./App.module.css";
import Main from "./components/Main/Main";
import NavBar from "./components/NavBar/NavBar";
import NumberList from "./components/NumberList/NumberList";
import CompanyListOne from "./components/CompanyListOne/CompanyListOne";
import QuoteCards from "./components/QuoteCards/QuoteCards";
import SuperRare from "./components/SuperRare/SuperRare";
import ExpertSecurityAudit from "./components/ExpertSecurityAudit/ExpertSecurityAudit";
import BigCompanyList from "./components/BigCompanyList/BigCompanyList";
import News from "./components/News/News";
import Monitoring from "./components/Monitoring/Monitoring";
import Subscribe from "./components/Subscribe/Subscribe";
import Footer from "./components/Footer/Footer";
import backgroundImage from "./images/background5.jpeg";

function App() {
  return (
    <div className={styles.container}>
      <div
        className={styles.full}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <NavBar />
        <Main />
      </div>
      <img
        src={backgroundImage}
        preload="true"
        style={{
          display: "none",
          position: "absolute",
          top: "0",
          zIndex: "0",
          objectFit: "cover",
          // opacity: "0.5",
          zIndex: "0",
          height: "100vh",
          width: "100vw",
        }}
        alt=""
        height="100vh"
        width="100vw"
      />

      <div className={styles.contentContainer}>
        <div className={styles.content}>
          <NumberList />
          <CompanyListOne />
          <QuoteCards />
          <SuperRare />

          <ExpertSecurityAudit />
          <BigCompanyList />

          <News />
          <Monitoring />
          <Subscribe />
        </div>
      </div>
      <div
        className={styles.full}
        style={{ backgroundImage: `url(${`./images/background5.jpeg`}` }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;

// /* <News />
