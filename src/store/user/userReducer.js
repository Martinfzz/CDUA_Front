import { AUTH_TOKEN, USER_ID } from "../../config";
import Cookies from "js-cookie";
import {
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
  GET_USER_REQUEST,
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  RESET_ERRORS,
} from "./userType";

const INITIAL_STATE = {
  loading: false,
  isLogged: false,
  isRegistred: false,
  jwtToken: Cookies.get(AUTH_TOKEN),
  isUpdateSucceed: false,
  userProfile: {
    id: Cookies.get(USER_ID), firstName: "",
  },
  loginError: "",
  logoutError: "",
  registrationError: "",
  error: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REGISTRATION_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case GET_USER_REQUEST:
    case UPDATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
        isRegistered: false,
        isUpdateSucceed: false,
        loginError: "",
        logoutError: "",
        registrationError: "",
        error: "",
      };
    case REGISTRATION_FAILED:
      return {
        ...state,
        loading: false,
        isRegistred: false,
        jwtToken: "",
        registrationError: action.error,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
        isLogged: false,
        jwtToken: "",
        loginError: action.error,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading: false,
        isRegistred: true,
        jwtToken: "1",
        userProfile: action.userProfile,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        jwtToken: action.jtwToken,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        isUpdateSucceed: true,
        userProfile: action.userProfile,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        isLogged: true,
        isUpdateSucceed: false,
      };
    case LOGOUT_SUCCESS:
      return {
        loading: false,
        isLogged: false,
        jwtToken: "",
        userProfile: {},
      };
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
        logoutError: action.error,
      };
    case GET_USER_FAILED:
      return {
        loading: false,
        isLogged: true,
        error: action.error,
      };
    case UPDATE_USER_FAILED:
      return {
        loading: false,
        isUpdateSucceed: false,
        error: action.error,
      };
    case RESET_ERRORS:
      return {
        loginError: "",
        logoutError: "",
        registrationError: "",
        error: "",
      };
    default:
      return state;
  }
};

export default userReducer;
