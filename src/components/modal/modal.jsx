import React, { useState } from "react";
import  {PopUpTypes} from "../../const";

import Picture from "../picture/picture";
import {priceFormat} from "../../util";
import {useDispatch} from "react-redux";
import {removeProductFromCart} from "../../store/action";

const AddingToCart = (props) => {
    return <>
        <Picture webp={props.webp} jpg={props.jpg} name={props.name} location={`modal`}/>
        <div className="modal__product-info product-info">
            <p className="product-info__title">{props.type} {props.name}</p>
            <p className="product-info__article">Артикул: {props.code}</p>
            <p className="product-info__info">{props.type}, {props.strings} струнная</p>
            <p className="product-info__price">Цена: {priceFormat(props.price)} ₽</p>
        </div>
        <button className="button button--action modal__button" autoFocus>Добавить в корзину</button>
    </>
}

const SuccessMessage = () => {
    return <>
        <button className="button button--action modal__button" autoFocus>Перейти в корзину</button>
        <button className="button button--second-action modal__button" autoFocus>Продолжить покупки</button>
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
            <div className="modal__content">
                {type===PopUpTypes.ADDING_TO_CART && <p>PopUpTypes.ADDING_TO_CART</p>}
                {type===PopUpTypes.REMOVING_FROM_CART && <RemovingFromCart  product={product} onClose={handleClose}/>}
                {type===PopUpTypes.SUCCESS_MESSAGE && <SuccessMessage/>}
            </div>
        </div>
    </div>
}

export default Modal;
