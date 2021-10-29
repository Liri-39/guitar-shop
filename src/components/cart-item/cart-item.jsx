import React, {useState} from "react";
import {useDispatch} from "react-redux";
import Picture from "../picture/picture";
import {changeProductCount} from "../../store/action";
import {priceFormat} from "../../util";
import Modal from "../modal/modal";
import {GuitarName, PopUpTitle, PopUpType} from "../../const";
import {productPropTypes} from "../../prop-types";

const CartItem = ({product}) => {
    const dispatch = useDispatch();

    const [modalActive, setModalActive] = useState(false);
    const [count, setCount] = useState(product.count);

    const handleButtonIncClick = (evt) => {
        evt.preventDefault();
        const newCount = Number(count + 1);
        setCount(newCount);
        dispatch(changeProductCount(newCount, product.id));
    }

    const handleButtonDecClick = (evt) => {
        evt.preventDefault();
        let newCount = Number(count - 1);
        if (newCount === 0) {
            newCount = 1;
            setModalActive(true)
        }
        setCount(newCount);
        dispatch(changeProductCount(newCount, product.id));
    }

    const handleInputCount = (evt) => {
        if (evt.target.value.length === 0) {
            setCount(``);
        }
        if (evt.target.value > 0) {
            setCount(Number(evt.target.value));
            dispatch(changeProductCount(Number(evt.target.value), product.id));
        }
    }

    const handleBlurInput = () => {
        if (count === ``) {
            setCount(1);
            dispatch(changeProductCount(1, product.id));
        }
    }

    return <>
        {modalActive &&
        <Modal product={product} title={PopUpTitle.REMOVING_FROM_CART} active={modalActive}
               type={PopUpType.REMOVING_FROM_CART}
               onSetModalActive={setModalActive}/>}
        <div className="cart__item">
            <button className="close-button cart__close-button"
                    aria-label="Удалить товар"
                    onClick={() => setModalActive(true)}
            />
            <Picture webp={product.webp} jpg={product.jpg} name={product.name} location={`cart`}/>
            <div className="cart__item-info product-info">
                <p className="product-info__title">{product.type} {product.name}</p>
                <p className="product-info__article">Артикул: {product.code}</p>
                <p className="product-info__info">{GuitarName[product.type]}, {product.strings} струнная</p>
            </div>
            <div className="cart__item-price">{priceFormat(product.price)} ₽</div>
            <div className="cart__item-count">
                <button className="cart__item-count-button"
                        onClick={handleButtonDecClick}
                >-
                </button>
                <input className="cart__item-count-input"
                       type="number"
                       id={`${product.id}-count`}
                       name={`${product.id}-count`}
                       min={1}
                       placeholder={``}
                       value={count}
                       onInput={handleInputCount}
                       onBlur={handleBlurInput}
                       aria-label="Количество"/>
                <button className="cart__item-count-button"
                        onClick={handleButtonIncClick}
                >+
                </button>
            </div>
            <div className="cart__item-price-total">{priceFormat(product.price * product.count)} ₽</div>
        </div>
    </>
}

CartItem.propTypes = {
    product: productPropTypes,
};

export default CartItem;
