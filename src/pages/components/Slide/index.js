import React from "react";
import Banner01 from '../../../assets/banner-01.jpg'

const Slide = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

                <img className='banner01' style={{width:'100%', marginBottom: '20px'}} src={Banner01} alt="net"/>
      
            </div>         
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
