import { useContext, useState } from "react";
import { login } from "../../authContext/apiCalls";
import { AuthContext } from "../../authContext/AuthContext";
import "./login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Iniciar Sesión</h1>
          <input
            type="email"
            placeholder="Ingrese su correo electrónico"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Ingrese su contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Ingresar
          </button>
          <span>
            Nuevo en Netflix? <b>Registrese ahora.</b>
          </span>
          <small>
            Esta página está protegida por Google reCAPTCHA para garantizar que
            no sea un bot.<b> Leer más</b>.
          </small>
        </form>
      </div>
    </div>
  );
}
