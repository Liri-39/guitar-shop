import React from "react";

import IconsSVG from "../../img/sprite.svg"
import PropTypes from "prop-types";

const Icons = ({name, width, height}) => {
    return(
        <svg width={width} height={height}>
            <use xlinkHref={`${IconsSVG}#${name}`} />
        </svg>
    )
};

Icons.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
};

export default Icons;
