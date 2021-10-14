import React, {useState} from 'react';
import {PRODUCTS_ON_PAGE} from "../../const";

const Pagination= ({productsCount, activePage}) => {

    const startPage = 1;
    const totalPages = Math.ceil(productsCount / PRODUCTS_ON_PAGE);
/*
    const range = (from, to, step = 1) => {
        let i = from;
        const range = [];

        while (i <= to) {
            range.push(i);
            i += step;
        }

        return range;
    }*/

    return <div className="catalog__pagination pagination">
        {Boolean(Number(activePage) !== 1) && <a className="pagination__button pagination__button--previous" href="">Назад</a>}
        <div className="pagination__pages-list">
            <a className={`pagination__button ${activePage === startPage ? `pagination__button--active` : ``}`} href="">{1}</a>
            {Boolean(Number(activePage) === startPage) && <a className="pagination__button" href="">{startPage+1}</a>}
            {Boolean(Number(activePage) !== startPage && Number(activePage) !== startPage+1) && <a className="pagination__button" href="">...</a>}
            {Boolean(Number(activePage) !== totalPages && Number(activePage) !== startPage) && <a className="pagination__button pagination__button--active" href="">{activePage}</a>}
            {Boolean(Number(activePage) !== totalPages && Number(activePage) !== totalPages-1) && <a className="pagination__button" href="">...</a>}
            {Boolean(Number(activePage) === totalPages) && <a className="pagination__button" href="">{totalPages-1}</a>}
            <a className={`pagination__button ${activePage === totalPages ? `pagination__button--active` : ``}`} href="">{totalPages}</a>
        </div>
        {Boolean(Number(activePage) !== totalPages) && <a className="pagination__button pagination__button--next" href="">Далее</a>}
    </div>
}

export default Pagination;
