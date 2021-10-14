import {PRODUCTS_ON_PAGE} from "./const";

export const priceFormat = (data) => {
    const price = Number.prototype.toFixed.call(parseFloat(data) || 0);
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

export const sortAsc = (a, b) => a - b;
export const sortDesc = (a, b) => b - a;

export const getProductsOnPage = (arr, page) => {
    const startIndex = (page-1) * PRODUCTS_ON_PAGE;
    const endIndex = page * PRODUCTS_ON_PAGE;

    return arr.slice(startIndex, endIndex)
}
