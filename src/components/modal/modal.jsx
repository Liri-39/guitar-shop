import React, { useState } from "react";
import {AppRoute, PopUpTypes} from "../../const";

import Picture from "../picture/picture";
import {priceFormat} from "../../util";
import {useDispatch} from "react-redux";
import {addProductToCart, removeProductFromCart} from "../../store/action";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AddingToCart = ({product, onAdd}) => {
    const dispatch = useDispatch();

    const addProduct = () => {
        dispatch(addProductToCart(Object.assign({}, product,{count: 1})));
        onAdd(true);
    }

    return <>
        <Picture webp={product.webp} jpg={product.jpg} name={product.name} location={`modal`}/>
        <div className="modal__product-info product-info">
            <p className="product-info__title">{product.type} {product.name}</p>
            <p className="product-info__article">Артикул: {product.code}</p>
            <p className="product-info__info">{product.type}, {product.strings} струнная</p>
            <p className="product-info__price">Цена: {priceFormat(product.price)} ₽</p>
        </div>
        <button className="button button--action modal__button" onClick={addProduct} autoFocus>Добавить в корзину</button>
    </>
}

const SuccessMessage = ({onClose}) => {
    return <>
        <Link to={AppRoute.CART} className="button button--action modal__button modal__button--success" autoFocus>Перейти в корзину</Link>
        <button className="button button--second-action modal__button modal__button--success" onClick={onClose}>Продолжить покупки</button>
    </>
}

const RemovingFromCart = ({product, onClose}) => {
    const dispatch = useDispatch();

    const removeProducts = () => {
        dispatch(removeProductFromCart(product.id));
        onClose();
    }

    return <>
        <Picture webp={product.webp} jpg={product.jpg} name={product.name} location={`modal`}/>
        <div className="modal__product-info product-info">
            <p className="product-info__title">{product.type} {product.name}</p>
            <p className="product-info__article">Артикул: {product.code}</p>
            <p className="product-info__info">{product.type}, {product.strings} струнная</p>
            <p className="product-info__price">Цена: {priceFormat(product.price)} ₽</p>
        </div>
        <div className="modal__buttons">
            <button className="button button--action modal__button" autoFocus onClick={removeProducts}>Удалить товар</button>
            <button className="button button--second-action modal__button" onClick={onClose}>Продолжить покупки</button>
        </div>
    </>
}

const Modal = (props) => {
    const { type, title, product, active, setModalActive } = props;

    const [isAdded, setIsAdded] = useState(false);

    const handleClose = () => {
        setModalActive(false);
    }

    const handleEscKeyPress = (evt) => {
        if (evt.key === `Escape`) {
            setModalActive(false);
        }
    }

    return <div className={`overlay ${active ?  `overlay--active` : ``}`} onClick={handleClose} onKeyDown={handleEscKeyPress}>
        <div className={`modal ${active ?  `modal--active` : ``}`} onClick={(evt) => evt.stopPropagation()}>
            <p className="modal__title">{title}</p>
            <button className="close-button modal__close-button"
                    aria-label="Закрыть окно"
                    onClick={handleClose}
            />
            <div className={`modal__content ${isAdded? `modal__content--success-block`: ``}`}>
                {!isAdded && type===PopUpTypes.ADDING_TO_CART && <AddingToCart product={product} onAdd={setIsAdded}/>}
                {type===PopUpTypes.REMOVING_FROM_CART && <RemovingFromCart  product={product} onClose={handleClose}/>}
                {isAdded && <SuccessMessage onClose={handleClose}/>}
            </div>
        </div>
    </div>
}

Modal.propTypes = {
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    product: PropTypes.any,
    active: PropTypes.bool,
    setModalActive: PropTypes.func
};

export default Modal;
