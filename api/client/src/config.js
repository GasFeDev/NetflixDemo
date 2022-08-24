/* DEPLOY PARA HEROKU */

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://netflixdemo.herokuapp.com/api/",
});
