import {createSelector} from "@reduxjs/toolkit";
import {NameSpace} from "../../const";

export const getSortType = (state) => state[NameSpace.CATALOG].activeSortType;
export const getSortMethod = (state) => state[NameSpace.CATALOG].activeSortMethod;
export const getFilters = (state) => state[NameSpace.CATALOG].filter;
export const getProducts = (state) => state[NameSpace.CATALOG].products;

export const getActiveProducts = createSelector(
    [getProducts, getSortType, getSortMethod, getFilters],
    (products, activeSortType, activeSortMethod, filter) => {
        const productsDefault = products.filter((item) => {
        const isInTypeFilter = filter.types.length === 0 ?
            true :
            Boolean(1 + filter.types.findIndex((type) => type === item.type));
        const isInPriceFilter =   Boolean(item.price >= filter.sum.minSum && item.price <= filter.sum.maxSum);
        const isInStringsFilter = filter.strings.length === 0 ?
            true :
            1 + filter.strings.findIndex((count) => Number(count) === Number(item.strings));
            return Boolean(isInTypeFilter && isInPriceFilter && isInStringsFilter);
        });
        const productsCopy = productsDefault.slice();
        switch (activeSortType) {
            case `byPrice`: {
                if (activeSortMethod === `down`) {
                    return productsCopy.sort((a, b) => b.price - a.price);
                }
                return productsCopy.sort((a, b) => a.price - b.price);
            }
            case `byRating`: {
                if (activeSortMethod === `down`) {
                    return productsCopy.sort((a, b) => b.rate - a.rate);
                }
                return productsCopy.sort((a, b) => a.rate - b.rate);
            }
            default: {
                return productsDefault;
            }
        }
    },
);
