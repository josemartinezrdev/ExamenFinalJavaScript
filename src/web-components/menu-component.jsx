// import React from "react";
import { useState } from "react";
import { HomeUnoComponent } from "./ejercicio_uno/home-uno-component";
import { ImageGallery } from "./ejercicio_dos/home-dos-component";

export const MenuComponent = () => {
  const [id, setId] = useState(0);

  switch (id) {
    case 1:
      return <HomeUnoComponent />;
    case 2:
      return <ImageGallery />;
    default:
      console.log("Nada");
  }

  return (
    <>
      <div className="menu-conatiner">
        <h1>Menu</h1>
        <div className="options">
          <ul>
            <li onClick={() => setId(1)}>Ejercicio 1</li>
            <li onClick={() => setId(2)}>Ejercicio 2</li>
            <li onClick={() => setId(3)}>Ejercicio 3</li>
            <li onClick={() => setId(4)}>Ejercicio 4</li>
          </ul>
        </div>
      </div>
    </>
  );
};
