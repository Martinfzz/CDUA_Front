import Cookies from "js-cookie";
import { AUTH_TOKEN, USER_ID } from "config";
// import store from "store/store";
// import {
//   registrationRequest,
// } from "store";
import API from "../api";

export default class UserManager {
  static async registerUser(email, password) {
    // store.dispatch(registrationRequest());
    try {
      const response = await API.post("/registration", { user: { email, password } });
      return response;
      // store.dispatch(
      //   registrationSuccess({
      //     id: response.data.id,
      //     firstName: response.data.first_name,
      //   }, response.headers.authorization),
      // );
      // Cookies.set(AUTH_TOKEN, response.headers.authorization, { expires: 7, secure: true, sameSite: "strict" });
      // Cookies.set(USER_ID, response.data.id, { expires: 7, secure: true, sameSite: "strict" });
    } catch (error) {
      // store.dispatch(registrationFailed(error.message));
    }
  }
}
