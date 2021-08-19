import { store } from "../../store/configureStore";
import {
  registrationRequest,
  registrationFailed,
  registrationSuccess,
  logoutRequest,
  logoutFailed,
  logoutSuccess,
  loginRequest,
  loginSuccess,
  loginFailed,
  getUserSuccess,
  getUserFailed,
  getUserRequest,
  updateUserSuccess,
  updateUserFailed,
  updateUserRequest,
} from "../../store";
import API from "../api";

export default class UserManager {
  static async registerUser(email, password) {
    store.dispatch(registrationRequest());
    try {
      await API.post("/registration", { user: { email, password } });
      store.dispatch(
        registrationSuccess(),
      );
    } catch (error) {
      store.dispatch(registrationFailed(error.message));
    }
  }

  static async logoutUser() {
    store.dispatch(logoutRequest());
    try {
      await API.delete("/session");
      store.dispatch(logoutSuccess());
    } catch (error) {
      store.dispatch(logoutFailed(error.message));
    }
  }

  static async loginUser(email, password) {
    store.dispatch(loginRequest());
    try {
      const response = await API.post("session", { session: { email, password } });
      store.dispatch(
        loginSuccess(response.data.session.id.$oid, response.data.session.jwt),
      );
    } catch (error) {
      store.dispatch(loginFailed(error.message));
    }
  }

  static async getUser() {
    store.dispatch(getUserRequest());
    try {
      const response = await API.get(`/users/`);
      store.dispatch(getUserSuccess());
      return response.data;
    } catch (error) {
      store.dispatch(getUserFailed(error));
      return error.message;
    }
  }

  static async updateUser(user) {
    store.dispatch(updateUserRequest());
    try {
      const response = await API.put(`/users/`, user);
      store.dispatch(
        updateUserSuccess({
          id: response.data.id,
          firstName: response.data.first_name,
        }),
      );
      return response.data;
    } catch (error) {
      store.dispatch(updateUserFailed(error));
      return error.message;
    }
  }

  static async forgotPassword(user_mail) {
    const response = await API.post("/reset_passwords", { reset_password: { email: user_mail }});
    return response.data;
  }

  static async resetPassword(user_password, user_password_confirmation, token) {
    const response = await API.post(`reset_passwords/${token}`, { reset_password: { password: user_password, password_confirmation: user_password_confirmation }});
    return response.data;
  }
}
