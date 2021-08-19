import axios from "axios";
import { BASE_URL} from "../config";
import { store } from "../store/configureStore";

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use(async ({ headers, ...config }) => {
  const state = await store.getState();
  return {
    ...config,
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: `${headers.Authorization ?? state.user.jwtToken}`,
    },
  };
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      window.location = `/login?redirectUrl=${window.location.pathname}`;
      return Promise.resolve();
    }
    return Promise.reject(error);
  },
);

export default API;
