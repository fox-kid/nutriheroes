import styles from "./Nutrition.module.css";
import healthy_img from "../../images/healthy_img.png";

function Nutrition() {
  return (
    <section className={styles.container} title="Nutrition" id="nutrition">
      <div className={styles.nutrition_box}>
        <div className={styles.nutrition_left}>
          <div className={styles.nutrition_title}>Nutrition</div>
          <div className={styles.nav}>
            <ul className={styles.tab_list}>
              <li className={styles.tab_item}>
                <a
                  className={`${styles.tab_link} ${styles.active}`}
                  href="#Healthy"
                >
                  Healthy
                </a>
              </li>
              <li className={styles.tab_item}>
                <a className={styles.tab_link} href="#Personalised">
                  Personalised
                </a>
              </li>
              <li className={styles.tab_item}>
                <a className={styles.tab_link} href="#Professional">
                  Professional
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.nutrition_text}>
            <h3>A short title is best</h3>
            <p>
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam
            </p>
            <p className={styles.btn_read_more}>Read more</p>
          </div>
        </div>
        <div className={styles.nutrition_right}>
          <img src={healthy_img} alt="healthy_bowl_image" />
        </div>
      </div>
    </section>
  );
}

export default Nutrition;
