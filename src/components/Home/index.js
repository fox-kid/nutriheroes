import { Link } from "react-router-dom";
import ROUTES from "../../config/routes";

import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.container} title="Home" dark={true} id="home">
      <div className={styles.home_content}>
        <div className={styles.home_text}>
          <h1>Captivating Header Goes Here!</h1>
          <p>A short description works best</p>
        </div>
        <Link to={ROUTES.ROUTE_SIGN_UP}>
          <button className={styles.btn}>Start Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
