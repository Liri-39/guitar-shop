import React, {useState, useRef} from "react";
import {AppRoute, PopUpTypes, GuitarNames} from "../../const";

import Picture from "../picture/picture";
import {priceFormat} from "../../util";
import {useDispatch} from "react-redux";
import {addProductToCart, removeProductFromCart} from "../../store/action";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const AddingToCart = ({product, onAdd}) => {
    const dispatch = useDispatch();

    const handleClickButton = () => {
        dispatch(addProductToCart(Object.assign({}, product, {count: 1})));
        onAdd(true);
    }

    return <>
        <Picture webp={product.webp} jpg={product.jpg} name={product.name} location={`modal`}/>
        <div className="modal__product-info product-info">
            <p className="product-info__title">{product.type} {product.name}</p>
            <p className="product-info__article">Артикул: {product.code}</p>
            <p className="product-info__info">{GuitarNames[product.type]}, {product.strings} струнная</p>
            <p className="product-info__price">Цена: {priceFormat(product.price)} ₽</p>
        </div>
        <button className="modal__button--action modal__button" onClick={handleClickButton} autoFocus>Добавить в корзину
        </button>
    </>
}

const SuccessMessage = ({onClose}) => {
    return <>
        <Link to={AppRoute.CART} className="modal__button modal__button--success modal__button--action" autoFocus>Перейти
            в корзину</Link>
        <button className="modal__button modal__button--success modal__button--second-action"
                onClick={onClose}>Продолжить покупки
        </button>
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
            <p className="product-info__info">{GuitarNames[product.type]}, {product.strings} струнная</p>
            <p className="product-info__price">Цена: {priceFormat(product.price)} ₽</p>
        </div>
        <div className="modal__buttons">
            <button className="modal__button--action modal__button" autoFocus onClick={removeProducts}>Удалить товар
            </button>
            <button className="modal__button--second-action modal__button" onClick={onClose}>Продолжить покупки</button>
        </div>
    </>
}

const Modal = (props) => {
    document.querySelector('html').scrollTop = window.scrollY;

    const {type, title, product, active, setModalActive} = props;

    const [isAdded, setIsAdded] = useState(false);

    const closeButton = useRef(null);

    const handleClose = () => {
        setModalActive(false);
    }

    const handleEscKeyPress = (evt) => {
        if (evt.key === `Escape`) {
            setModalActive(false);
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
                onBlur={handleFocusOutEvent}
    >
        <div className={`modal ${active ? `modal--active` : ``}`} onClick={(evt) => evt.stopPropagation()}>
            <p className="modal__title">{title}</p>
            <button className="close-button modal__close-button"
                    aria-label="Закрыть окно"
                    onClick={handleClose}
                    ref={closeButton}
            />
            <div className={`modal__content ${isAdded ? `modal__content--success-block` : ``}`}>
                {!isAdded && type === PopUpTypes.ADDING_TO_CART && <AddingToCart product={product} onAdd={setIsAdded}/>}
                {type === PopUpTypes.REMOVING_FROM_CART && <RemovingFromCart product={product} onClose={handleClose}/>}
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
