import React from "react";
import PlansMobile from "./components/PlansMobile";

export default function Mobile() {
  return (
    <>
      <div className="container">
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
