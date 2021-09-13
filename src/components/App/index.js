import styles from "./App.module.css";
import mobile_app from "../../images/mobile_app.png";
import app_store from "../../images/app_store_download.svg";
import google_play from "../../images/google_play_download.svg";

function App() {
  return (
    <section className={styles.container}>
      <div className={styles.app_img_wrapper}>
        <img src={mobile_app} alt="mobile_app_image" />
      </div>
      <div className={styles.app_text_wrapper}>
        <div className={styles.app_text_wrapper_box}>
          <div className={styles.text_box}>
            <h2>New app. New you.</h2>
            <h6>A nutritionalist and personal trainer in your pocket</h6>
            <p>
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.
            </p>
          </div>
          <div className={styles.download_links}>
            <img src={app_store} alt="app_store_download_image" />
            <img src={google_play} alt="google_play_download_image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
