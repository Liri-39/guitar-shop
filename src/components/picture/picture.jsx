import React from "react";
import PropTypes from "prop-types";

const Picture = ({webp, jpg, name, location}) => {
    return <picture className={`picture ${location}__image`}>
        <source type="image/webp" srcSet={`img/${webp[0]} 1x, img/${webp[1]} 2x`}/>
        <img className="picture__img"
             src={`img/${jpg[0]}`}
             srcSet={`img/${jpg[0]} 1x, img/${jpg[1]} 2x`} alt={name}/>
    </picture>
}

Picture.propTypes = {
    webp: PropTypes.array.isRequired,
    jpg: PropTypes.array.isRequired,
    name: PropTypes.string,
    location: PropTypes.string
};

export default Picture;
