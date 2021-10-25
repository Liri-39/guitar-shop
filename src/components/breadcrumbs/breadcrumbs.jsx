import React from "react";
import {Link, useLocation} from "react-router-dom";
import {AppRoute} from "../../const";

const Breadcrumbs = () => {
    const location = useLocation();

    return <ul className="breadcrumbs">
        <li className="breadcrumbs__item">Главная</li>
        {AppRoute.CART === location.pathname ?
            <>
            <li className="breadcrumbs__item"><Link to={AppRoute.CATALOG}>Каталог</Link></li>
            <li className="breadcrumbs__item">Оформляем</li>
            </>:
            <li className="breadcrumbs__item">Каталог</li>
        }
    </ul>
}

export default Breadcrumbs;
