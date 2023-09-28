import React, { useState, useReducer, Component, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Waiter from './images/restauranfood.jpg';
import imgGreekSalad from './images/greek salad.jpg';
import imgBruschetta from './images/bruchetta.svg';
import imgLemoncello from './images/lemon dessert.jpg';
import RestaurantPic from './images/restaurant.jpg';
import MarioPic from './images/restaurant chef B.jpg';
import BookingPage from "./BookingPage";
import SpecialCard from "./subcomponents/SpecialCard";
import Testimonial from "./subcomponents/Testimonial";
import './css/image-stack.css';
import ConfirmedBooking from "./ConfirmedBooking";
import FailedBooking from './FailedBooking';
import './css/ConfirmedBooking.css';

const specials = [
    {
        title: 'Greek Salad',
        image: imgGreekSalad,
        price: 12.99,
        description: 'Our famous original greek salad. Tomatoes, onions, peppers and our house made feta.',
    },{
        title: 'Bruschetta',
        image: imgBruschetta,
        price: 12.99,
        description: 'Vineripe tomatoes with garlic and italian parsley, served on our famous italian bread with extra virgin olive oil.',
    }, {
        title: 'Lemoncello Cake',
        image: imgLemoncello,
        price: 8.49,
        description: 'This comes straight from Grandma\'s recipe book. Fresh lemons and italian tradition.',
    },
];

const testimonials = [
    {
        name: 'Greg',
        rating: 3,
        content: 'I love the lemoncello cake!'
    },{
        name: 'Jean',
        rating: 4, 
        content: 'Amazing food and fast deliver!',
    },{
        name: 'Melina',
        rating: 3,
        content: 'We loved ourd dinner and the cappucino was great!'
    },
];


const Homepage = (props) => {

    const [renderSuccessMessage, setRenderSuccessMessage] = useState(props.booking);
    const [renderFailureMessage, setRenderFailureMessage] = useState(props.failure);
    
    const hideMessage = () => {
        setRenderFailureMessage(false);
        setRenderSuccessMessage(false);
    }

    return (
        <main>
            <section id="hero">
                <article id="hero-body">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <h3>We are a family-owned mediterranean restaurant  located in the heart of Chicago, IL. We focus on traditional recipes with a modern twist.</h3>
                    <button>Reserve a Table</button>
                </article>
                <article id="hero-image">
                    <img src={Waiter} alt="Little lemon server presenting an appetizer" />
                </article>
            </section>
            {renderSuccessMessage && <ConfirmedBooking func={hideMessage} />}
            {renderFailureMessage && <FailedBooking func={hideMessage} />}
            <section id="specials">
                <article id="specials-header">
                    <h1>This Week's Specials</h1>
                    <button>Online Menu</button>
                </article>
                <article id="specials-body">
                    <article id="specials-cards">
                        {specials.map(special => (
                            <SpecialCard key={specials.indexOf(special)} menuItem={special} />
                        ))}
                    </article>
                </article>
            </section>
            <section id="testimonials">
                <article id="testimonials-header">
                    <h1>Testimonials</h1>
                </article>
                <article id="testimonials-body">
                    {testimonials.map(testimonial => (
                        <Testimonial key={testimonials.indexOf(testimonial)} review={testimonial} />
                    ))}
                </article>
            </section>
            <section id="about">
                <article id="about-text">
                    <h1>Our story</h1>
                    <p>
                        Little Lemon was founded in 1985 by Luigi Mario and Mario Mario. Bringing authentic italian food to Chicago. 
                        Today, we are still 100% family owned and located in the heart of Chicago, IL. We focus on traditional recipes with a modern twist.
                    </p>
                </article>
                <article id="about-images">
                    <div className="image-stack">
                        <div className="image-stack__item image-stack__item--top">
                            <img src={MarioPic} alt="Mario seasoning some stuff" />
                        </div>
                        <div className="image-stack__item image-stack__item--bottom">
                            <img src={RestaurantPic} alt="Little Lemon interior" />
                        </div>
                    </div>
                </article>
            </section>
        </main>
    );
}

export default Homepage;