import { useState } from "react";
import { Link as NavLink } from "react-scroll";
import { Link } from "react-router-dom";

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
        <NavLink to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <Link to={ROUTES.ROUTE_DASHBOARD}>
            <img src={logo} alt="nutriheroes_logo" />{" "}
          </Link>
        </NavLink>
        <nav className={`${isActive && styles.nav}`}>
          <ul>
            <li>
              <NavLink
                activeClass="active"
                to="exercise"
                spy={true}
                smooth={true}
                offset={-160}
                duration={500}
                onClick={() => setIsActive((isActive) => !isActive)}
              >
                <Link to={ROUTES.ROUTE_DASHBOARD}>Exercise</Link>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="nutrition"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsActive((isActive) => !isActive)}
              >
                <Link to={ROUTES.ROUTE_DASHBOARD}>Nutrition</Link>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="expertise"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsActive((isActive) => !isActive)}
              >
                <Link to={ROUTES.ROUTE_DASHBOARD}>Expertise</Link>
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClass="active"
                to="app"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={() => setIsActive((isActive) => !isActive)}
              >
                <Link to={ROUTES.ROUTE_DASHBOARD}>App</Link>
              </NavLink>
            </li>
            <li>
              <Link
                to={ROUTES.ROUTE_SIGN_UP}
                className={`${styles.btn} ${styles.text_capitalize} ${styles.after_light}`}
                onClick={() => setIsActive((isActive) => !isActive)}
              >
                Sign Up
              </Link>
            </li>
            <li>
              <Link
                to={ROUTES.ROUTE_LOGIN}
                className={styles.text_capitalize}
                onClick={() => setIsActive((isActive) => !isActive)}
              >
                Login
              </Link>
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
      </div>
    </header>
  );
}

export default Header;
