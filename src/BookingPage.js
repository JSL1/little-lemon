import React, { useState, Component } from "react";
import BookingForm from "./BookingForm";
import ConfirmedBooking from "./ConfirmedBooking";
const BookingPage = (props) => {
    const availableTimes = props.times;
    return (
        <>
            <BookingForm times={availableTimes} date={props.date} updateFunc={props.updateFunc}/>           
        </>
    )
}

export default BookingPage;