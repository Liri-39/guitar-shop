import React from "react";
import PropTypes from "prop-types";
import Icons from "../icons/icons";

const RatingItem = ({item, rating}) => {
    return <div className="rating__label" key={`${item.rating}-stars-svg`}>
            {(item.rating<=rating) ? <Icons name="icon-full-star" width="10" height="11"/> : <Icons name="icon-star" width="10" height="11"/> }
        </div>;
};

RatingItem.propTypes = {
    item: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    rating: PropTypes.number.isRequired
};

export default React.memo(RatingItem);
