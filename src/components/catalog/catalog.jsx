import React from "react";
import Sorter from "../sorter/sorter";
import Filter from "../filter/filter";
import Cards from "../cards/cards";
import Pagination from "../pagination/pagination";
import {useSelector} from "react-redux";
import {getProductsOnPage} from "../../util";
import PopUp from "../pop-up/pop-up";

const Catalog = () => {
    const {products} = useSelector((state) => state.CATALOG);
    const {page} = useSelector((state) => state.CATALOG);
    const productsOnPage = getProductsOnPage(products, page);

    return <div className="catalog">
        <PopUp product={products[1]}/>
        <Sorter/>
        <Filter/>
        <Cards productsOnPage={productsOnPage}/>
        <Pagination productsCount={products.length} activePage={page}/>
    </div>
}

export default Catalog;
