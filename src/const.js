export const PRODUCTS_ON_PAGE = 9;

export const NameSpace = {
    CART: `CART`,
    CATALOG: `CATALOG`
};

export const GuitarType = {
    ACOUSTIC: `Акустические гитары`,
    ELECTRIC: `Электрогитары`,
    UKULELE: `Укулеле`,
}

export const GuitarStrings = {
    ACOUSTIC: [6, 7, 12],
    ELECTRIC: [4, 6, 7],
    UKULELE:  [4],
}

export const ratings = [
    {rating: 5, title: `perfect`},
    {rating: 4, title: `good`},
    {rating: 3, title: `not bad`},
    {rating: 2, title: `badly`},
    {rating: 1, title: `terribly`},
];

export const PopUpTypes = {
    ADDING_TO_CART: `Добавить товар в корзину`,
    REMOVING_FROM_CART: `Удалить этот товар?`,
    SUCCESS_MESSAGE: `Товар успешно добавлен в корзину`
}


export const AppRoute = {
    CATALOG: `/`,
    CART: `/cart`
};

export const PageTitles = {
    CATALOG: `Каталог`,
    CART: `Корзина`
}
