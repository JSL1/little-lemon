import React, { useState, Component, useEffect } from 'react';
import { submitAPI, fetchAPI } from './api/api';
import { useNavigate } from 'react-router-dom';
import './css/BookingForm.css';

const BookingForm = (props) => {
    const times = props.times;
    const navigate = useNavigate();
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formValues, setFormValues] = useState(
        {
            resDate: new Date(),
            resTime: '17:00',
            guests: 1,
            occasion: '',
        }
    );
    
    const handleChange = (e) => {
        setFormValues({
            ...formValues, 
            [e.target.name]: e.target.value,
        });
        props.updateFunc(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (submitAPI(formValues) === true) {
            console.log('form successfully submitted, returning to homepage');
            setFormSubmitted(true);
        }
    } 
    
    useEffect(() => {
        if (formSubmitted) {
            navigate('../BookingSuccess');
        }
    }, [formSubmitted]);

    return (
        <>
        <form id="booking-form" onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" name="resDate" onChange={handleChange}/>
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" name="resTime">
                {times.map(time => (
                    <option key={times.indexOf(time)}>{time}</option>
                ))}
            </select>
            <label htmlFor="guests">Number of Guests</label>
            <input type="number" placeholder='1' min='1' max='10' id="guests" name="guests" />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" name="occasion">
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make your reservation" />
        </form>
        </>
    )
}

export default BookingForm;