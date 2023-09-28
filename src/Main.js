import React, { useState, useReducer, Component, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";

import './css/image-stack.css';
import { fetchAPI, submitAPI } from "./api/api";

function reducer(state, action) {
    switch (action.type) {
        case 'remove_time':
            const index = state.times.indexOf(action.payload);
            const newTimes = state.availableTimes;
            newTimes.splice(index, 1);
            return { ...state, availableTimes: newTimes };
        case 'initialize_times':
            return { ...state, availableTimes: fetchAPI(new Date())};
        case 'update_times':
            return { ...state, date: action.payload, availableTimes: fetchAPI(action.payload) };
        default:
            throw new Error();
    }
}

const Main = () => {
    const today = new Date();
    const [state, dispatch] = useReducer(reducer, {
        date: today,
        availableTimes: fetchAPI(new Date()),
    });

    const getAvailableTimes = () => {
        let times = fetchAPI(state.date);
        console.log(times);
    }

    /*useEffect(() => {
        console.log('state date: ' + state.date);
        console.log('state times: ' + state.availableTimes);
    }, [state]);*/

    function initializeTimes() {
        dispatch({ type: 'initialize_times' });
    }

    function updateTimes(date) {
        dispatch({type: 'update_times', payload: date});
    }
    
    
    return (
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/BookingSuccess' element={<Homepage booking={true} />} />
            <Route path='/BookingFailure' element={<Homepage failure={true} />} />
            <Route path='/booking' element={<BookingPage times={state.availableTimes} date={state.date} updateFunc={updateTimes}/>} />
        </Routes>
    );
}

export default Main;