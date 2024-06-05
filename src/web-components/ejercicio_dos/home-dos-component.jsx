import React, { createElement, useState } from "react";

export const ImageGallery = () => {
  const [imgUrl, setImgUrl] = useState("");
  const urls = [
    "../../../public/obesidad1.png",
    "../../../public/obesidad2.png",
    "../../../public/obesidad3.png",
    "../../../public/obesidad1.png",
    "../../../public/obesidad2.png",
    "../../../public/obesidad3.png",
  ];

  const direccion = document.querySelector(".container-gallery");

  function imgs() {
    urls.forEach((url) => {
      setImgUrl(url);
      const imgCreada = document.createElement("img");
      console.log(imgCreada);
    });
  }

  return (
    <>
      <div className="container-gallery" onClick={imgs}>
        Hola
      </div>
    </>
  );
};
