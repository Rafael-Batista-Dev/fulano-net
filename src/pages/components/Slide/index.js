import React from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  /*
  
  {
    original:
      "https://www.brisanet.com.br/assets/brisa/brisanet-telecomunicacoes.jpg",
    thumbnail: "https:",
  },
  {
    original:
      "https://brisanetcampinacom.000webhostapp.com/site/img/intro-bg/02.jpg",
    thumbnail: "https:",
  },
  */
  {
    original:
      "https://www.jotaftelecom.com.br/wp-content/uploads/2019/04/banner3.png",
    thumbnail: "https:",
  },
];

const Slide = () => {
  return (
    <div style={{ marginTop: "5rem" }}>
      <ImageGallery items={images} autoPlay={true} showThumbnails={false} />;
    </div>
  );
};

export default Slide;
