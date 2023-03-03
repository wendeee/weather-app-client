import React from "react";
import { NavLink } from "react-router-dom";
import img from "../images/rainy.png"

export default function NavBar(){
    return (
       <nav>
       <NavLink className="nav--logo-div" to="/"><img src={img} alt=""/> <h3>CitySky</h3></NavLink>
       <NavLink className="nav--nav-link" to="/">Home</NavLink>
       <NavLink className="nav--nav-link" to="/City">City</NavLink>   
       </nav>
    )
}