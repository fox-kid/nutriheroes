import { Link } from "react-router-dom";
import { useState } from "react";

import styles from "./SignUp.module.css";
import google_logo from "../../images/google_logo.svg";
import facebook_logo from "../../images/facebook_logo.svg";
import ROUTES from "../../constants/routes";

function SignUp() {
  const [user, setUser] = useState({
    email: "",
  });

  return (
    <main className={styles.sign_up_wrapper}>
      <div className={styles.container}>
        <div className={styles.text_wrapper}>
          <h2>Did someone say registration?</h2>
          <h3>That’s right! And you can register too!</h3>
          <p>
            Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin
            libero, vel malesuada velit. Nullam et maximus lorem.
          </p>
        </div>
        <div className={styles.registration_wrapper}>
          <form className={styles.form_box}>
            <label className={styles.email_label} htmlFor="email">
              Email
            </label>
            <input
              className={styles.input_text}
              value={user.email}
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  [e.target.name]: e.target.value,
                }))
              }
            />
            <button className={styles.form_btn}>
              <img src={google_logo} alt="google_logo" />
              Continue with Google
            </button>
            <button className={styles.form_btn}>
              <img src={facebook_logo} alt="facebook_logo" />
              Continue with Facebook
            </button>
            <label htmlFor="terms" className={styles.terms}>
              I have read and agree to the
              <Link to="#terms"> terms and conditions</Link>
              <input type="radio" id="terms" name="terms" value="terms" />
            </label>
            <button className={styles.sign_up_btn} type="submit">
              Get Started
            </button>
          </form>
          <p className={styles.login_link}>
            Already have an account?
            <Link
              to={ROUTES.ROUTE_LOGIN}
              onClick={() =>
                window.scroll({
                  top: 40,
                  left: 0,
                  behavior: "smooth",
                })
              }
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
