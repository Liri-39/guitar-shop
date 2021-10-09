import React from "react";
import {Link} from "react-router-dom";

const Nav = () => {
    return <nav className="header__nav nav">
        <ul className="nav__list">
            <li className="nav__item"><a className="nav__link" href="#">Каталог</a></li>
            <li className="nav__item"> <a className="nav__link" href="#">Где купить?</a></li>
            <li className="nav__item"> <a className="nav__link" href="#">О компании</a></li>
            <li className="nav__item"> <a className="nav__link" href="#">Сервис-центры</a></li>
        </ul>
    </nav>
}

export default Nav;
