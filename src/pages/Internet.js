import React, { useEffect } from "react";
import { Icon } from "react-icons-kit";
import { ic_done_all } from "react-icons-kit/md/ic_done_all";
import { ic_verified_user } from "react-icons-kit/md/ic_verified_user";
import { ic_phonelink_ring } from "react-icons-kit/md/ic_phonelink_ring";
import { ic_desktop_windows } from "react-icons-kit/md/ic_desktop_windows";
import { ic_devices } from "react-icons-kit/md/ic_devices";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Internet() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-title">
              <h1 data-aos="fade-down">Internet para todos os gostos</h1>
            </div>
          </div>
          <div className="col-lg-6" data-aos="fade-right">
            <h3>
              <strong>Melhores opções de planos</strong>
            </h3>
            <div className="content-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              eius, accusamus corrupti laboriosam harum quaerat alias quos
              incidunt a, debitis nam officiis laudantium consectetur
              repudiandae tempore. Culpa repellat cumque nihil.
            </div>
            <div className="list">
              <ul>
                <li>
                  <Icon className="checked-list" icon={ic_done_all} size={40} />{" "}
                  Temos planos de acordo com o tamanho do seu bolso.
                </li>
                <li>
                  <Icon className="checked-list" icon={ic_done_all} size={40} />{" "}
                  A melhor banda larga do país, está na Fulano Net.
                </li>
                <li>
                  <Icon className="checked-list" icon={ic_done_all} size={40} />{" "}
                  Internet móvel para todo o país, ligações ilimitadas.
                </li>
                <li>
                  <Icon className="checked-list" icon={ic_done_all} size={40} />{" "}
                  Qualidade de imagem nas séries e filmes.
                </li>
                <li>
                  <Icon className="checked-list" icon={ic_done_all} size={40} />{" "}
                  Nosso sinal pega até um baixo d'água, kkkkkkk.
                </li>
              </ul>
            </div>
            <button
              className="btn btn_get btn_get_two mt4 float-left"
              style={{ marginTop: "2rem", marginBottom: "6rem" }}
            >
              Saiba mais <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="col-lg-3">
            <div className="card-up" data-aos="fade-down">
              <div className="header-card">Segurança é Integridade</div>
              <div>
                <center>
                  <Icon
                    className="icons-internet"
                    icon={ic_verified_user}
                    size={80}
                  />
                </center>
              </div>
            </div>

            <div className="card-up" data-aos="fade-up">
              <div className="header-card">Chip sem Tarífas</div>
              <div>
                <center>
                  <Icon
                    className="icons-internet"
                    icon={ic_phonelink_ring}
                    size={80}
                  />
                </center>
              </div>
            </div>
          </div>
          <div className="col-lg-3" style={{ marginTop: "4rem" }}>
            <div className="card-down" data-aos="fade-down">
              <div className="header-card">Assita sem Travar</div>
              <div>
                <center>
                  <Icon
                    className="icons-internet"
                    icon={ic_desktop_windows}
                    size={80}
                  />
                </center>
              </div>
            </div>

            <div className="card-down" data-aos="fade-up">
              <div className="header-card">Conectividade Geral</div>
              <div>
                <center>
                  <Icon
                    className="icons-internet"
                    icon={ic_devices}
                    size={80}
                  />
                </center>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
