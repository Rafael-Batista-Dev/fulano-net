import React, { useEffect } from "react";
import Lottie from "react-lottie";

import animationData from "../assets/friends.json";

import Aos from "aos";
import "aos/dist/aos.css";

export default function MyFriend() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-title">
              <h1 data-aos="fade-down">Você indica, a gente liga</h1>
            </div>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-right">
            <div style={{ marginTop: "2rem", marginBottom: "4rem" }}>
              <Lottie
                width={400}
                height={400}
                options={{
                  loop: true,
                  autoplay: true,
                  animationData,
                  rendererSettings: {
                    preserveAspectRatio: "xMidYMid slice",
                  },
                }}
              ></Lottie>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 myfriend" data-aos="fade-left">
            <div style={{ marginTop: "2rem" }}>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mt-2 text-sm">Seu Nome</h6>
                </label>
                <input
                  className="mb-1"
                  type="text"
                  name="nome"
                  placeholder="Informe seu nome"
                ></input>
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mt-2 text-sm">CPF</h6>
                </label>
                <input
                  className="mb-1"
                  type="text"
                  name="cpf"
                  placeholder="Informe seu CPF"
                ></input>
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mt-2 text-sm">Telefone</h6>
                </label>
                <input
                  className="mb-1"
                  type="text"
                  name="telefone"
                  placeholder="Informe seu nome"
                ></input>
              </div>
              <div className="row px-3">
                <label className="mb-1">
                  <h6 className="mt-2 text-sm">Email</h6>
                </label>
                <input
                  className="mb-1"
                  type="email"
                  name="email"
                  placeholder="Informe seu nome"
                ></input>
              </div>
              <div className="row px-3">
                <button
                  type="submit"
                  className="mt-4 btn btn_get btn-lg btn-block btn_get_two"
                >
                  Entrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
