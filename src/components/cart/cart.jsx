import React from "react";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import CartItem from "../cart-item/cart-item";
import {useSelector} from "react-redux";
import {priceFormat} from "../../util";
import {PageTitles, AppRoute} from "../../const";
import {Link} from "react-router-dom";

const Cart = () => {
    const {products} = useSelector((state) => state.CART);

    const totalPrice = (products.length > 0) ? products.reduce((a, b) => a.price * a.count + b.price * b.count) : 0;

    return <main className="page__main main">
        <div className="main__wrapper">
            <h1 className="main__title main__title--cart">{PageTitles.CART}</h1>
            <Breadcrumbs/>
            {(products.length > 0) &&
            <div className="cart">
                {products.map((product) => <CartItem product={product}/>)}
                <div className="cart__footer">
                    <form className="cart__coupon coupon">
                        <p className="coupon__title">Промокод на скидку</p>
                        <label className="coupon__label">Введите свой промокод, если он у вас есть.</label>
                        <input type="text"
                               className="coupon__input"
                               value={1}
                        />
                        <button type="submit" className="coupon__button">Применить купон</button>
                    </form>
                    <div className="cart__order-action">
                        <p className="cart__total-price">Всего: {priceFormat(totalPrice)} ₽</p>
                        <button className="cart__order-button">Оформить заказ</button>
                    </div>
                </div>
            </div>
            }
            {(products.length === 0) && <div className="cart">
                <p>Корзина пуста. Добавьте что-нибудь</p>
                <Link to={AppRoute.CATALOG} className="button cart__order-button">Перейти в каталог</Link>
            </div>
            }
        </div>
    </main>


}

export default Cart;
