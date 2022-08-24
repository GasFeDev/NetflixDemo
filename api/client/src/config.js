/* DEPLOY PARA HEROKU */

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://NetflixApp.herokuapp.com/api/",
});
