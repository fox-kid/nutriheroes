import axios from "axios";

// const AUTH_URL = process.env.REACT_APP_AUTH_URL;

async function signInUser(phoneNumberOrEmail, password) {
  const response = await axios.post(
    "https://auth-api.test.area.ge/v1/user/signin",
    {
      phoneNumberOrEmail,
      password,
    },
    {
      headers: {
        "Content-type": "application/json",
      },
    }
  );

  return response.data;
}

export { signInUser };
