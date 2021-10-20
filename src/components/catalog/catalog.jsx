import React from "react";
import Sorter from "../sorter/sorter";
import Filter from "../filter/filter";
import Cards from "../cards/cards";
import Pagination from "../pagination/pagination";
import {useSelector} from "react-redux";
import {getProductsOnPage} from "../../util";
import {getActiveProducts} from "../../store/catalog/selectors";
import {PRODUCTS_ON_PAGE} from "../../const";

const Catalog = () => {
    const products = useSelector(getActiveProducts);
    const {page} = useSelector((state) => state.CATALOG);
    const productsOnPage = getProductsOnPage(products, page);

    return <div className="catalog">
        <Sorter/>
        <Filter/>
        <Cards productsOnPage={productsOnPage}/>
        {Boolean(products.length > PRODUCTS_ON_PAGE) && <Pagination productsCount={products.length} activePage={page}/>}
    </div>
}

export default Catalog;
