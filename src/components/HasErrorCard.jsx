import React, { useState } from "react";
import "../Style/HasErrorCard.css";

const HasErrorCard = () => {
  const [language, setLanguage] = useState("english");
  const [showEnglish, setShowEnglish] = useState(true);
  const [showSpanish, setShowSpanish] = useState(false);

  const handleTranslate = () => {
    setLanguage(language === "english" ? "spanish" : "english");
    setShowEnglish(language === "spanish");
    setShowSpanish(language === "english");
  };
  return (
    <div>
      <article className="tittle__error article">
        <h2
          className="tittle__error--english"
          style={{ display: showEnglish ? "block" : "none" }}
        >
          Invalid value, a number between 1 and 126 must be entered
        </h2>
        <h2
          className="tittle__error--spanish"
          style={{ display: showSpanish ? "block" : "none" }}
        >
          Valor invalido se debe ingresar un numero entre 1 y 126
        </h2>
        <button onClick={handleTranslate} className="tittle__error--btn">
          {language === "english" ? "Traducir" : "Translate"}
        </button>
      </article>
      <div className="tittle__error--divImg article">
        <img
          className="tittle__error--img"
          src="../error.gif"
          alt="img-error"
        />
      </div>
    </div>
  );
};

export default HasErrorCard;
