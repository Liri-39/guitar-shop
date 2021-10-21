import React from "react";
import {useDispatch} from "react-redux";
import {addProductToCart} from "../../../store/action";
import Picture from "../../picture/picture";
import ProductInfo from "../../product-info/product-info";
import {productPropTypes} from "../../../prop-types";
import PropTypes from "prop-types";

const MessageAdding = ({product, onAdd}) => {
    const dispatch = useDispatch();

    const handleClickButton = () => {
        dispatch(addProductToCart(Object.assign({}, product, {count: 1})));
        onAdd(true);
    }

    return <>
        <Picture webp={product.webp} jpg={product.jpg} name={product.name} location={`modal`}/>
        <ProductInfo product={product}/>
        <button className="modal__button--action modal__button" onClick={handleClickButton} autoFocus>Добавить в корзину
        </button>
    </>
}

MessageAdding.propTypes = {
    product: productPropTypes,
    onClose: PropTypes.func
};

export default MessageAdding;
