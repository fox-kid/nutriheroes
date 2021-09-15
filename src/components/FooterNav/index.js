import { Link } from "react-router-dom";
import styles from "./FooterNav.module.css";

function FooterNav({ header, links }) {
  return (
    <div className={styles.wrapper}>
      <h5>{header}</h5>
      <ul>
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
