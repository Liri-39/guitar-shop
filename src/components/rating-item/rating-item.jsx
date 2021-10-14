import React from "react";
import PropTypes from "prop-types";
import Icons from "../icons/icons";

const RatingItem = ({item, handleOnChange, rating}) => {
    return <>
        <input
            className="rating__input visually-hidden"
            name="rating"
            value={item.rating}
            id={`${item.rating}-stars`}
            type="radio"
            onChange={handleOnChange}
            checked={item.rating === rating}
        />
        <label
            htmlFor={`${item.rating}-stars`}
            className="rating__label"
            title={item.title}
            key={`${item.rating}-stars-svg`}
        >
            {(item.rating<=rating) ? <Icons name="icon-full-star" width="10" height="11"/> : <Icons name="icon-star" width="10" height="11"/> }
        </label>
    </>;
};

RatingItem.propTypes = {
    item: PropTypes.shape({
        rating: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    handleOnChange: PropTypes.func.isRequired,
    rating: PropTypes.number.isRequired
};

export default React.memo(RatingItem);
