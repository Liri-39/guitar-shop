import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
    ADD_PRODUCT_TO_BASKET: `addProductToBasket`,
    CHANGE_SORT_TYPE:`changeSortType`,
    REMOVE_PRODUCT_FROM_BASKET: `removeProductFromBasket`,
    CHANGE_PRODUCT_COUNT: `changeProductCount`,
}

export const addProductToCart = createAction(ActionType.ADD_PRODUCT_TO_BASKET, (product) => {
    return {
        payload: product,
    };
});

export const removeProductFromCart = createAction(ActionType.REMOVE_PRODUCT_FROM_BASKET, (id) => {
    return {
        payload: id,
    };
});

export const changeProductCount = createAction(ActionType.CHANGE_PRODUCT_COUNT, (count, id) => {
    return {
        payload: {id, count},
    };
});

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (type) => {
    return {
        payload: type,
    };
});

