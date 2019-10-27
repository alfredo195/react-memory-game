import React from "react";
import "./style.css";

function characterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.images}/>
            </div>
            <span></span>
        </div>
    )
}

export default characterCard;