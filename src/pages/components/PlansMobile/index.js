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
            <div className="col-lg-3">
              <div className="card-up">
                <div className="header-card">Fale com um especialista</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam quis sapiente et, est at tenetur neque? Ducimus ea
                  accusantium eaque illo. Nam expedita alias ratione assumenda a
                  temporibus tenetur iste?
                </p>
              </div>
            </div>
            <div className="col-lg-3" style={{ marginTop: "6rem" }}>
              <div className="card-down">
                <div className="header-card">Fale com um especialista</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam quis sapiente et, est at tenetur neque? Ducimus ea
                  accusantium eaque illo. Nam expedita alias ratione assumenda a
                  temporibus tenetur iste?
                </p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="card-up">
                <div className="header-card">Fale com um especialista</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam quis sapiente et, est at tenetur neque? Ducimus ea
                  accusantium eaque illo. Nam expedita alias ratione assumenda a
                  temporibus tenetur iste?
                </p>
              </div>
            </div>
            <div className="col-lg-3" style={{ marginTop: "6rem" }}>
              <div className="card-down">
                <div className="header-card">Fale com um especialista</div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aliquam quis sapiente et, est at tenetur neque? Ducimus ea
                  accusantium eaque illo. Nam expedita alias ratione assumenda a
                  temporibus tenetur iste?
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="content-description-mobile">
                <h3>Hello world</h3>
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
