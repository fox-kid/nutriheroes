import styles from "./Exercise.module.css";
import gym_img from "../../images/gym_img.png";
import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

function Exercise() {
  return (
    <section className={styles.container} title="Exercise" id="exercise">
      <Tabs>
        <div className={styles.exercise_box}>
          <div className={styles.exercise_title}>Exercise</div>
          <div className={styles.nav}>
            <TabList className={styles.tab_list}>
              <Tab className={styles.tab_item}>Gym</Tab>
              <Tab className={styles.tab_item}>Home</Tab>
              <Tab className={styles.tab_item}>Yoga</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className={styles.exercise_content}>
              <img src={gym_img} alt="gym_workout_image" />
              <div className={styles.exercise_text}>
                <h3>A short title works best</h3>
                <p>
                  At home to gym, crossfit to pilates, yoga to bodyweight, as
                  well as healthy and easy to make breakfasts, lunches, dinners
                  and snacks. We want to make sure you enjoy the journey for a
                  healthy lifestyle.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.exercise_content}>
              <img src={gym_img} alt="gym_workout_image" />
              <div className={styles.exercise_text}>
                <h3>Number Two</h3>
                <p>
                  2 At home to gym, crossfit to pilates, yoga to bodyweight, as
                  well as healthy and easy to make breakfasts, lunches, dinners
                  and snacks. We want to make sure you enjoy the journey for a
                  healthy lifestyle.
                </p>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.exercise_content}>
              <img src={gym_img} alt="gym_workout_image" />
              <div className={styles.exercise_text}>
                <h3>Number Three</h3>
                <p>
                  3 At home to gym, crossfit to pilates, yoga to bodyweight, as
                  well as healthy and easy to make breakfasts, lunches, dinners
                  and snacks. We want to make sure you enjoy the journey for a
                  healthy lifestyle.
                </p>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </section>
  );
}

export default Exercise;
