import React from "react";
import Logo from "../../../assets/logo2.ico";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
        <a href="/" className="navbar-brand">
          <img className="img-logo" src={Logo} alt="Brisanet" />
        </a>
        <button
          type="button"
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          id="navbarCollapse"
          className="collapse navbar-collapse justify-content-start"
        >
          <form className="navbar-form form-inline">
            <div className="input-group search-box">
              <input
                type="text"
                id="search"
                className="form-control"
                placeholder="Onde você está..."
                style={{color: '#FFF'}}
              />
              <span className="input-group-addon">
                <i className="material-icons">&#xE8B6;</i>
              </span>
            </div>
          </form>

          <div className="navbar-nav ml-auto">
            <Link to="/" className="nav-item nav-link">
              <i className="fa fa-home"></i>
              <span>Início</span>
            </Link>
            <Link to="/internet" className="nav-item nav-link">
              <i className="fa fa-wifi"></i>
              <span>Internet</span>
            </Link>
            <Link to="/movel" className="nav-item nav-link">
              <i className="fa fa-tablet"></i>
              <span>Móvel</span>
            </Link>
            <Link to="/tv" className="nav-item nav-link">
              <i className="fa fa-television"></i>
              <span>TV</span>
            </Link>
            <Link to="/indicar-amigo" className="nav-item nav-link">
              <i className="fa fa-handshake-o "></i>
              <span>Amigo</span>
            </Link>

            <div className="nav-item dropdown">
              <Link
                to="/"
                data-toggle="dropdown"
                className="nav-item nav-link dropdown-toggle user-action"
              >
                <img
                  src="https://banner2.cleanpng.com/20180410/bbw/kisspng-avatar-user-medicine-surgery-patient-avatar-5acc9f7a7cb983.0104600115233596105109.jpg"
                  className="avatar"
                  alt="Avatar"
                />{" "}
                Usuário <b className="caret"></b>
              </Link>
              <div className="dropdown-menu">
                <Link to="/" className="dropdown-item">
                  <i className="fa fa-user-o sub-link"></i> Perfil
                </Link>
                <Link to="/" className="dropdown-item">
                  <i className="fa fa-bullhorn"></i> Informações
                </Link>
                <Link to="/" className="dropdown-item">
                  <i className="fa fa-sliders"></i> Configurações
                </Link>
                <div className="divider dropdown-divider"></div>
                <Link to="/login" className="dropdown-item">
                  <i className="material-icons">&#xE8AC;</i> Entrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
