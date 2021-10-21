import React from "react";
import {GuitarName} from "../../const";
import {priceFormat} from "../../util";
import {productPropTypes} from "../../prop-types";

const ProductInfo = ({product}) => {
    return <div className="modal__product-info product-info">
        <p className="product-info__title">{product.type} {product.name}</p>
        <p className="product-info__article">Артикул: {product.code}</p>
        <p className="product-info__info">{GuitarName[product.type]}, {product.strings} струнная</p>
        <p className="product-info__price">Цена: {priceFormat(product.price)} ₽</p>
    </div>
}

ProductInfo.propTypes = productPropTypes;

export default ProductInfo;
