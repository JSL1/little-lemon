import React, { Component } from 'react';
import './css/ConfirmedBooking.css';
import Logo from './images/Logo.svg';

const FailedBooking = (props) => {
    return (
        <article id="booking-failed">
            <div>
                <img src={Logo} />
                <button className='x-button-f' onClick={props.func}>
                    <span className="material-symbols-outlined">close</span>
                </button>
            </div>
            <h1>Something went wrong.</h1>
            <h2>We didn't get your booking.</h2>
            <p>Try us over the phone, 555-6911</p>
        </article>
    );
}

export default FailedBooking;