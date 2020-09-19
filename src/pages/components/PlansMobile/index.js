import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Plans = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        className="content"
        style={{ marginTop: "4rem", marginBottom: "4rem" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4 plan" data-aos="fade-up">
              <div className="netuno-plan">
                <div className="plan-header">
                  <div className="storage">
                    <span>
                      <i>50</i>{" "}
                    </span>{" "}
                    Mega
                  </div>
                  <h3 className="title">Netuno</h3>
                </div>
                <ul className="services-list">
                  <li>Fibra Óptica</li>
                  <li>Download 50 Mbps</li>
                  <li>Upload 10 Mbps</li>
                  <li>Wi-Fi de Alta Perfomance</li>
                  <div>
                    <div className="price">
                      <span>R$</span>73,00
                    </div>
                  </div>
                </ul>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Assinar!
                </button>
              </div>
            </div>

            <div className="col-md-4 plan" data-aos="fade-up">
              <div className="saturno-plan">
                <div className="plan-header">
                  <div className="storage">
                    <span>
                      <i>200</i>{" "}
                    </span>{" "}
                    Mega
                  </div>
                  <h3 className="title">Saturno</h3>
                </div>
                <ul className="services-list">
                  <li>Fibra Óptica</li>
                  <li>Download 200 Mbps</li>
                  <li>Upload 40 Mbps</li>
                  <li>Wi-Fi de Alta Perfomance</li>
                  <div>
                    <div className="price">
                      <span>R$</span>99,00
                    </div>
                  </div>
                </ul>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Assinar!
                </button>
              </div>
            </div>

            <div className="col-md-4 plan" data-aos="fade-down">
              <div className="jupiter-plan">
                <div className="plan-header">
                  <div className="storage">
                    <span>
                      <i>1</i>{" "}
                    </span>{" "}
                    Giga
                  </div>
                  <h3 className="title">Júpiter</h3>
                </div>
                <ul className="services-list">
                  <li>Fibra Óptica</li>
                  <li>Download 1 GB</li>
                  <li>Upload 200 Mbps</li>
                  <li>Wi-Fi de Alta Perfomance</li>
                  <div>
                    <div className="price">
                      <span>R$</span>499,00
                    </div>
                  </div>
                </ul>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Assinar!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
