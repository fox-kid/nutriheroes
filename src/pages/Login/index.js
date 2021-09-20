import { Link } from "react-router-dom";

import styles from "./Login.module.css";
import google_logo from "../../images/google_logo.svg";
import facebook_logo from "../../images/facebook_logo.svg";
import ROUTES from "../../config/routes";

function Login() {
  return (
    <main className={styles.login_wrapper}>
      <div className={styles.container}>
        <form className={styles.form_box}>
          <h1>Welcome back! Enter your details below</h1>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Username"
          />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            minLength="8"
            required
          />
          <p className={styles.divider}>OR</p>
          <Link to="Google">
            <button className={styles.form_btn}>
              <img src={google_logo} alt="google_logo" />
              Continue with Google
            </button>
          </Link>
          <Link to="Fb">
            <button className={styles.form_btn}>
              <img src={facebook_logo} alt="facebook_logo" />
              Continue with Facebook
            </button>
          </Link>
          <button className={styles.login_btn}>Login</button>
        </form>
        <p className={styles.sign_up_link}>
          Not a member yet?{" "}
          <Link
            to={ROUTES.ROUTE_SIGN_UP}
            onClick={() =>
              window.scroll({
                top: 40,
                left: 0,
                behavior: "smooth",
              })
            }
          >
            Register
          </Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
