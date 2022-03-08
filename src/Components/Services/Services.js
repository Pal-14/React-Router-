import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Services() {
  return (
    <>
      <h1>Services</h1>

      <nav>
        <NavLink
         className={({isActive})=> isActive ? 'activeLink' : ""}
        to="/services/developpement">Développement</NavLink
        
        >
        <NavLink
         className={({isActive})=> isActive ? 'activeLink' : ""}
        to="/services/cybersecurite">CyberSécurité</NavLink
        
        >
      </nav>

      {/* pour montrer les routes imbriquées ne pas oublier de faire une sortie Outlet */}
      <Outlet />
    </>
  );
}
