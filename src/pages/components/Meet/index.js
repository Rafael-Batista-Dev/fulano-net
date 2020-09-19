import React, { useEffect } from "react";
import Lottie from "react-lottie";

import animationData from "../../../assets/meeting.json";

import Aos from "aos";
import "aos/dist/aos.css";

const Meet = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="content"
      style={{ background: "#FFF", marginTop: "-1.5rem" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h2>Trabalho em equipe</h2>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-right">
            <p>
              Quando sua equipe precisar se comunicar, use a estrutura da
              brisanet para fazer videoconferências confiáveis de forma simples,
              travamento e delay. Você pode fazer reuniões a qual quer momento
              em qual quer lugar gravar.
            </p>
            <p>
              Quando sua equipe precisar se comunicar, use a estrutura da
              brisanet para fazer videoconferências confiáveis de forma simples,
              travamento e delay. Você pode fazer reuniões a qual quer momento
              em qual quer lugar gravar.
            </p>
            <p>
              Quando sua equipe precisar se comunicar, use a estrutura da
              brisanet para fazer videoconferências confiáveis de forma simples,
              travamento e delay. Você pode fazer reuniões a qual quer momento
              em qual quer lugar gravar.
            </p>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-left">
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
        </div>
      </div>
    </div>
  );
};

export default Meet;
