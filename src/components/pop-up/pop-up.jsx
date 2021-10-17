import React from "react";
import Picture from "../picture/picture";
import {priceFormat} from "../../util";
import {PopUpTypes} from "../../const";


const PopUp = ({product}) => {
    const handleButtonClick = (evt) => {
        evt.preventDefault();
    }

    const handleEscKeyPress = (evt) => {
        if (evt.key === `Escape`) {
        }
    }

    return <>
        <div className="overlay"/>
        <div className="pop-up">
            <p className="pop-up__title">Добавить товар в корзину</p>
            <button className="close-button pop-up__close-button"
                    aria-label="Закрыть окно"
                    onClick={handleButtonClick}
                    onKeyDown={handleEscKeyPress}
            />
            <div className="pop-up__content">
                <Picture webp={product.webp} jpg={product.jpg} name={product.name} location={`pop-up`}/>
                <div className="pop-up__product-info product-info">
                    <p className="product-info__title">{product.type} {product.name}</p>
                    <p className="product-info__article">Артикул: {product.code}</p>
                    <p className="product-info__info">{product.type}, {product.strings} струнная</p>
                    <p className="product-info__price">Цена: {priceFormat(product.price)} ₽</p>
                </div>
                <button className="button button--action pop-up__button" autoFocus>Добавить в корзину</button>
            </div>
        </div>
    </>
}

export default PopUp;
