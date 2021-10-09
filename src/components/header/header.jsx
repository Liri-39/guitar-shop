import React from "react";
import Icons  from "../icons/icons";
import Nav from "../nav/nav";
import UserNav from "../user-nav/user-nav";

const Header = () => {
    return <header className="page__header header">
        <div className="header__wrapper">
            <a href="/" className="logo header__logo" aria-label="Логотип Guitar-shop">
                <Icons name="logo" height="70" width="67"/>
            </a>
            <Nav/>
            <UserNav/>
        </div>
    </header>
}

export default Header;
