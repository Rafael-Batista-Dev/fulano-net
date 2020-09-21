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
              <div className="mobile-plan">
                <div className="plan-header">
                  <div className="storage">
                    <span>
                      <i>1</i>{" "}
                    </span>{" "}
                    GIGA
                  </div>
                  <h3 className="title">+ 1 GB POR 7 DIAS</h3>
                </div>
                <ul className="services-list">
                  <li>WhatsApp ilimitado</li>
                  <li>Ligações ilimitadas</li>
                  <li>SMS ilimitado</li>
                  <div>
                    <div className="price">
                      <span>R$</span>6,99
                    </div>
                  </div>
                </ul>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Assinar!
                </button>
              </div>
            </div>

            <div className="col-md-4 plan" data-aos="fade-up">
              <div className="mobile-plan">
                <div className="plan-header">
                  <div className="storage">
                    <span>
                      <i>2</i>{" "}
                    </span>{" "}
                    GIGA
                  </div>
                  <h3 className="title">+ 2 GB POR 7 DIAS</h3>
                </div>
                <ul className="services-list">
                  <li>WhatsApp ilimitado</li>
                  <li>Ligações ilimitadas</li>
                  <li>SMS ilimitado</li>
                  <div>
                    <div className="price">
                      <span>R$</span>15,99
                    </div>
                  </div>
                </ul>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Assinar!
                </button>
              </div>
            </div>

            <div className="col-md-4 plan" data-aos="fade-down">
              <div className="mobile-plan">
                <div className="plan-header">
                  <div className="storage">
                    <span>
                      <i>2</i>{" "}
                    </span>{" "}
                    GIGA
                  </div>
                  <h3 className="title">+ 3 GB POR 15 DIAS</h3>
                </div>
                <ul className="services-list">
                  <li>WhatsApp ilimitado</li>
                  <li>Ligações ilimitadas</li>
                  <li>SMS ilimitado</li>
                  <div>
                    <div className="price">
                      <span>R$</span>29,99
                    </div>
                  </div>
                </ul>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Assinar!
                </button>
              </div>
            </div>

            <div className="col-md-4 plan" data-aos="fade-down">
              <div className="mobile-plan">
                <div className="plan-header">
                  <div className="storage">
                    <span>
                      <i>2</i>{" "}
                    </span>{" "}
                    Giga
                  </div>
                  <h3 className="title">+ 5 GB POR 15 DIAS</h3>
                </div>
                <ul className="services-list">
                  <li>WhatsApp ilimitado</li>
                  <li>Ligações ilimitadas</li>
                  <li>SMS ilimitado</li>
                  <div>
                    <div className="price">
                      <span>R$</span>59,99
                    </div>
                  </div>
                </ul>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Assinar!
                </button>
              </div>
            </div>
            <div className="col-md-8 plan" data-aos="fade-down">
              <div className="mobile-plan">
                <div className="plan-header">
                  <div className="storage">
                    <span>
                      <i>15</i>{" "}
                    </span>{" "}
                    Giga
                  </div>
                  <h3 className="title">+ 15 GB POR 15 DIAS</h3>
                </div>
                <ul className="services-list">
                  <li>WhatsApp ilimitado</li>
                  <li>Ligações ilimitadas</li>
                  <li>SMS ilimitado</li>
                  <div>
                    <div className="price">
                      <span>R$</span>99,99
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
