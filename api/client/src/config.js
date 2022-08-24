/* DEPLOY PARA HEROKU */

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://gfd-netflixdemo.herokuapp.com/api/",
});
