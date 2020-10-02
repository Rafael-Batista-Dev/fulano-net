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
              <div
                className="content-description-tv "
                style={{ marginBottom: "4rem" }}
              >
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

            <div className="col-lg-6 mbr-col-md-10">
              <div className="wrap">
                <div className="text-wrap vcenter">
                  <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                    Amazon <span>prime video</span>
                  </h2>
                  <p className="mbr-fonts-style text1 mbr-text display-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <div className="ico-wrap">
                  <Icon className="checked-list" icon={amazon} size={60} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mbr-col-md-10">
              <div className="wrap">
                <div className="text-wrap vcenter">
                  <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                    You tube
                    <span> séries & filmes</span>
                  </h2>
                  <p className="mbr-fonts-style text1 mbr-text display-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <div className="ico-wrap">
                  <Icon className="checked-list" icon={youtube} size={60} />
                </div>
              </div>
            </div>
            <div class="col-lg-6 mbr-col-md-10">
              <div class="wrap">
                <div class="text-wrap vcenter">
                  <h2 class="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                    IMDB
                    <span> todos os score</span>
                  </h2>
                  <p class="mbr-fonts-style text1 mbr-text display-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <div class="ico-wrap">
                  <Icon className="checked-list" icon={imdb} size={60} />
                </div>
              </div>
            </div>
            <div class="col-lg-6 mbr-col-md-10">
              <div class="wrap">
                <div class="text-wrap vcenter">
                  <h2 class="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                    Twitch TV <span> lives videos</span>
                  </h2>
                  <p class="mbr-fonts-style text1 mbr-text display-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <div class="ico-wrap">
                  <Icon className="checked-list" icon={twitch} size={60} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
