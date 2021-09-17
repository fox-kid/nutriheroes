import { Link } from "react-router-dom";
import styles from "./FooterNav.module.css";
import tick_up from "../../images/tick_up.svg";
import tick_down from "../../images/tick_down.svg";
import { useState } from "react";

function FooterNav({ header, links }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.nav_tab}>
        <h5>{header}</h5>
        <button
          className={styles.footer_btn}
          onClick={() => setIsActive((isActive) => !isActive)}
        >
          <img src={`${isActive ? tick_down : tick_up}`} alt="tick_down" />
        </button>
      </div>
      <ul className={`${isActive ? styles.active : styles.inactive}`}>
        {links.map((link) => (
          <li key={link}>
            <Link to="#link">{link}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterNav;
