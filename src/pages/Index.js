import React, { Component } from "react";

import Slide from "./components/Slide";
import Plans from "./components/Plans";

export default class Index extends Component {
  render() {
    return (
      <>
        <Slide />
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Index</h1>
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
          </div>
        </div>
        <br />
        <Plans />
      </>
    );
  }
}
