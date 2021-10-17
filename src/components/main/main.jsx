import React from "react";
import Catalog from "../catalog/catalog";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";
import {PageTitles} from "../../const";

const Main = () => {
    return <main className="page__main main">
        <div className="main__wrapper">
            <h1 className="main__title">{PageTitles.CATALOG}</h1>
            <Breadcrumbs/>
            <Catalog/>
        </div>
    </main>
}

export default Main;
