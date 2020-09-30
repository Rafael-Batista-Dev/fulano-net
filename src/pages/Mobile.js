import React, { useEffect } from "react";
import PlansMobile from "./components/PlansMobile";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Mobile() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="content-title">
              <h1 data-aos="fade-down">Cobertura nacional para você</h1>
            </div>
          </div>

          <PlansMobile />
        </div>
      </div>
    </>
  );
}
