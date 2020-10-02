import React, { useEffect } from "react";
import { Icon } from "react-icons-kit";
import { ic_cast_connected } from "react-icons-kit/md/ic_cast_connected";
import { amazon } from "react-icons-kit/fa/amazon";
import { youtube } from "react-icons-kit/fa/youtube";
import { twitch } from "react-icons-kit/fa/twitch";
import { imdb } from "react-icons-kit/fa/imdb";

import Aos from "aos";
import "aos/dist/aos.css";

const Plans = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div
        className="content"
        style={{
          marginBottom: "4rem",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="content-description-tv ">
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

            <div className="col-12">
              <h4>hello world</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
