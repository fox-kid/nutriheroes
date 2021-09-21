import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import Scrollspy from "react-scrollspy";

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
        <Link to="home" spy={true} smooth={true} offset={-70} duration={500}>
          <NavLink to={ROUTES.ROUTE_DASHBOARD}>
            <img src={logo} alt="nutriheroes_logo" />{" "}
          </NavLink>
        </Link>
        <nav className={`${isActive && styles.nav}`}>
          <ul>
            <Scrollspy
              items={["home", "exercise", "nutrition", "expertise", "app"]}
              currentClassName={styles.isCurrent}
              offset={-130}
            >
              <li className={styles.hidden_nav} hidden>
                Home
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="exercise"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={500}
                  onClick={() => setIsActive((isActive) => !isActive)}
                >
                  <NavLink to={ROUTES.ROUTE_DASHBOARD}>Exercise</NavLink>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="nutrition"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsActive((isActive) => !isActive)}
                >
                  <NavLink to={ROUTES.ROUTE_DASHBOARD}>Nutrition</NavLink>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="expertise"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsActive((isActive) => !isActive)}
                >
                  <NavLink to={ROUTES.ROUTE_DASHBOARD}>Expertise</NavLink>
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="app"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => setIsActive((isActive) => !isActive)}
                >
                  <NavLink to={ROUTES.ROUTE_DASHBOARD}>App</NavLink>
                </Link>
              </li>
              <li>
                <NavLink
                  to={ROUTES.ROUTE_SIGN_UP}
                  className={`${styles.btn} ${styles.text_capitalize} ${styles.after_light}`}
                  onClick={() => {
                    setIsActive((isActive) => !isActive);
                    window.scroll({
                      top: 80,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Sign Up
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ROUTES.ROUTE_LOGIN}
                  className={styles.text_capitalize}
                  onClick={() => {
                    setIsActive((isActive) => !isActive);
                    window.scroll({
                      top: 80,
                      left: 0,
                      behavior: "smooth",
                    });
                  }}
                >
                  Login
                </NavLink>
              </li>
            </Scrollspy>
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
