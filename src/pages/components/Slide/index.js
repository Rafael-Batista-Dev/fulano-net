import React from "react";
import Banner01 from '../../../assets/banner01.jpg'
import Banner02 from '../../../assets/banner02.jpg'
import Banner03 from '../../../assets/banner03.jpg'
import Banner04 from '../../../assets/banner04.jpg'

const Slide = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

                <img className='banner01' style={{width:'100%', marginBottom: '20px'}} src={Banner01} alt="net"/>
      
            </div>         
            <div className="col-lg-4">
                <img className='banner02' style={{width:'100%', marginBottom: '10px'}} src={Banner02} alt="net"/>

            </div>         
            <div className="col-lg-4">
            <img className='banner03' style={{width:'100%', marginBottom: '10px'}} src={Banner03} alt="net"/>

            </div>         
            <div className="col-lg-4">
                <img className='banner04' style={{width:'100%', marginBottom: '10px'}} src={Banner04} alt="net"/>

            </div>         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
