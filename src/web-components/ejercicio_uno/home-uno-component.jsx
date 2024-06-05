import React, { useState } from "react";

export const HomeUnoComponent = () => {
  const [imgUrl, setImgUrl] = useState("");
  const [IMC, setIMC] = useState("Ingresa datos primero 😢");

  function calcular(peso, altura) {
    console.log(peso, altura);
    let imc = peso / (altura * 2);
    console.log(imc);
    if (imc >= 18.5 && imc <= 24.9) {
      setImgUrl("../../../public/peso-normal.png");
      setIMC("Peso Normal");
    } else if (imc >= 25 && imc <= 29.9) {
      setImgUrl("../../../public/sobre-peso.png");
      setIMC("Sobre Peso");
    } else if (imc >= 30 && imc <= 34.9) {
      setImgUrl("../../../public/obesidad1.png");
      setIMC("Obesidad 1");
    } else if (imc >= 35 && imc <= 39.9) {
      setImgUrl("../../../public/obesidad2.png");
      setIMC("Obesidad 2");
    } else if (imc >= 40) {
      setImgUrl("../../../public/obesidad3.png");
      setIMC("Obesidad 3");
    }
  }
  return (
    <>
      <div className="container-imc">
        <div className="options-imc">
          <label htmlFor="peso">Ingrese peso</label>
          <label htmlFor="altura">Ingrese Altura</label>
          <input type="Number" name="peso" id="peso" />
          <input type="Number" name="altura" id="altura" />
        </div>
        <div className="resultados">
          <p className="resultados-text">{IMC}</p>
          <img src={imgUrl} alt="" className="resultados-img" />
        </div>
        <span
          className="calcular"
          onClick={() => {
            calcular(parseFloat(peso.value), parseFloat(altura.value));
          }}
        >
          Calcular
        </span>
      </div>
    </>
  );
};
