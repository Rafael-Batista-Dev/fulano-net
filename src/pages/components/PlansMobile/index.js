import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Plans = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="content" style={{ marginBottom: "4rem" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-3" data-aos="fade-down">
              <div className="card-up">
                <div className="header-card-tv">
                  {" "}
                  <h3>Vênus</h3>{" "}
                </div>
                <div className="body-card">
                  <p className="site-name" className="site-name">Fulano Net</p>
                  <p className="banda">
                    4GB + <span className="more-gb">2</span>
                    <span className="month">Mês</span>
                  </p>
                </div>
                <div className="line-card">
                  <hr />
                </div>

                <div className="list-benefits">
                  <ul>
                    <li>WhatsApp ilimitado</li>
                    <li>2000 min ligações</li>
                    <li>500 SMS disponíveis</li>
                    <li>+ 1 GB</li>
                  </ul>
                </div>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Conferir !
                </button>
              </div>
            </div>
            <div
              className="col-lg-3"
              data-aos="fade-up"
              style={{ marginTop: "6rem" }}
            >
              <div className="card-down">
                <div className="header-card-tv">
                  {" "}
                  <h3>Marte</h3>{" "}
                </div>
                <div className="body-card">
                  <p className="site-name">Fulano Net</p>
                  <p className="banda">
                    4GB + <span className="more-gb">3</span>
                    <span className="month">Mês</span>
                  </p>
                </div>
                <div className="line-card">
                  <hr />
                </div>

                <div className="list-benefits">
                  <ul>
                    <li>WhatsApp ilimitado</li>
                    <li>2500 min ligações</li>
                    <li>SMS ilimitados</li>
                    <li>+ 1.5 GB</li>
                  </ul>
                </div>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Conferir !
                </button>
              </div>
            </div>
            <div className="col-lg-3" data-aos="fade-down">
              <div className="card-up">
                <div className="header-card-tv">
                  {" "}
                  <h3>Titã</h3>{" "}
                </div>
                <div className="body-card">
                  <p className="site-name">Fulano Net</p>
                  <p className="banda">
                    4GB + <span className="more-gb">4</span>
                    <span className="month">Mês</span>
                  </p>
                </div>
                <div className="line-card">
                  <hr />
                </div>

                <div className="list-benefits">
                  <ul>
                    <li>WhatsApp ilimitado</li>
                    <li>Ligações ilimitadas</li>
                    <li>1200 SMS disponíveis</li>
                    <li>+ 2 GB</li>
                  </ul>
                </div>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Conferir !
                </button>
              </div>
            </div>
            <div
              className="col-lg-3"
              data-aos="fade-up"
              style={{ marginTop: "6rem" }}
            >
              <div className="card-down">
                <div className="header-card-tv">
                  {" "}
                  <h3>Hipérion</h3>{" "}
                </div>
                <div className="body-card">
                  <p className="site-name">Fulano Net</p>
                  <p className="banda">
                    4GB + <span className="more-gb">5</span>
                    <span className="month">Mês</span>
                  </p>
                </div>
                <div className="line-card">
                  <hr />
                </div>

                <div className="list-benefits">
                  <ul>
                    <li>WhatsApp ilimitado</li>
                    <li>Ligações ilimitadas</li>
                    <li>SMS ilimitados</li>
                    <li>+ 3 GB</li>
                  </ul>
                </div>
                <button className="btn btn_get btn-lg btn-block btn_get_two">
                  Conferir !
                </button>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="content-description-mobile" data-aos="fade-right">
                <h3>Agora você pode consultar seu saldo</h3>
                <hr />
                <br />
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus delectus nemo officia debitis incidunt provident
                  commodi earum ratione quis, qui tenetur ea fugit eum
                  perferendis consequatur assumenda! Explicabo, eum dignissimos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
