import React, { useEffect } from "react";
import PlansTv from "./components/PlansTv";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Tv() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="content" style={{ background: "#FFF" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-title">
                <h1 data-aos="fade-down">Toda a emoção da TV</h1>
              </div>
            </div>

            <PlansTv />
          </div>
        </div>
      </div>
    </>
  );
}
