import React from "react";
import { NavLink } from "react-router-dom";
import img from "../images/rainy.png"

export default function NavBar(){
    return (
       <nav>
        {/* <img src={img} alt=""/> */}
       <NavLink className="nav--logo-div" to="/"><img src={img} alt=""/> <h3>CitySky</h3></NavLink>
       <NavLink className="nav--nav-link" to="/">Home</NavLink>
       <NavLink className="nav--nav-link" to="/City">City</NavLink>
       
        {/* <h3><a href="/">CitySky</a></h3>
        <h4><a href="/">Home</a></h4>
        <h4><a href="/City">City</a></h4> */}
       </nav>
    )
}