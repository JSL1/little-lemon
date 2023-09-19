import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="Navbar">
                <li className="Navitem">Home</li>
                <li className="Navitem">About</li>
                <li className="Navitem">Menu</li>
                <li className="Navitem">Reservations</li>
                <li className="Navitem">Order online</li>
                <li className="Navitem">Log in</li>
            </ul>
        </nav>
    );
}

export default Nav;