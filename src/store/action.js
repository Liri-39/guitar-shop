import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
    ADD_PRODUCT_TO_BASKET: `addProductToBasket`,
    CHANGE_SORT_TYPE:`changeSortType`,
    REMOVE_PRODUCT_FROM_BASKET: `removeProductFromBasket`,
    CHANGE_PRODUCT_COUNT: `changeProductCount`,
}

export const addProductToBasket = createAction(ActionType.ADD_PRODUCT_TO_BASKET, (product) => {
    return {
        payload: product,
    };
});

export const removeProductFromBasket = createAction(ActionType.REMOVE_PRODUCT_FROM_BASKET, (id) => {
    return {
        payload: id,
    };
});

export const changeProductCount = createAction(ActionType.CHANGE_PRODUCT_COUNT, (id, count) => {
    return {
        payload: id,
    };
});

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (type) => {
    return {
        payload: type,
    };
});

