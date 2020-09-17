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
      "https://images.even3.com.br/qwTvVtfvc8tAdLO-hCW214YXEVs=/1300x536/smart/even3.blob.core.windows.net/banner/Atendimento.0b7e2fcbb9ec4d4c8e7b.jpg",
    thumbnail: "https:",
  },
];

const Slide = () => {
  return (
    <>
      <ImageGallery items={images} autoPlay={true} showThumbnails={false} />;
    </>
  );
};

export default Slide;
