import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

const Meet = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div
      className="content"
      style={{ background: "#FFF", marginTop: "-1.5rem" }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 style={{ marginTop: "4rem" }}>Index</h1>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-right">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              accusantium ratione distinctio molestiae hic quos non voluptas,
              consequatur voluptatum dolorum omnis dolore eligendi modi quae
              ullam error. Cumque, similique alias?
            </p>
          </div>
          <div className="col-lg-6 col-md-6" data-aos="fade-left">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
              accusantium ratione distinctio molestiae hic quos non voluptas,
              consequatur voluptatum dolorum omnis dolore eligendi modi quae
              ullam error. Cumque, similique alias?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Meet;
