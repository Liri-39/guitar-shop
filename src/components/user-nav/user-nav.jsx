import React from "react";
import {Link, useLocation} from "react-router-dom";
import Icons  from "../icons/icons";
import {useSelector} from 'react-redux';
import {AppRoute} from "../../const";

const UserNav = () => {
    const location = useLocation();
    const {products} = useSelector((state) => state.CART);

    return <div className="header__nav-user nav-user">
        <ul className="nav-user__list">
            <li className="nav-user__item">
                <a className="nav-user__link" href="/" aria-label="Карта">
                    <Icons name="icon-map" height="14" width="17"/>
                </a>
            </li>
            <li className="nav-user__item">
                <a className="nav-user__link" href="/" aria-label="Поиск">
                    <Icons name="icon-search" height="14" width="14"/>
                </a>
            </li>
            {AppRoute.CART === location.pathname ?
                <li className="nav-user__item">
                    <a className="nav-user__link" aria-label="Корзина">
                        <Icons name="icon-basket" height="18" width="16"/>
                        <span className="nav-user__index">{products.length}</span>
                    </a>
                </li>:
                <li className="nav-user__item">
                    <Link to={AppRoute.CART} className="nav-user__link" aria-label="Корзина">
                        <Icons name="icon-basket" height="18" width="16"/>
                        <span className="nav-user__index">{products.length}</span>
                    </Link>
                </li>
            }
        </ul>
    </div>
}

export default UserNav;
