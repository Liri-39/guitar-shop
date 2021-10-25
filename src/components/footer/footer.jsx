import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Icons from "../icons/icons";
import Social from "../social/social";
import {AppRoute} from "../../const";

const Footer = () => {
    const location = useLocation();

    return <footer className="page__footer footer">
        <div className="footer__wrapper">
            <div className="footer__column">
                {AppRoute.CATALOG === location.pathname ?
                    <a className="logo logo--footer footer__logo" aria-label="Логотип Guitar-shop">
                        <Icons name="logo" height="70" width="67"/>
                    </a> :
                    <Link to={AppRoute.CATALOG} className="logo logo--footer footer__logo"
                          aria-label="Логотип Guitar-shop">
                        <Icons name="logo" height="70" width="67"/>
                    </Link>
                }
                <Social/>
            </div>
            <div className="footer__column footer__column--info">
                <div className="footer__info-item">
                    <p className="footer__title">О нас</p>
                    <span className="footer__text">
                        Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.
                    </span>
                    <span className="footer__text">
                        Все инструменты проверены, отстроены и доведены до идеала!
                    </span>
                </div>
                <div className="footer__info-item">
                    <p className="footer__title">Каталог</p>
                    <ul className="footer__list">
                        <li className="footer__list-item"><a href="#" className="footer__link">Акустические гитары</a>
                        </li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Классические гитары</a>
                        </li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Электрогитары</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Бас-гитары</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Укулеле</a></li>
                    </ul>
                </div>
                <div className="footer__info-item">
                    <p className="footer__title">Информация</p>
                    <ul className="footer__list">
                        <li className="footer__list-item"><a href="#" className="footer__link">Где купить?</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Блог</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Вопрос - ответ</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Возврат</a></li>
                        <li className="footer__list-item"><a href="#" className="footer__link">Сервис-центры</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__column footer__column--contacts ">
                <p className="footer__title">Контакты</p>
                <div className="contacts">
                    <div className="contacts__item">
                        <address className="contacts__address">
                            <span>г. Санкт-Петербург,</span>
                            <span>м. Невский проспект,</span>
                            <span>ул. Казанская 6.</span>
                        </address>
                        <a href="tel:+78125005050" className="contacts__phone">8-812-500-50-50</a>
                    </div>
                    <div className="contacts__item contacts__item--timetable">
                        <span className="contacts__title">Режим работы:</span>
                        <span className="contacts__timetable">с 11:00 до 20:00</span>
                        <span>без выходных.</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;
