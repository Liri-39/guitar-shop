import React from "react";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import Header from "../header/header";
import Footer from "../footer/footer";

const EmptyPage = () => {
    return <>
        <Header/>
        <main className="page__main main">
            <div className="main__wrapper">
                <p>Этой страницы нет в проекте</p>
                <Link to={AppRoute.CATALOG} className="button button--action cart__order-button">Вернуться на
                    главную</Link>
            </div>
        </main>
        <Footer/>
    </>
}

export default EmptyPage;
