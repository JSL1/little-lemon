import React, { Component } from 'react';
import Avatar from '../images/avatar.jpg';

const Star = () => {
    return (<span className="material-symbols-outlined">stars</span>);
}

const Testimonial = (props) => {
    const review = props.review;
    let stars = [];
    for (let i = 0; i < review.rating; i++) {
        stars.push('This string represents a star');    
    }

    return (
        <div className="testimonial-card">
            <span className='review-stars'>
                {stars.map(star => (
                    <Star key={"star" + stars.indexOf(star)} />
                ))}
            </span>
            <img src={Avatar} className='avatar'/>
            <h2>{review.name}</h2>
            <p>{review.content}</p>
        </div>
    );
}

export default Testimonial;