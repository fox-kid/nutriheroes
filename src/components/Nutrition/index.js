import { Tabs, Tab, TabList, TabPanel } from "react-tabs";

import styles from "./Nutrition.module.css";
import healthy_img from "../../images/healthy_img.png";

function Nutrition() {
  return (
    <section className={styles.container} title="Nutrition" id="nutrition">
      <Tabs>
        <div className={styles.nutrition_wrapper}>
          <div className={styles.nutrition_title}>Nutrition</div>
          <div className={styles.nav}>
            <TabList className={styles.tab_list}>
              <Tab className={styles.tab_item}>Healthy</Tab>
              <Tab className={styles.tab_item}>Personalised</Tab>
              <Tab className={styles.tab_item}>Professional</Tab>
            </TabList>
          </div>
          <TabPanel>
            <div className={styles.nutrition_box}>
              <div className={styles.nutrition_text}>
                <h3>A short title is the best</h3>
                <p>
                  Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam
                </p>
              </div>
              <div className={styles.nutrition_img}>
                <img src={healthy_img} alt="healthy_bowl_image" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.nutrition_box}>
              <div className={styles.nutrition_text}>
                <h3>Personalised</h3>
                <p>
                  2 Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam
                </p>
              </div>
              <div className={styles.nutrition_img}>
                <img src={healthy_img} alt="healthy_bowl_image" />
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.nutrition_box}>
              <div className={styles.nutrition_text}>
                <h3>Professional</h3>
                <p>
                  3 Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam et maximus
                  lorem. Praesent eu dolor eu orci vehicula euismod. Vivamus sed
                  sollicitudin libero, vel malesuada velit. Nullam
                </p>
              </div>
              <div className={styles.nutrition_img}>
                <img src={healthy_img} alt="healthy_bowl_image" />
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
    </section>
  );
}

export default Nutrition;
