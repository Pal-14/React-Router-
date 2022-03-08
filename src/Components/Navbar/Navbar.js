import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav>
        <NavLink 
        to="/"
        // style={({isActive})=> {
        //    return isActive ? {color: 'red'} : {color: 'green'}
        // }}

        className={({isActive})=> isActive ? 'activeLink' : ""}
        >Accueil</NavLink>

        <NavLink to="/services"
         className={({isActive})=> {
            return isActive ? 'activeLink' : ""
         }}
        >Services</NavLink>

        <NavLink 
        to="/contact"
        className={({isActive})=> {
            return isActive ? 'activeLink' : ""
         }}
        >Contact</NavLink>
    </nav>
  )
}
