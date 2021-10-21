import React from "react";
import {useDispatch} from "react-redux";
import {removeProductFromCart} from "../../../store/action";
import Picture from "../../picture/picture";
import ProductInfo from "../../product-info/product-info";
import PropTypes from "prop-types";
import {productPropTypes} from "../../../prop-types";


const MessageRemoving = ({product, onClose}) => {
    const dispatch = useDispatch();

    const removeProducts = () => {
        dispatch(removeProductFromCart(product.id));
        onClose();
    }

    return <>
        <Picture webp={product.webp} jpg={product.jpg} name={product.name} location={`modal`}/>
        <ProductInfo product={product}/>
        <div className="modal__buttons">
            <button className="modal__button--action modal__button" autoFocus onClick={removeProducts}>Удалить товар
            </button>
            <button className="modal__button--second-action modal__button" onClick={onClose}>Продолжить покупки</button>
        </div>
    </>
}

MessageRemoving.propTypes = {
    product: productPropTypes,
    onClose: PropTypes.func
};

export default MessageRemoving;
