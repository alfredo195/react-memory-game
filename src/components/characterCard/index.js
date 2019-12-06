import React from "react";
import "./style.css";

function characterCard(props) {
    return (
        <div>
        <div className="card">
                <img alt={props.name} src={props.image} onClick={() => props.handleIncrement(props.id)}/>
        </div>
        </div>
    )
}

export default characterCard;