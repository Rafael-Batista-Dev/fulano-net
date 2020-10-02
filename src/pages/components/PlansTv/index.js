import React, { useEffect } from "react";
import { Icon } from "react-icons-kit";
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
                <h3>Streaming e live</h3>
                <hr />
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
                  <Icon icon={amazon} size={60} />
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
                  <Icon icon={youtube} size={60} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mbr-col-md-10">
              <div className="wrap">
                <div className="text-wrap vcenter">
                  <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                    IMDB
                    <span> todos os score</span>
                  </h2>
                  <p className="mbr-fonts-style text1 mbr-text display-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <div className="ico-wrap">
                  <Icon icon={imdb} size={60} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mbr-col-md-10">
              <div className="wrap">
                <div className="text-wrap vcenter">
                  <h2 className="mbr-fonts-style mbr-bold mbr-section-title3 display-5">
                    Twitch TV <span> lives videos</span>
                  </h2>
                  <p className="mbr-fonts-style text1 mbr-text display-6">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum
                  </p>
                </div>
                <div className="ico-wrap">
                  <Icon icon={twitch} size={60} />
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
