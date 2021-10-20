import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

const Nav = () => {
    return <nav className="header__nav nav">
        <ul className="nav__list">
            <li className="nav__item"><Link to={AppRoute.CATALOG}  className="nav__link">Каталог</Link></li>
            <li className="nav__item"> <a className="nav__link" href="#">Где купить?</a></li>
            <li className="nav__item"> <a className="nav__link" href="#">О компании</a></li>
            <li className="nav__item"> <a className="nav__link" href="#">Сервис-центры</a></li>
        </ul>
    </nav>
}

export default Nav;