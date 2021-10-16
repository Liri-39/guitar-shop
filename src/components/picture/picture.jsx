import React from "react";
import PropTypes from "prop-types";

const Picture = ({webp, jpg, name, location}) => {
    return <picture className={`${location}__image`}>
        <source type="image/webp" srcSet={`img/${webp[0]} 1x, img/${webp[1]} 2x`}/>
        <img src={jpg[0]}
             srcSet={`${jpg[0]} 1x, ${jpg[1]} 2x`} alt={name}/>
    </picture>
}

Picture.propTypes = {
    webp: PropTypes.array.isRequired,
    jpg: PropTypes.array.isRequired,
    name: PropTypes.string
};

export default Picture;
