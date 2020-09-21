import React from "react";
import Plans from "./components/Plans";
import bannerInternet from "../assets/banner-internet.jpg";

export default function Internet() {
  return (
    <>
      <div className="content">
        <div style={{ marginTop: "5rem" }}>
          <img style={{ width: "100%" }} src={bannerInternet} alt="mobile" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-title">
              <h1>Melhores opções de planos</h1>
            </div>
          </div>
          <Plans />
        </div>
      </div>
    </>
  );
}
