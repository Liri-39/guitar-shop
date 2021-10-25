import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import Icons from "../icons/icons";
import Nav from "../nav/nav";
import UserNav from "../user-nav/user-nav";
import {AppRoute} from "../../const";

const Header = () => {
    const location = useLocation();

    return <header className="page__header header">
        <div className="header__wrapper">
            {AppRoute.CATALOG === location.pathname ?
                <a className="logo header__logo" aria-label="Логотип Guitar-shop">
                    <Icons name="logo" height="70" width="67"/>
                </a> :
                <Link to={AppRoute.CATALOG} className="logo header__logo" aria-label="Логотип Guitar-shop">
                    <Icons name="logo" height="70" width="67"/>
                </Link>
            }
            <Nav/>
            <UserNav/>
        </div>
    </header>
}

export default Header;
