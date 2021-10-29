import React from "react";
import {Link, useLocation} from "react-router-dom";
import {AppRoute} from "../../const";

const Nav = () => {
    const location = useLocation();

    return <nav className="header__nav nav">
        <ul className="nav__list">
            {AppRoute.CATALOG === location.pathname ?
                <li className="nav__item"><a className="nav__link">Каталог</a></li> :
                <li className="nav__item"><Link to={AppRoute.CATALOG}  className="nav__link">Каталог</Link></li>
            }
            <li className="nav__item"> <Link to={AppRoute.NOT_FOUND} className="nav__link">Где купить?</Link></li>
            <li className="nav__item"> <Link to={AppRoute.NOT_FOUND} className="nav__link">О компании</Link></li>
            <li className="nav__item"> <Link to={AppRoute.NOT_FOUND} className="nav__link">Сервис-центры</Link></li>
        </ul>
    </nav>
}

export default Nav;
