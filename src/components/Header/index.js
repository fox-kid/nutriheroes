import { NavLink, Link } from "react-router-dom";

import ROUTES from "../../config/routes";
import styles from "./Header.module.css";
import logo from "../../images/logo_header.png";
import hamburger from "../../images/hamburger_menu.png";
import { useState } from "react";

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
        <button
          className={styles.hamburger}
          onClick={() => setIsActive((isActive) => !isActive)}
        >
          <img src={hamburger} alt="hamburger_menu" />
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
