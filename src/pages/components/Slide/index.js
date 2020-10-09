import React from "react";

const Slide = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12" style={{background: "black", height: "350px"}}></div>         
            <div className="col-lg-4" style={{background: "red", height: "200px"}}></div>         
            <div className="col-lg-4" style={{background: "black", height: "200px"}}></div>         
            <div className="col-lg-4" style={{background: "red", height: "200px"}}></div>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
