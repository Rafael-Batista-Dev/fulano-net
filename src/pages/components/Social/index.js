import React, { useEffect } from "react";
import Lottie from "react-lottie";

import animationData from "../../../assets/social.json";

import Aos from "aos";
import "aos/dist/aos.css";

const Social = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="content"
      style={{ background: "#EBeBEB", marginTop: "-1.5rem" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 data-aos="fade-down">Conecte-se com todos</h1>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-right">
            <div style={{ marginBottom: "4rem" }}>
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
          <div className="col-lg-6 col-md-6" data-aos="fade-left">
            <p>
              A Brisanet trabalha há mais de 20 anos procurando inovar na área
              de Telecomunicações, a fim de garantir qualidade aos clientes,
              contando com o apoio de profissionais capacitados para operar,
              incorporar, inovar e acompanhar as tendências tecnológicas.
            </p>

            <p>
              A Brisanet trabalha há mais de 20 anos procurando inovar na área
              de Telecomunicações, a fim de garantir qualidade aos clientes,
              contando com o apoio de profissionais capacitados para operar,
              incorporar, inovar e acompanhar as tendências tecnológicas.
            </p>

            <p>
              A Brisanet trabalha há mais de 20 anos procurando inovar na área
              de Telecomunicações, a fim de garantir qualidade aos clientes,
              contando com o apoio de profissionais capacitados para operar,
              incorporar, inovar e acompanhar as tendências tecnológicas.
            </p>

            <button
              className="btn btn_get btn_get_two float-right"
              data-aos="fade-right"
            >
              Saiba mais <i className="fa fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Social;
