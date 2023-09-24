import React, { Component } from "react";

const SpecialCard = (props) => {
    const menuItem = props.menuItem;
    return (
        <div className="special-card">
            <img src={menuItem.image} />
            <span className="card-title">{menuItem.title}</span>
            <span className="card-title price">{menuItem.price}</span>
            <p className="card-description">{menuItem.description}</p>
            <span className="card-title">
                Order for delivery.
                <span class="material-symbols-outlined">local_taxi</span>
            </span>
        </div>
    )
}

export default SpecialCard;