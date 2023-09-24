import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <ul className="Navbar">
                <li className="card-title">
                    <Link to="/">Home</Link>
                </li>
                <li className="card-title">
                    <Link to="#about">About</Link>
                </li>
                <li className="card-title">
                    <Link to="/menu">Menu</Link>
                </li>
                <li className="card-title">
                    <Link to="/booking">Reservations</Link>
                </li>
                <li className="card-title">
                    <Link to="#">Order online</Link>
                </li>
                <li className="card-title">
                    <Link to="#">Log in</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;