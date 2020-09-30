import React from "react";
import { Icon } from "react-icons-kit";
import { ic_done_all } from "react-icons-kit/md/ic_done_all";

export default function Internet() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-title">
              <h1>Internet para todos os gostos</h1>
            </div>
          </div>
          <div className="col-lg-6">
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
                  <Icon className="checked-list" icon={ic_done_all} size={40} /> Teste de
                  velocidade
                </li>
                <li>
                  <Icon className="checked-list" icon={ic_done_all} size={40} /> Teste de
                  velocidade
                </li>
                <li>
                  <Icon className="checked-list" icon={ic_done_all} size={40} /> Teste de
                  velocidade
                </li>
                <li>
                  <Icon className="checked-list" icon={ic_done_all} size={40} /> Teste de
                  velocidade
                </li>
                <li>
                  <Icon className="checked-list" icon={ic_done_all} size={40} /> Teste de
                  velocidade
                </li>
              </ul>
            </div>
            <button
              className="btn btn_get btn_get_two mt4 float-left"
              style={{ marginTop: "4rem" }}
            >
              Saiba mais <i className="fa fa-arrow-right"></i>
            </button>
          </div>
          <div className="col-lg-3">
            <div className="card-up">
                <div className="header-card">Fale com um especialista</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                quis sapiente et, est at tenetur neque? Ducimus ea accusantium
                eaque illo. Nam expedita alias ratione assumenda a temporibus
                tenetur iste?
              </p>
            </div>

            <div className="card-up">
                <div className="header-card">Fale com um especialista</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                quis sapiente et, est at tenetur neque? Ducimus ea accusantium
                eaque illo. Nam expedita alias ratione assumenda a temporibus
                tenetur iste?
              </p>
            </div>
          </div>
          <div className="col-lg-3" style={{ marginTop: "6rem" }}>
            <div className="card-down">
              <div className="header-card">Fale com um especialista</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                quis sapiente et, est at tenetur neque? Ducimus ea accusantium
                eaque illo. Nam expedita alias ratione assumenda a temporibus
                tenetur iste?
              </p>
            </div>

            <div className="card-down">
              <div className="header-card">Fale com um especialista</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
                quis sapiente et, est at tenetur neque? Ducimus ea accusantium
                eaque illo. Nam expedita alias ratione assumenda a temporibus
                tenetur iste?
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
