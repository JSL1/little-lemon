import React, { Component } from 'react';
import './css/ConfirmedBooking.css';
import Logo from './images/Logo.svg';

const ConfirmedBooking = (props) => {
    return (
        <article id="booking-confirmed">
            <div>
                <img src={Logo} />
                <button className='x-button' onClick={props.func}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            <h1>Your booking has been confirmed.</h1>
            <h2>Thank you for choosing Little Lemon.</h2>
            <p>We can't wait to see you soon!</p>
        </article>
    );
}

export default ConfirmedBooking;