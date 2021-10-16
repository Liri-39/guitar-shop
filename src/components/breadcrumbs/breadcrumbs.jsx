import React from "react";
import {useLocation} from "react-router-dom";
import {AppRoute} from "../../const";

const Breadcrumbs = () => {
    const location = useLocation();

    return <ul className="breadcrumbs">
        <li className="breadcrumbs__item">Главная</li>
        <li className="breadcrumbs__item">Каталог</li>
        {AppRoute.CART === location.pathname && <li className="breadcrumbs__item">Оформляем</li>}
    </ul>
}

export default Breadcrumbs;
