import axios from "axios";

const BASE_URL = "http://localhost:8800/api/";

/* const TOKEN =
  JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
    .accessToken || ""; */

/* persist:root, guarda la tienda Redux en un almacenamiento persistente, por ejemplo, el almacenamiento local. Por lo tanto, incluso después de actualizar el navegador, se conservará el estado del sitio.  */
const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
