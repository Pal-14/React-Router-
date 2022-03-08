import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div className="nfContainer">
      <h1 className="nfTitle">
        Erreur la page demandée n'est pas accessible où ne fait pas partie de
        notre site.
      </h1>

      <button className="nfBtn" onClick={() => navigate("/")}>
        Retourner à l'accueil
      </button>
    </div>
  );
}
