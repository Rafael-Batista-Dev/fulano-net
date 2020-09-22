import React from "react";
import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div
        className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"
        style={{ marginTop: "3rem", width: "30%" }}
      >
        <div className="card card0 border-0">
          <div className="row d-flex">

            <div className="col-lg-12">
              <div className="card2 card border-0 px-4 py-5">
                <center>
                    <img
                    src={Logo}
                    className="logo"
                    alt="Brisanet"
                  />
                </center>
                <br />
                <div className="row mb-3 ">
                  <div className="facebook text-center mr-1">
                    <div className="fa fa-facebook"> Facebook</div>
                  </div>
                  <div className="gmail text-center mr-1">
                    <div className="fa fa-google"> Gmail</div>
                  </div>
                  <div className="linkedin text-center mr-1">
                    <div className="fa fa-linkedin"> Linkedin</div>
                  </div>
                </div>
                <div className="row px-3 mb-2">
                  <div className="line"></div>{" "}
                  <small className="or text-center">OU</small>
                  <div className="line"></div>
                </div>
                <div className="row px-3">
                  <label className="mb-2">
                    <h6 className="mb-0 text-sm">Seu Email</h6>
                  </label>
                  <input
                    className="mb-2"
                    type="text"
                    name="email"
                    placeholder="Informe seu endereço de email"
                  ></input>
                </div>
                <div className="row px-3">
                  <label className="mb-2">
                    <h6 className="mb-0 text-sm">Senha</h6>
                  </label>
                  <input
                    className="mb-2"
                    type="password"
                    name="email"
                    placeholder="Informe sua senha"
                  ></input>
                </div>
                <div className="row px-3 mb-2">
                  <div className="custom-control custom-checkbox custom-control-inline">
                    <input
                      id="chk1"
                      type="checkbox"
                      name="chk"
                      className="custom-control-input"
                    ></input>
                    <label className="custom-control-label text-sm">
                      Memorizar
                    </label>
                  </div>
                  <Link to="/" className="ml-auto mb-0 text-sm">
                    Recuperar senha
                  </Link>
                </div>
                <div className="row mb-3 px-3">
                  {" "}
                  <button
                    type="submit"
                    className="btn btn_get btn-lg btn-block btn_get_two"
                  >
                    Entrar
                  </button>{" "}
                </div>
                <div className="row mb-4 px-3">
                  {" "}
                  <small className="font-weight-bold">
                    Não tem conta? <a className="text-danger ">Registre-se</a>
                  </small>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
