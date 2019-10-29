import React from "react";
import "./style.css";

function characterCard(props) {
    return (
        <div className="card">
                <img alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)}></img>
        </div>
    )
}

export default characterCard;