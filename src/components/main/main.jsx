import React from "react";
import Catalog from "../catalog/catalog";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

const Main = () => {
    return <main className="page__main main">
        <div className="main__wrapper">
            <h1 className="main__title">Каталог гитар</h1>
            <Breadcrumbs/>
            <Catalog/>
        </div>
    </main>
}

export default Main;
