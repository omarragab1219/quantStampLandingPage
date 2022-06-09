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

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.full}>
        <NavBar />
        <Main />
      </div>

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
