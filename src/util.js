import {PRODUCTS_ON_PAGE} from "./const";

const priceFormat = (data) => {
    const price = Number.prototype.toFixed.call(parseFloat(data) || 0);
    return price.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
}

const sortAsc = (a, b) => a - b;

const getMinPrice = (arr) => {
     const newarr = arr.slice().sort((a, b) => a.price - b.price);
     return newarr[0].price
}

const getMaxPrice = (arr) => {
    const newarr = arr.slice().sort((a, b) => b.price - a.price);
    return newarr[0].price
}

const getProductsOnPage = (arr, page) => {
    const startIndex = (page - 1) * PRODUCTS_ON_PAGE;
    const endIndex = page * PRODUCTS_ON_PAGE;

    return arr.slice(startIndex, endIndex)
}

const getSumWithCoupon = (sum, maxPercent, fixSum) => {
    if (maxPercent === 0 || fixSum === 0) {
        return sum * (1 - (maxPercent / 100)) - fixSum
    }
    if ((sum * (maxPercent / 100)) >= fixSum) {
        return sum - fixSum
    } else {
        return sum * (1 - (maxPercent / 100))
    }
}

export {getSumWithCoupon, getProductsOnPage, getMaxPrice, getMinPrice, sortAsc, priceFormat};
