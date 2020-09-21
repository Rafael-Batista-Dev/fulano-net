import React from "react";
import PlansMobile from "./components/PlansMobile";
import bannerMobile from "../assets/banner-mobile.jpg";

export default function Mobile() {
  return (
    <>
      <div className="container">
        <div>
          <img
            style={{ width: "100%", marginTop: "10rem" }}
            src={bannerMobile}
            alt="mobile"
          />
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="content-title">
              <h1>Cobertura nacional para você</h1>
            </div>
          </div>

          <PlansMobile />
        </div>
      </div>
    </>
  );
}
