const PRODUCTS_ON_PAGE = 9;

const NameSpace = {
    CART: `CART`,
    CATALOG: `CATALOG`
};

const GuitarEnum = {
    ACOUSTIC: `ACOUSTIC`,
    ELECTRIC: `ELECTRIC`,
    UKULELE: `UKULELE`,
}

const GuitarType = {
    ACOUSTIC: `Акустические гитары`,
    ELECTRIC: `Электрогитары`,
    UKULELE: `Укулеле`,
}

const GuitarString = {
    ACOUSTIC: [6, 7, 12],
    ELECTRIC: [4, 6, 7],
    UKULELE:  [4],
}

const GuitarName = {
    ACOUSTIC: `Акустическая гитара`,
    ELECTRIC: `Электрогитара`,
    UKULELE: `Укулеле`,
}

const ratings = [
    {rating: 5, title: `perfect`},
    {rating: 4, title: `good`},
    {rating: 3, title: `not bad`},
    {rating: 2, title: `badly`},
    {rating: 1, title: `terribly`},
];

const PopUpType = {
    ADDING_TO_CART: `ADDING_TO_CART`,
    REMOVING_FROM_CART: `REMOVING_FROM_CART`,
}

const PopUpTitle = {
    ADDING_TO_CART: `Добавить товар в корзину`,
    REMOVING_FROM_CART: `Удалить этот товар?`,
    SUCCESS_MESSAGE: `Товар успешно добавлен в корзину`
}

const AppRoute = {
    CATALOG: `/`,
    CART: `/cart`,
    NOT_FOUND: `/404`
};

const PageTitle = {
    CATALOG: `Каталог гитар`,
    CART: `Корзина`
}

const Coupon = {
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

const SortEnum = {
    byPrice: `byPrice`,
    byRating: `byRating`
}

const sortType = {
    byPrice: `по цене`,
    byRating: `по популярности`
};

const sortMethod = {
    up: `по возрастанию`,
    down: `по убыванию`
};

const FilterEnum = {
    sum: `sum`,
    types: `types`,
    strings : `strings`
}

export {Coupon, PageTitle, AppRoute, PopUpTitle, PopUpType, FilterEnum, sortMethod, sortType, SortEnum, PRODUCTS_ON_PAGE, NameSpace, GuitarEnum, GuitarType, GuitarString, GuitarName, ratings};
