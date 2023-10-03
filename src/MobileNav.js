import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";

const MobileNav = (props) => {
    return (
        <nav>
            <ul className="MobileNav">
                <div id="nav-x-button">
                    <a onClick={props.func}>
                        <span class="material-symbols-outlined">close</span>
                    </a>
                </div>
                <div>
                    <li className="card-title">
                        <Link to="/" aria-label="Click here to navigate to the homepage.">Home</Link>
                    </li>
                </div>
                <div>
                    <li className="card-title">
                        <Link to="#about" aria-label="Click here to see our story.">About</Link>
                    </li>
                </div>
                <div>
                    <li className="card-title">
                        <Link to="#" aria-label="Click here to view our menu.">Menu</Link>
                    </li>
                </div>
                <div>
                    <li className="card-title">
                        <Link to="/booking" aria-label="Click here to reserve a table.">Reservations</Link>
                    </li>
                </div>
                <div>
                    <li className="card-title">
                        <Link to="#" aria-label="Click here to order online.">Order online</Link>
                    </li>
                </div>
                <div>
                    <li className="card-title">
                        <Link to="#" aria-label="Click here to log in.">Log in</Link>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default MobileNav;