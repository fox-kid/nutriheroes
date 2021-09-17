import { Link } from "react-router-dom";

import styles from "./Footer.module.css";
import app_store from "../../images/app_store_download.svg";
import google_play from "../../images/google_play_download.svg";
import logo from "../../images/logo_footer.svg";
import FooterNav from "../FooterNav";
import ROUTES from "../../config/routes";

function Footer() {
  return (
    <footer>
      <div className={styles.empty_section}></div>
      <div className={styles.container}>
        <div className={styles.footer_content}>
          <div className={styles.footer_left_box}>
            <div className={styles.download_links}>
              <img src={app_store} alt="app_store_download_image" />
              <img src={google_play} alt="google_play_download_image" />
            </div>
            <div className={styles.copyright_box}>
              <Link to={ROUTES.ROUTE_DASHBOARD}>
                <img src={logo} alt="nutrieheroes_logo" />
              </Link>
            </div>
            <p className={styles.copyright}>© Copyright Nutriheros 2020</p>
          </div>
          <div className={styles.footer_right_box}>
            <FooterNav
              header="explore"
              links={["exercise", "nutrition", "expertise", "mobile app"]}
            />
            <FooterNav
              header="company"
              links={["legal", "contact us", "press"]}
            />
            <FooterNav
              header="blog"
              links={[
                "latest post one",
                "latest post two",
                "latest post three",
              ]}
            />
            <FooterNav
              header="social"
              links={["facebook", "instagram", "twitter"]}
            />
          </div>
          <div className={styles.download_links_responsive}>
            <img src={app_store} alt="app_store_download_image" />
            <img src={google_play} alt="google_play_download_image" />
          </div>
          <p className={styles.copyright_responsive}>
            © Copyright Nutriheros 2020
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
