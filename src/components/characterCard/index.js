import React from "react";
import "./style.css";

function characterCard(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img alt={props.name} src={props.images}/>
            </div>
        </div>
    )
}

export default characterCard;