import React, { useEffect } from "react";
import { Icon } from 'react-icons-kit'
import {ic_cast_connected} from 'react-icons-kit/md/ic_cast_connected'
import {amazon} from 'react-icons-kit/fa/amazon'
import {youtube} from 'react-icons-kit/fa/youtube'
import {imdb} from 'react-icons-kit/fa/imdb'



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
            <div className="col-4">
              <div id="accordion">
                <div className="card">
                  <div className="card-header btn_get_two" id="headingOne">
                    <p className="mb-0">
                      <button
                        className="btn"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        Collapsible Group Item #1
                      </button>
                    </p>
                  </div>

                  <div
                    id="collapseOne"
                    className="collapse show"
                    aria-labelledby="headingOne"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod.
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header btn_get_two" id="headingTwo">
                    <p className="mb-0">
                      <button
                        className="btn collapsed"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        Collapsible Group Item #2
                      </button>
                    </p>
                  </div>
                  <div
                    id="collapseTwo"
                    className="collapse"
                    aria-labelledby="headingTwo"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod..
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header btn_get_two" id="headingThree">
                    <p className="mb-0">
                      <button
                        className="btn collapsed"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Collapsible Group Item #3
                      </button>
                    </p>
                  </div>
                  <div
                    id="collapseThree"
                    className="collapse"
                    aria-labelledby="headingThree"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch.
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-down" style={{ marginTop: "4.5rem" }}>
                    <div className='card-body-tv'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam quis sapiente et, est at tenetur neque? Ducimus ea
                        accusantium eaque illo. Nam expedita alias ratione assumenda
                        a temporibus tenetur iste?
                        </p>
                    </div>
                    <div class="line-vertical"></div>
                    <div className='float-rigth' >
                        <Icon className="checked-list" icon={imdb} size={60} />
                    </div>
              </div>
            </div>
            <div className="col-lg-8">
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

              <div className="col-lg-12" style={{ marginTop: "2rem" }}>
                <div className="card-down">
                    <div className='card-body-tv'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam quis sapiente et, est at tenetur neque? Ducimus ea
                        accusantium eaque illo. Nam expedita alias ratione assumenda
                        a temporibus tenetur iste?
                        </p>
                    </div>
                    <div class="line-vertical"></div>
                    <div className='float-rigth' >
                        <Icon className="checked-list" icon={ic_cast_connected} size={60} />
                    </div>
                </div>
              </div>

              <div className="col-lg-12" style={{ marginTop: "2rem" }}>
                <div className="card-down">
                    <div className='card-body-tv'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam quis sapiente et, est at tenetur neque? Ducimus ea
                        accusantium eaque illo. Nam expedita alias ratione assumenda
                        a temporibus tenetur iste?
                        </p>
                    </div>
                    <div class="line-vertical"></div>
                    <div className='float-rigth' >
                        <Icon className="checked-list" icon={amazon} size={60} />
                    </div>
                </div>
              </div>

              <div className="col-lg-12" style={{ marginTop: "2rem" }}>
                <div className="card-down">
                    <div className='card-body-tv'>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aliquam quis sapiente et, est at tenetur neque? Ducimus ea
                        accusantium eaque illo. Nam expedita alias ratione assumenda
                        a temporibus tenetur iste?
                        </p>
                    </div>
                    <div class="line-vertical"></div>
                    <div className='float-rigth' >
                        <Icon className="checked-list" icon={youtube} size={60} />
                    </div>
                </div>
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
