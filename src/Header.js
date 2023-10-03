import React, { Component } from "react";
import Logo from './images/Logo.svg';
import Nav from "./Nav";
import { useState } from "react";
import MobileNav from "./MobileNav";

const Header = () => {

    const [showMobileNav, setShowMobileNav] = useState(false);

    const showHide = () => {
        setShowMobileNav(!showMobileNav);
    }

    return (
    <header>
        <div>
          <img src={Logo} alt="Little Lemon" id="logo-top" />
        </div>
        <Nav />
        <div id="hamburger-icon" onClick={showHide}>
            <span className="material-symbols-outlined">menu</span>
        </div>
        {showMobileNav ? <MobileNav func={showHide} /> : '' }
    </header>
    );
}

export default Header;