import React, { useEffect } from "react";
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
          <div className="row"></div>
        </div>
      </div>
    </>
  );
};

export default Plans;
