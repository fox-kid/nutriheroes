import { Link } from "react-router-dom";
import styles from "./GetStarted.module.css";
import ROUTES from "../../config/routes";

function GetStarted() {
  return (
    <section className={styles.container}>
      <div className={styles.get_started_box}>
        <p>Join the thousands of people already using Nutriheros today!</p>
        <Link to={ROUTES.ROUTE_SIGN_UP}>
          <button className={styles.btn}>Get Started</button>
        </Link>
      </div>
    </section>
  );
}

export default GetStarted;
