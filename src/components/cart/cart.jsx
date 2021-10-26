import React, {useState} from "react";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import CartItem from "../cart-item/cart-item";
import {useSelector} from "react-redux";
import {priceFormat, getSumWithCoupon} from "../../util";
import {PageTitle, AppRoute, Coupon} from "../../const";
import {Link} from "react-router-dom";

const Cart = () => {
    const {products} = useSelector((state) => state.CART);

    const [coupon, setCoupon] = useState(``);
    const [isCorrect, setIsCorrect] = useState(false);
    const [isWrongCoupon, setIsWrongCoupon] = useState(false);

    const couponList = Object.keys(Coupon);

    const handleCouponInput = (evt) => {
        setCoupon(evt.target.value.trim());
        setIsWrongCoupon(false);
        setIsCorrect(false);
    }

    const handleCheckCoupon = (evt) => {
        evt.preventDefault();
        const index = couponList.findIndex((item) => item === coupon);
        if (index !== -1) {
            setIsCorrect(true);
        } else {
            setIsWrongCoupon(true)
        }
    }
    let totalPrice = 0;
    products.map((item) => {
        return totalPrice = totalPrice + (item.price * item.count);
    })

    if (isCorrect) {
        totalPrice = getSumWithCoupon(totalPrice, Coupon[coupon].maxPercent, Coupon[coupon].fixSum);
    }

    return <main className="page__main main">
        <div className="main__wrapper">
            <h1 className="main__title main__title--cart">{PageTitle.CART}</h1>
            <Breadcrumbs/>

            <div className="cart">
                {(products.length > 0) &&
                <>
                    {products.map((product) => <CartItem product={product} key={`cart-${product.id}`}/>)}
                    <div className="cart__footer">
                        <form className="cart__coupon coupon">
                            <p className="coupon__title">Промокод на скидку</p>
                            <label className={`coupon__label ${isWrongCoupon ? `coupon__label--error` : ``}`}>
                                {isWrongCoupon ?
                                    `Промокод не действителен` :
                                    `Введите свой промокод, если он у вас есть.`}
                            </label>
                            <input type="text"
                                   className="coupon__input"
                                   value={coupon}
                                   onChange={handleCouponInput}
                            />
                            <button className="button coupon__button" onClick={handleCheckCoupon}>Применить купон
                            </button>
                        </form>
                        <div className="cart__order-action">
                            <p className="cart__total-price">Всего: {priceFormat(totalPrice)} ₽</p>
                            <button className="button button--action cart__order-button">Оформить заказ</button>
                        </div>
                    </div>
                </>
                }
                {(products.length === 0) &&
                <>
                    <p>Корзина пуста. Добавьте что-нибудь</p>
                    <Link to={AppRoute.CATALOG} className="button button--action cart__order-button">Перейти в
                        каталог</Link>
                </>
                }
            </div>
        </div>
    </main>


}

export default Cart;
