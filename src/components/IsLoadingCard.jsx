import React from "react";
import "../Style/IsLoadingCard.css";

const IsLoadingCard = () => {
  return (
    <div className="isloading">
      <p className="isloading__title">Cargando...</p>
      <div className="isloading__divImg">
        <img
          className="isloading__img"
          src="../rick-and-morty-gif.gif"
          alt="img de carga"
        />
      </div>
    </div>
  );
};

export default IsLoadingCard;
