import { useRef } from "react";
import { useState } from "react";
import { axiosInstance } from "../../config";

import { Link, useHistory } from "react-router-dom";
import "./register.scss";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };
  const handleFinish = async (e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    try {
      await axiosInstance.post("auth/register", { email, username, password });
      history.push("/login");
    } catch (err) {}
  };
  return (
    <div className="register">
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
        <h1>Películas ilimitadas, programas de TV y más.</h1>
        <h2>Mira en cualquier lugar. Cancelar en cualquier momento.</h2>
        <p>
          ¿Listo para comenzar? Ingrese su correo electrónico para crear o
          reiniciar su membresía.
        </p>
        {!email ? (
          <div className="input">
            <Link className="loginButton" to="/login">
              <button className="loginButton">Iniciar Sesión</button>
            </Link>

            <input
              type="email"
              placeholder="Correo electrónico"
              ref={emailRef}
            />
            <button className="registerButton" onClick={handleStart}>
              Registrarse
            </button>
          </div>
        ) : (
          <form className="input">
            <input
              type="username"
              placeholder="Nombre de Usuario"
              ref={usernameRef}
            />
            <input type="password" placeholder="Contraseña" ref={passwordRef} />
            <button className="registerButton" onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
