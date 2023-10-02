import React, { Component } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo2 from './images/footer-logo.png';

const Footer = () => {
    return (
        <footer>
            <section>
                <article id="doormat">
                    <div>
                        <img src={Logo2} id="footer-logo" alt="Little Lemon Restaurant" />
                    </div>
                    <div id="doormat-links">
                        <Link to='/'>Home</Link><br />
                        <Link to="#about">About</Link><br />
                        <Link to="/menu">Menu</Link><br />
                        <Link to="/booking">Reservations</Link><br />
                        <Link to="#">Order online</Link><br />
                        <Link to="#">Log in</Link><br />
                    </div>
                </article>
                <article>
                    <address>
                        <span className="material-symbols-outlined">home</span>
                        Little Lemon Restaurant<br />
                        1108 St Louis<br />
                        Chicago IL
                    </address>
                    <address>
                        <span className="material-symbols-outlined">call</span>
                        1-055-555-6969
                    </address>
                </article>
                <article>
                    <a href="https://facebook.com">
                        <p><i className="devicon-facebook-plain"></i>Facebook</p>
                    </a>
                    <a href="https://twitter.com">
                        <p><i className="devicon-twitter-original"></i>Twitter</p>
                    </a>
                    <a href="htts://react.dev">
                        <p><i className="devicon-react-original"></i>React</p>
                    </a>
                </article>
            </section>
            <section id="footer-2">
                &copy; 2023 Jeremy St. Pierre
            </section>
        </footer>
    );
}

export default Footer;