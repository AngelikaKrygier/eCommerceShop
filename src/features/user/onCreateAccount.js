import axios from "axios";

export const onCreateAccount = (email, pasword) => {
 
  axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCBrgJ-Nm-OXRXBOfQc69kLz0v1s4kF41M",
      {
        email: email,
        password: pasword,
        returnSecureToken: true,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
    .then((response) => console.log(response.data))
    .catch((error) => console.error(error.response.data));
};
