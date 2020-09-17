import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-dark bg-dark fixed-top">
        <a href="/" className="navbar-brand">
          <i className="fa fa-internet"></i>Brisa<b>Net</b>
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
              />
              <span className="input-group-addon">
                <i className="material-icons">&#xE8B6;</i>
              </span>
            </div>
          </form>

          <div className="navbar-nav ml-auto">
            <a href="/" className="nav-item nav-link">
              <i className="fa fa-home"></i>
              <span>Sobre</span>
            </a>
            <a href="/" className="nav-item nav-link">
              <i className="fa fa-users"></i>
              <span>Internet</span>
            </a>
            <a href="/" className="nav-item nav-link">
              <i className="fa fa-pie-chart"></i>
              <span>Móvel</span>
            </a>
            <a href="/" className="nav-item nav-link">
              <i className="fa fa-bell"></i>
              <span>TV</span>
            </a>
            <a href="/" className="nav-item nav-link">
              <i className="fa fa-briefcase"></i>
              <span>Indicar Amigo</span>
            </a>
            <a href="/" className="nav-item nav-link">
              <i className="fa fa-gears"></i>
              <span>BrisaCliente</span>
            </a>

            <div className="nav-item dropdown">
              <a
                href="/"
                data-toggle="dropdown"
                className="nav-item nav-link dropdown-toggle user-action"
              >
                <img
                  src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg"
                  className="avatar"
                  alt="Avatar"
                />{" "}
                Rafael .B <b className="caret"></b>
              </a>
              <div className="dropdown-menu">
                <a href="/" className="dropdown-item">
                  <i className="fa fa-user-o"></i> Perfil
                </a>
                <a href="/" className="dropdown-item">
                  <i className="fa fa-bullhorn"></i> Informações
                </a>
                <a href="/" className="dropdown-item">
                  <i className="fa fa-sliders"></i> Configurações
                </a>
                <div className="divider dropdown-divider"></div>
                <a href="/" className="dropdown-item">
                  <i className="material-icons">&#xE8AC;</i> Sair
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
