import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../../const";
import PropTypes from "prop-types";


const MessageSuccess = ({onClose}) => {
    return <>
        <Link to={AppRoute.CART} className="modal__button modal__button--success modal__button--action" autoFocus>Перейти
            в корзину</Link>
        <button className="modal__button modal__button--success modal__button--second-action"
                onClick={onClose}>Продолжить покупки
        </button>
    </>
}

MessageSuccess.propTypes = {
    onClose: PropTypes.func
};

export default MessageSuccess;
