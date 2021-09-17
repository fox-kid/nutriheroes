import styles from "./Exercise.module.css";
import gym_img from "../../images/gym_img.png";

function Exercise() {
  return (
    <section
      className={styles.container}
      title="Exercise"
      // subtitle={smth}
      dark={true}
      id="exercise"
    >
      <div className={styles.exercise_box}>
        <div className={styles.exercise_title}>Exercise</div>
        <div className={styles.nav}>
          <ul className={styles.tab_list}>
            <li className={styles.tab_item}>
              <a className={`${styles.tab_link} ${styles.active}`} href="#Gym">
                Gym
              </a>
            </li>
            <li className={styles.tab_item}>
              <a className={styles.tab_link} href="#Home">
                Home
              </a>
            </li>
            <li className={styles.tab_item}>
              <a className={styles.tab_link} href="#Yoga">
                Yoga
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.exercise_content}>
          <img src={gym_img} alt="gym_workout_image" />
          <div className={styles.exercise_text}>
            <h3>A short title works best</h3>
            <p>
              At home to gym, crossfit to pilates, yoga to bodyweight, as well
              as healthy and easy to make breakfasts, lunches, dinners and
              snacks. We want to make sure you enjoy the journey for a healthy
              lifestyle.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Exercise;
