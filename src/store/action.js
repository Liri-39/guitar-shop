import {createAction} from "@reduxjs/toolkit";

export const ActionType = {
    CHANGE_BASKET: `changeBasket`,
    CHANGE_SORT_TYPE:`changeSortType`
}

export const changeBasket = createAction(ActionType.CHANGE_BASKET, (count) => {
    return {
        payload: count,
    };
});

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE, (type) => {
    return {
        payload: type,
    };
});

