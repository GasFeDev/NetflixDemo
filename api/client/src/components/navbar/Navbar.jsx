import { ArrowDropDown, Notifications, Search } from "@material-ui/icons";
import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  /* La propiedad de Window solo lectura pageYOffset es un alias para scrollY ; como tal, devuelve el número de píxeles que el documento se desplaza actualmente a lo largo del eje vertical (es decir, arriba o abajo) con un valor de 0.0, lo que indica que el borde superior del Document está actualmente alineado con el borde superior de la ventana área de contenido. */
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
          <Link to="/" className="link">
            <span>Inicio</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Películas</span>
          </Link>
          <span>Nuevo y Popular</span>
          <span>Favoritos</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span>Niños</span>
          <Notifications className="icon" />
          <img
            src="https://ih0.redbubble.net/image.618369215.1083/flat,1000x1000,075,f.u2.jpg"
            alt=""
          />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Configuración</span>
              <span onClick={() => dispatch(logout())}>Cerrar Sesión</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
