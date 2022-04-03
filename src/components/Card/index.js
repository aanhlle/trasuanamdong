import React from "react";
import CoolHover from "../CoolHover";
import "./index.css";

function Card(props) {
    return (
        <CoolHover>
            <div className="Card">{props.children}</div>
        </CoolHover>
    );
}

export default Card;
