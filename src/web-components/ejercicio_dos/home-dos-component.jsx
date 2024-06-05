import React, { useEffect, useRef } from "react";

export const ImageGallery = () => {
  const urls = [
    "../../../public/obesidad1.png",
    "../../../public/obesidad2.png",
    "../../../public/obesidad3.png",
    "../../../public/obesidad1.png",
    "../../../public/obesidad2.png",
    "../../../public/obesidad3.png",
  ];

  const pase = useRef(false);

  function imgs() {
    urls.forEach((url) => {
      const imgCreada = document.createElement("img");
      imgCreada.src = url;
      imgCreada.id = Date.now();
      const dir = document.querySelector(".container-gallery");
      dir.append(imgCreada);
    });
  }

  function grande() {
    console.log("entre");
  }

  useEffect(() => {
    if (!pase.current) {
      imgs();
      pase.current = true;
    }
  }, []);

  return (
    <>
      <div
        onClick={() => {
          grande;
        }}
        className="container-gallery"
      ></div>
    </>
  );
};
