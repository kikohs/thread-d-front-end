import { SET_CURRENT_USER, SET_LOGGED_IN } from "./types";
import AuthAdapter from "../api";

export function createUser(user, history) {
  return dispatch => {
    AuthAdapter.signup(user).then(res => {
      if (!res.errors) {
        localStorage.setItem("token", res.token);
        dispatch({ type: SET_CURRENT_USER, user: res.user });
        history.push("/dashboard");
      }
    });
  };
}

export function loginUser(user, history) {
  return dispatch => {
    AuthAdapter.login(user).then(res => {
      if (!res.errors) {
        localStorage.setItem("token", res.token);
        dispatch({ type: SET_CURRENT_USER, user: res.user });
        history.push("/dashboard");
      }
    });
  };
}

export function setLoggedIn() {
  return { type: SET_LOGGED_IN };
}