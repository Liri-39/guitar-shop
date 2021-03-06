import React, {useState} from "react";
import Picture from "../picture/picture";
import RatingItem from "../rating-item/rating-item";
import {PopUpTitle, PopUpType, ratings} from "../../const";
import {priceFormat} from "../../util";
import Modal from "../modal/modal";
import {productPropTypes} from "../../prop-types";

const Card = ({product}) => {
    const [modalActive, setModalActive] = useState(false);

    return <>
        {modalActive && <Modal product={product} title={PopUpTitle.ADDING_TO_CART} active={modalActive} type={PopUpType.ADDING_TO_CART} onSetModalActive={setModalActive}/>}
        <div className="card" key={product.id}>
            <Picture webp={product.webp} jpg={product.jpg} name={product.name} location={`card`}/>
            <div className="card__rating">
                <div className="rating">
                    {ratings.map((item) =>
                        <RatingItem
                            item={item}
                            rating={product.stars}
                            key={`${item.rating}-stars`}
                        />)}
                </div>
                <span className="">{product.rate}</span>
            </div>
            <div className="card__info">
                <span className="card__title">{product.name}</span>
                <span className="card__price">{`${priceFormat(product.price)} ₽`}</span>
            </div>
            <div className="card__buttons">
                <button className="button card__button card__button--product">Подробнее</button>
                <button className="button card__button card__button--cart" onClick={()=>setModalActive(true)}>Купить</button>
            </div>
        </div>
    </>
}

Card.propTypes = {
    product: productPropTypes
};

export default Card;
