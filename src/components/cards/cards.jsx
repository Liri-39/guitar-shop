import React from "react";
import Card from "../card/card";

const Cards = ({productsOnPage}) => {
    return <div className="cards">
        {productsOnPage.map((item) => <Card product={item} key={item.id}/>)}
    </div>
}

export default Cards;
