import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import styles from "./Login.module.css";
import google_logo from "../../images/google_logo.svg";
import facebook_logo from "../../images/facebook_logo.svg";
import ROUTES from "../../config/routes";
import { signInUser } from "../../api/auth";

async function login(username, password) {
  const response = await signInUser(username, password);
  const token = response.data;
  return token.accessToken;
}

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [token, setToken] = useState("");
  const [loggedIn, setLoggenIn] = useState(false);

  function handleSignIn(e) {
    e.preventDefault();
    login(username, password)
      .then((res) => setToken(res))
      .catch(() => setError(true));
  }

  useEffect(() => {
    if (token) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
    }

    if (localStorage.getItem("accessToken") !== null) {
      setLoggenIn(true);
    } else {
      setLoggenIn(false);
    }
  });

  return loggedIn ? (
    <div>Logged In </div>
  ) : (
    <main className={styles.login_wrapper}>
      <div className={styles.container}>
        <form className={styles.form_box}>
          {error && <div>Something went wrong. Please, try again.</div>}
          <h1>Welcome back! Enter your details below</h1>
          <label htmlFor="username">Username:</label>
          <input
            value={username}
            type="text"
            id="username"
            name="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            minLength="8"
            onChange={(e) => setPassword(e.target.value)}
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
          <button
            className={styles.login_btn}
            type="submit"
            onClick={handleSignIn}
          >
            Login
          </button>
        </form>
        <p className={styles.sign_up_link}>
          Not a member yet?
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
