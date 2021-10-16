import React from "react";
import {useDispatch} from "react-redux";
import Picture from "../picture/picture";
import {useSelector} from "react-redux";
import CloseButton from "../close-button/close-button";
import {removeProductFromBasket, changeProductCount} from "../../store/action";
import {priceFormat} from "../../util";

const CartItem = ({product}) => {

    const dispatch = useDispatch();

    const removeProducts = () => {
        dispatch(removeProductFromBasket(product.id));
    }

    const priceInc = (evt) => {
        const newCount = Number(product.count + 1);
        dispatch(changeProductCount(newCount));
    }

    const priceDec = (evt) => {
        const newCount = Number(product.count - 1);
        dispatch(changeProductCount(newCount));
    }

    const handleInputCount = (evt) => {
        dispatch(changeProductCount(evt.value));
    }

    return <div className="cart__item">
        <CloseButton classButton={"cart__close-button"} label={"Удалить товар"} cb={removeProducts}/>
        <Picture webp={product.webp} jpg={product.jpg} name={product.name} location={`cart`}/>
        <div className="cart__item-info">
            <p className="cart__title">{product.type} {product.name}</p>
            <p className="cart__article">Артикул: {product.code}</p>
            <p className="cart__info">{product.type}, {product.strings} струнная</p>
        </div>
        <div className="cart__item-price">{priceFormat(product.price)} ₽</div>
        <div className="cart__item-count">
            <button className="cart__item-count-button"
                    onClick={priceDec}
            >-</button>
            <input className="cart__item-count-input"
                   type="number"
                   id={`${product.id}-count`}
                   name={`${product.id}-count`}
                   min={1}
                   max={99}
                   placeholder={1}
                   value={product.count}
                   onChange={handleInputCount}
                   aria-label="Количество"/>
            <button className="cart__item-count-button"
                    onClick={priceInc}
            >+</button>
        </div>
        <div className="cart__item-price-total">{priceFormat(product.price)} ₽</div>
    </div>
}

export default CartItem;
