import React from "react";
import Card from "../Card";
import "./index.css";

function CardItem(props) {
    const { productName, toppings, price } = props.shopMenu;
    const MTNumber = props.idx + 1;
    return (
        <Card>
            <div>{`MT - ${MTNumber}`}</div>
            <div className="fw-bold">{productName}</div>
            <hr className="hr-tag" />

            <div>
                <p className="fw-bold mb-0">Toppings:</p> {toppings}
            </div>
            <div className="fw-bold align-self-end card-price">${price}</div>
        </Card>
    );
}

export default CardItem;
