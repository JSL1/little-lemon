import React, { Component } from "react";
import Logo from './images/Logo.svg';
import Nav from "./Nav";

const Header = () => {
    return (
    <header>
        <img src={Logo} alt="Little Lemon" id="logo-top" />
        <Nav />
    </header>
    );
}

export default Header;