import React from "react";

const Login = () => {
  return (
    <>
      <div
        className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto"
        style={{ marginTop: "3rem", width: "70%" }}
      >
        <div className="card card0 border-0">
          <div className="row d-flex">
            <div className="col-lg-6">
              <div className="card1 pb-5">
                <div className="row">
                  <img
                    src="https://www.brisanet.com.br/imgs/logo.svg"
                    className="logo"
                    alt="logo"
                  />
                </div>
                <div className="row row px-3 justify-content-center mt-4 mb-5 border-line">
                  {" "}
                  <img
                    style={{ marginTop: "4rem" }}
                    src="https://i.imgur.com/uNGdWHi.png"
                    className="image"
                    alt="image"
                  />
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card2 card border-0 px-4 py-5">
                <center>
                  <h5 className="mb-0 mr-4 mt-2">Entrar com</h5>
                </center>
                <br />
                <div className="row mb-4 px-3">
                  <div className="facebook text-center mr-3">
                    <div className="fa fa-facebook"></div>
                  </div>
                  <div className="twitter text-center mr-3">
                    <div className="fa fa-twitter"></div>
                  </div>
                  <div className="linkedin text-center mr-3">
                    <div className="fa fa-linkedin"></div>
                  </div>
                </div>
                <div className="row px-3 mb-4">
                  <div className="line"></div>{" "}
                  <small className="or text-center">OU</small>
                  <div className="line"></div>
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Seu Email</h6>
                  </label>
                  <input
                    className="mb-4"
                    type="text"
                    name="email"
                    placeholder="Informe seu endereço de email"
                  ></input>
                </div>
                <div className="row px-3">
                  <label className="mb-1">
                    <h6 className="mb-0 text-sm">Senha</h6>
                  </label>
                  <input
                    className="mb-4"
                    type="password"
                    name="email"
                    placeholder="Informe sua senha"
                  ></input>
                </div>
                <div className="row px-3 mb-4">
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
                  <a href="/" className="ml-auto mb-0 text-sm">
                    Recuperar senha
                  </a>
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
