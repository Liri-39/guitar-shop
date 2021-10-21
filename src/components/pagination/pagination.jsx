import React from 'react';
import {PRODUCTS_ON_PAGE} from "../../const";
import {useDispatch, useSelector} from "react-redux";
import {changePage} from "../../store/action";
import {getActiveProducts} from "../../store/catalog/selectors";

const Pagination = () => {
    const {page} = useSelector((state) => state.CATALOG);
    const products = useSelector(getActiveProducts);

    const dispatch = useDispatch();

    const productsCount = products.length;
    const activePage = Number(page);

    const handleClick = (evt) => {
        evt.preventDefault();
        let newValue;
        switch (evt.target.id) {
            case (`prevPage`):
                newValue = activePage - 1;
                break;
            case (`nextPage`):
                newValue = activePage + 1;
                break;
            default:
                newValue = evt.target.id;
        }
        dispatch(changePage(newValue))
    }

    const startPage = 1;
    const totalPages = Math.ceil(productsCount / PRODUCTS_ON_PAGE);

    if (totalPages < activePage) {
        dispatch(changePage(totalPages))
    }
    if (productsCount <= PRODUCTS_ON_PAGE) {
        dispatch(changePage(startPage))
    }

    return <div className="catalog__pagination pagination" onClick={handleClick}>
        {Boolean(Number(activePage) !== 1) &&
        <a className="pagination__button pagination__button--previous" id={`prevPage`} href="">Назад</a>}
        <div className="pagination__pages-list">
            <a className={`pagination__button ${activePage === startPage ? `pagination__button--active` : ``}`}
               id={Number(startPage)} href="">{Number(startPage)}</a>
            {Boolean(Number(activePage) === startPage && totalPages>3) &&
            <a className="pagination__button" href="" id={Number(startPage + 1)}>{startPage + 1}</a>}
            {Boolean(Number(activePage) !== startPage && Number(activePage) !== startPage + 1) &&
            <a className="pagination__button">...</a>}
            {Boolean(Number(activePage) !== totalPages && Number(activePage) !== startPage) &&
            <a className="pagination__button pagination__button--active">{Number(activePage)}</a>}
            {Boolean(Number(activePage) !== totalPages && Number(activePage) !== totalPages - 1) &&
            <a className="pagination__button">...</a>}
            {Boolean(Number(activePage) === totalPages && totalPages>3) &&
            <a className="pagination__button" href="" id={Number(totalPages - 1)}>{totalPages - 1}</a>}
            <a className={`pagination__button ${activePage === totalPages ? `pagination__button--active` : ``}`}
               id={Number(totalPages)} href="">{Number(totalPages)}</a>
        </div>
        {Boolean(Number(activePage) !== totalPages) &&
        <a className="pagination__button pagination__button--next" id={`nextPage`} href="">Далее</a>}
    </div>
}

export default Pagination;
