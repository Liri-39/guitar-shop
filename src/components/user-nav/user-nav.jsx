import React from "react";
import {Link} from "react-router-dom";
import Icons  from "../icons/icons";
import {useSelector} from 'react-redux';
import {AppRoute} from "../../const";

const UserNav = () => {
    const {products} = useSelector((state) => state.CART);

    return <div className="nav-user">
        <ul className="nav-user__list">
            <li className="nav-user__item">
                <a className="nav-user__link" href="/">
                    <Icons name="icon-map" height="14" width="17"/>
                </a>
            </li>
            <li className="nav-user__item">
                <a className="nav-user__link" href="/">
                    <Icons name="icon-search" height="14" width="14"/>
                </a>
            </li>
            <li className="nav-user__item">
                <Link to={AppRoute.CART} className="nav-user__link">
                    <Icons name="icon-basket" height="18" width="16"/>
                    <span className="nav-user__index">{products.length}</span>
                </Link>
            </li>
        </ul>
    </div>
}

export default UserNav;
