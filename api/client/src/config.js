/* DEPLOY PARA HEROKU */

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://gasfedev-netflix.herokuapp.com/api/",
});
