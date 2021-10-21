import React, {useState, useRef} from "react";
import {PopUpType} from "../../const";
import PropTypes from "prop-types";
import {productPropTypes} from "../../prop-types";
import MessageSuccess from "./message-success/message-success";
import MessageRemoving from "./message-removing/message-removing";
import MessageAdding from "./message-adding/message-adding";

const Modal = (props) => {
    const {type, title, product, active, onSetModalActive} = props;

    if (active) {
        document.querySelector('html').scrollTop = window.scrollY;
    }

    const [isAdded, setIsAdded] = useState(false);

    const closeButton = useRef(null);

    const handleClose = () => {
        onSetModalActive(false);
    }

    const handleEscKeyPress = (evt) => {
        if (evt.key === `Escape`) {
            onSetModalActive(false);
        }
    }

    const handleFocusOutEvent = (evt) => {
        if (!evt.currentTarget.contains(evt.relatedTarget)) {
            closeButton.current.focus();
        }
    }

    return <div className={`overlay ${active ? `overlay--active` : ``}`}
                onClick={handleClose}
                onKeyDown={handleEscKeyPress}
                onBlur={handleFocusOutEvent}>
        <div className={`modal ${active ? `modal--active` : ``}`}
             onClick={(evt) => evt.stopPropagation()}>
            <p className="modal__title">{title}</p>
            <button className="close-button modal__close-button"
                    aria-label="Закрыть окно"
                    onClick={handleClose}
                    ref={closeButton}/>
            <div className={`modal__content ${isAdded ? `modal__content--success-block` : ``}`}>
                {!isAdded && type === PopUpType.ADDING_TO_CART && <MessageAdding product={product} onAdd={setIsAdded}/>}
                {type === PopUpType.REMOVING_FROM_CART && <MessageRemoving product={product} onClose={handleClose}/>}
                {isAdded && <MessageSuccess onClose={handleClose}/>}
            </div>
        </div>
    </div>
}

Modal.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    product: productPropTypes,
    active: PropTypes.bool,
    onSetModalActive: PropTypes.func
};

export default Modal;
