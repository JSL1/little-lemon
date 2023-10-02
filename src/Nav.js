import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="Navbar">
                <li className="card-title">
                    <Link to="/" aria-label="Click here to navigate to the homepage.">Home</Link>
                </li>
                <li className="card-title">
                    <Link to="#about" aria-label="Click here to see our story.">About</Link>
                </li>
                <li className="card-title">
                    <Link to="#" aria-label="Click here to view our menu.">Menu</Link>
                </li>
                <li className="card-title">
                    <Link to="/booking" aria-label="Click here to reserve a table.">Reservations</Link>
                </li>
                <li className="card-title">
                    <Link to="#" aria-label="Click here to order online.">Order online</Link>
                </li>
                <li className="card-title">
                    <Link to="#" aria-label="Click here to log in.">Log in</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;