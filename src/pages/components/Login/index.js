import React from "react";
import Logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container-fluid " style={{ marginTop: "7rem" }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="card main-div">
              <center>
                <img src={Logo} className="logo" alt="Brisanet" />
              </center>
              <br />
              <div className="btn-group btn-group-toggle">
                <div className="facebook text-center ">
                  <div className="fa fa-facebook"> Facebook</div>
                </div>
                <div className="gmail text-center ">
                  <div className="fa fa-google"> Gmail</div>
                </div>
              </div>
              <div className="row px-3 mt-4 mb-4">
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
              <div className="row px-3 mt-2  mb-2">
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
                <Link to="/" className="ml-auto text-sm">
                  Recuperar senha
                </Link>
              </div>
              <div className="row px-3">
                {" "}
                <button
                  type="submit"
                  className="btn btn_get btn-lg btn-block btn_get_two"
                >
                  Entrar
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
