import React from "react";
import Icons from "../icons/icons";
import Social from "../social/social";

const Footer = () => {
    return <footer className="page__footer footer">
        <div className="footer__wrapper">
            <div className="footer__column">
                <div className="logo">
                    <a href="/" className="logo--footer header__logo" aria-label="Логотип Guitar-shop">
                        <Icons name="logo" height="70" width="67"/>
                    </a>
                </div>
                <Social/>
            </div>
            <div className="footer__column footer__column--info">
                <div className="footer__info-item">
                    <h3 className="footer__title">О нас</h3>
                    <span className="footer__text">
                        Магазин гитар, музыкальных инструментов и гитарная мастерская в Санкт-Петербурге.
                    </span>
                    <span className="footer__text">
                        Все инструменты проверены, отстроены и доведены до идеала!
                    </span>
                </div>
                <div className="footer__info-item">
                    <h3 className="footer__title">Каталог</h3>
                    <ul className="footer__list">
                        <li className=""><a href="#" className="footer__link">Акустические гитары</a></li>
                        <li className=""><a href="#" className="footer__link">Классические гитары</a></li>
                        <li className=""><a href="#" className="footer__link">Электрогитары</a></li>
                        <li className=""><a href="#" className="footer__link">Бас-гитары</a></li>
                        <li className=""><a href="#" className="footer__link">Укулеле</a></li>
                    </ul>
                </div>
                <div className="footer__info-item">
                    <h3 className="footer__title">Информация</h3>
                    <ul className="footer__list">
                        <li className=""><a href="#" className="footer__link">Где купить?</a></li>
                        <li className=""><a href="#" className="footer__link">Блог</a></li>
                        <li className=""><a href="#" className="footer__link">Вопрос - ответ</a></li>
                        <li className=""><a href="#" className="footer__link">Возврат</a></li>
                        <li className=""><a href="#" className="footer__link">Сервис-центры</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer__column footer__column--contacts contacts">
                <h3 className="contacts__title">Контакты</h3>
                <div className="contacts__item">
                    <address className="contacts__address">
                        <span>г. Санкт-Петербург,</span>
                        <span>м. Невский проспект,</span>
                        <span>ул. Казанская 6.</span>
                    </address>
                    <a href="tel:+78125005050" className="contacts__phone">
                        <Icons name="icon-phone" width="10" height="10"/>
                        <span>8-812-500-50-50</span>
                    </a>
                </div>
                <div className="contacts__item">
                    <Icons name="icon-clock" width="10" height="10"/>
                    <span>Режим работы: с 11:00 до 20:00, без выходных.</span>
                </div>
            </div>
        </div>
    </footer>
}

export default Footer;
