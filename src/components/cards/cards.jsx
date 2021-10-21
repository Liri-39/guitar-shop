import React from "react";
import Card from "../card/card";
import PropTypes from "prop-types";
import {productPropTypes} from "../../prop-types";

const Cards = ({productsOnPage}) => {
    return <div className="cards">
        {productsOnPage.map((item) => <Card product={item} key={item.id}/>)}
    </div>
}

Cards.propTypes = {
    productsOnPage: PropTypes.arrayOf(productPropTypes),
};

export default Cards;
