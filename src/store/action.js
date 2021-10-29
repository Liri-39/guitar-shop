import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
    ADD_PRODUCT_TO_BASKET: `addProductToBasket`,
    CHANGE_SORT_TYPE:`changeSortType`,
    CHANGE_SORT_METHOD: `changeSortMethod`,
    REMOVE_PRODUCT_FROM_BASKET: `removeProductFromBasket`,
    CHANGE_PRODUCT_COUNT: `changeProductCount`,
    CHANGE_PAGE: `changePage`,
    CHANGE_FILTER:`changeFilter`,
    CHANGE_FILTER_VALUE:`changeFilterPrice`
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

export const changeSortMethod = createAction(ActionType.CHANGE_SORT_METHOD, (type) => {
    return {
        payload: type,
    };
});

export const changePage = createAction(ActionType.CHANGE_PAGE, (page) => {
    return {
        payload: page,
    };
});

export const changeFilter = createAction(ActionType.CHANGE_FILTER_VALUE, (type, value, actionType) => {
    return {
        payload: {type, value, actionType},
    };
});

export const changeFilterPrice = createAction(ActionType.CHANGE_FILTER, (id, value) => {
    return {
        payload: {id, value},
    };
});
