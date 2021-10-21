export const PRODUCTS_ON_PAGE = 9;

export const NameSpace = {
    CART: `CART`,
    CATALOG: `CATALOG`
};

export const GuitarEnum = {
    ACOUSTIC: `ACOUSTIC`,
    ELECTRIC: `ELECTRIC`,
    UKULELE: `UKULELE`,
}

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

export const GuitarNames = {
    ACOUSTIC: `Акустическая гитара`,
    ELECTRIC: `Электрогитара`,
    UKULELE: `Укулеле`,
}

export const ratings = [
    {rating: 5, title: `perfect`},
    {rating: 4, title: `good`},
    {rating: 3, title: `not bad`},
    {rating: 2, title: `badly`},
    {rating: 1, title: `terribly`},
];

export const PopUpTypes = {
    ADDING_TO_CART: `ADDING_TO_CART`,
    REMOVING_FROM_CART: `REMOVING_FROM_CART`,
}

export const PopUpTitles = {
    ADDING_TO_CART: `Добавить товар в корзину`,
    REMOVING_FROM_CART: `Удалить этот товар?`,
    SUCCESS_MESSAGE: `Товар успешно добавлен в корзину`
}


export const AppRoute = {
    CATALOG: `/`,
    CART: `/cart`
};

export const PageTitles = {
    CATALOG: `Каталог гитар`,
    CART: `Корзина`
}

export const Coupons = {
    GITARAHIT: {
        maxPercent: 10,
        fixSum: 0
    },
    SUPERGITARA : {
        maxPercent: 0,
        fixSum: 700
    },
    GITARA2020: {
        maxPercent: 30,
        fixSum: 3000
    },
}

export const SortEnum = {
    byPrice: `byPrice`,
    byRating: `byRating`
}

export const sortType = {
    byPrice: `по цене`,
    byRating: `по популярности`
};

export const sortMethod = {
    up: `по возрастанию`,
    down: `по убыванию`
};

export const FilterEnum = {
    sum: `sum`,
    types: `types`,
    strings : `strings`
}
