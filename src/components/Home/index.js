import { Link } from "react-router-dom";
import ROUTES from "../../constants/routes";

import styles from "./Home.module.css";

function Home() {
  return (
    <section className={styles.container} title="Home" id="home">
      <div className={styles.home_content}>
        <div className={styles.home_text}>
          <h1>Captivating Header Goes Here!</h1>
          <p>A short description works best</p>
        </div>
        <Link
          to={ROUTES.ROUTE_SIGN_UP}
          onClick={() =>
            window.scroll({
              top: 80,
              left: 0,
              behavior: "smooth",
            })
          }
        >
          <button className={styles.btn}>Start Now</button>
        </Link>
      </div>
    </section>
  );
}

export default Home;
