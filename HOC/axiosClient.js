import axios from "axios";
import Cookies from "js-cookie";
import Store from "../redux/store";
import * as syncActions from "../actions/syncActions";
import { getCookie } from "../actions/auth";

const AUTH_TOKEN = getCookie("token");
// console.log("Store ", Store.getState());
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // headers: { Authorization: `token ${Cookies.get("token")}` },
  // headers: { Authorization: `token ${AUTH_TOKEN}` },
});

instance.interceptors.request.use(
  function (config) {
    config.headers.Authorization = `token ${Cookies.get("token")}`;
    // Do something before request is sent
    Store.dispatch(syncActions.Spinner(true));

    return config;
  },
  function (error) {
    // Do something with request error
    Store.dispatch(syncActions.Spinner(false));
    Store.dispatch(syncActions.Error(error));
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("response", response);
    Store.dispatch(syncActions.Spinner(false));
    Store.dispatch(syncActions.clearError());

    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("response error", error);
    const status = error.response ? error.response.status : null;

    Store.dispatch(syncActions.Spinner(false));
    Store.dispatch(syncActions.clearError());

    Store.dispatch(syncActions.Error(error));
    return Promise.rejconfigect(error);
  }
);

export default instance;
