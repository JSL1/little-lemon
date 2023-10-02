import React, { useState, Component, useEffect } from 'react';
import { submitAPI, fetchAPI } from './api/api';
import { useNavigate } from 'react-router-dom';
import './css/BookingForm.css';
import Pizza from './images/pizza.jpeg';
import { userSchema } from './validation/FormValidation';

const FormError = (props) => {
    return (
        <div id="form-errors">
            {props.message}
        </div>
    );
}

const BookingForm = (props) => {
    const times = props.times;
    const navigate = useNavigate();
    const [formTouched, setFormTouched] = useState(false);
    const [formError, setFormError] = useState('');
    const [formIsValid, setFormIsValid] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formValues, setFormValues] = useState(
        {
            resFirstName: '',
            resLastName: '',
            resEmail: '',
            resPhone: '',
            resDate: new Date(),
            resTime: '17:00',
            guests: 1,
            occasion: '',
        }
    );

    const handleChange = async (e) => {
        setFormTouched(true);
        setFormValues({
            ...formValues, 
            [e.target.name]: e.target.value,
        });
        userSchema.validate({...formValues }).catch((err) => {
            console.log(err.name);
            console.log(err.errors);
            setFormError(err.errors);
        });
        const isValid = await userSchema.isValid(formValues);
        if (isValid) { 
            setFormIsValid(true); 
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isPosted = await submitAPI(formValues);
        console.log(formValues);
        if (isPosted && formIsValid) {
            console.log('form successfully submitted, returning to homepage');
            setFormSubmitted(true);
        }
    } 
    
    useEffect(() => {
        if (formSubmitted) {
            navigate('../BookingSuccess#hero');
        }
    }, [formSubmitted]);

    return (
        <>
        <main id="main">
            <article id="form-hero">
                <div className="cover">
                    <h1>Book Your Table</h1>
                    <h2>-<span className="material-symbols-outlined">menu_book</span>-</h2>
                </div>
            </article>
            <article id="form-container">
                <form id="booking-form" onSubmit={handleSubmit}>
                    <label htmlFor="resFirstName">Your name</label>
                    <input type='text' name='resFirstName' id='resFirstName' placeholder='First Name' minLength='2' onChange={handleChange} required />
                    <label htmlFor="resLastName">Last Name</label>
                    <input type='text' name='resLastName' id='resLastName' placeholder='Last Name' minLength='2' onChange={handleChange} required />
                    <label htmlFor='resEmail'>Email Address</label>
                    <input type='email' name='resEmail' id='resEmail' placeholder='johndoe@email.com' onChange={handleChange} required />
                    <label htmlFor='resPhone'>Phone</label>
                    <input type="phone" name="resPhone" id="resPhone" onChange={handleChange} placeholder="5555555555" required />
                    <label htmlFor="resDate">Choose date</label>
                    <input type="date" id="resDate" name="resDate" onChange={(e) => {
                        setFormValues({
                            ...formValues, 
                            [e.target.name]: e.target.value,
                        });
                        props.updateFunc(e.target.value);
                    }} required  title="Please select a date." />
                    <label htmlFor="resTime">Choose time</label>
                    <select id="resTime" name="resTime" onChange={handleChange} required title="Please select a time.">
                        {times.map(time => (
                            <option key={times.indexOf(time)}>{time}</option>
                        ))}
                    </select>
                    <label htmlFor="guests">Number of Guests</label>
                    <input type="number" placeholder='1' min='1' max='10' id="guests" name="guests" required onChange={handleChange} />
                    <label htmlFor="occasion">Occasion</label>
                    <select id="occasion" name="occasion" required>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                    </select>
                    {!formIsValid && <FormError message={formError} /> }
                    <input type="submit" id="submit" value="Make your reservation" disabled={!formIsValid} 
                        aria-label='On Click, Submits the resrvation form' />
                </form>
            </article>
        </main>
        </>
    )
}

export default BookingForm;