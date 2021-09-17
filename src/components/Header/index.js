import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
// import Scroll from "react-scroll";

import ROUTES from "../../config/routes";
import styles from "./Header.module.css";
import logo from "../../images/logo_header.png";
import hamburger from "../../images/hamburger_menu.png";
import hamburger_white from "../../images/hamburger_menu_white.png";

function Header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <div className={styles.container}>
        <Link to={ROUTES.ROUTE_DASHBOARD}>
          <img src={logo} alt="nutriheroes_logo" />
        </Link>
        <nav>
          <ul>
            <li>
              <NavLink to="#Exercise">Exercise</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ROUTE_DASHBOARD}>Nutrition</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ROUTE_DASHBOARD}>Expertise</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.ROUTE_DASHBOARD}>App</NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.ROUTE_SIGN_UP}
                className={`${styles.btn} ${styles.text_capitalize} ${styles.after_light}`}
              >
                Sign Up
              </NavLink>
            </li>
            <li>
              <NavLink
                to={ROUTES.ROUTE_LOGIN}
                className={styles.text_capitalize}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
        <button
          className={`${styles.hamburger} ${
            isActive ? styles.active : styles.inactive
          }`}
          onClick={() => setIsActive((isActive) => !isActive)}
        >
          <img
            src={`${isActive ? hamburger_white : hamburger}`}
            alt="hamburger_menu"
          />
        </button>
        {isActive ? (
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink to={ROUTES.ROUTE_DASHBOARD}>Exercise</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.ROUTE_DASHBOARD}>Nutrition</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.ROUTE_DASHBOARD}>Expertise</NavLink>
              </li>
              <li>
                <NavLink to={ROUTES.ROUTE_DASHBOARD}>App</NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.ROUTE_SIGN_UP}
                  className={`${styles.btn} ${styles.text_capitalize} ${styles.after_light}`}
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.ROUTE_LOGIN}
                  className={styles.text_capitalize}
                >
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
