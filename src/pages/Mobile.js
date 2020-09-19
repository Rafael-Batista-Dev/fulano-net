import React from "react";
import PlansMobile from "./components/PlansMobile";
import bannerMobile from "../assets/banner-mobile.png";

export default function Mobile() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Cobertura nacional para você</h1>
          </div>
          <div className="col-lg-12">
            <img
              style={{ width: "100%", marginBottom: "4rem" }}
              src={bannerMobile}
              alt="mobile"
            />
          </div>
          <div className="col-lg-6 col-md-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              accusantium ratione distinctio molestiae hic quos non voluptas,
              consequatur voluptatum dolorum omnis dolore eligendi modi quae
              ullam error. Cumque, similique alias?
            </p>
          </div>
          <div className="col-lg-6 col-md-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              accusantium ratione distinctio molestiae hic quos non voluptas,
              consequatur voluptatum dolorum omnis dolore eligendi modi quae
              ullam error. Cumque, similique alias?
            </p>
          </div>
          <PlansMobile />
        </div>
      </div>
    </>
  );
}
