import React from "react";

const CloseButton = ({cb, label, classButton}) => {
    const handleButtonClick = (evt) => {
        evt.preventDefault();
        cb();
    }

    return <button className={`close-button ${classButton}`}
                   aria-label={label}
                   onClick={handleButtonClick}
    />
}

export default CloseButton;
