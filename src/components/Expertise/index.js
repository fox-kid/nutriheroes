import styles from "./Expertise.module.css";
import expertise_sports from "../../images/expertise_sports.png";
import expertise_cooking from "../../images/expertise_cooking.png";

function Expertise() {
  return (
    <section className={styles.container} title="Expertise" id="expertise">
      <div className={`${styles.expertise_box} ${styles.top}`}>
        <div className={styles.img_box}>
          <img src={expertise_sports} alt="sports_expertise_image" />
        </div>
        <div className={styles.expertise_text}>
          <div className={styles.text_wrapper}>
            <div className={styles.expertise_title}>Sports Expertise</div>
            <h5>Thierry Henry</h5>
            <p>
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.{" "}
              <br /> <br />
              Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus
            </p>
          </div>
        </div>
      </div>
      <div className={`${styles.expertise_box} ${styles.box}`}>
        <div className={styles.expertise_text}>
          <div className={styles.text_wrapper}>
            <div className={styles.expertise_title}>Cooking Expertise</div>
            <h5>Salt Bae</h5>
            <p>
              Thierry Henry Praesent eu dolor eu orci vehicula euismod. Vivamus
              sed sollicitudin libero, vel malesuada velit. Nullam et maximus
              lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed
              sollicitudin libero, vel malesuada velit. Nullam et maximus lorem.
            </p>
          </div>
        </div>
        <div className={styles.img_box}>
          <img src={expertise_cooking} alt="cooking_expertise_image" />
        </div>
      </div>
    </section>
  );
}

export default Expertise;
