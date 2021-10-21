import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getFilters} from "../../store/catalog/selectors";
import {getMaxPrice, getMinPrice} from "../../util";
import {changeFilter} from "../../store/action";
import {FilterEnum} from "../../const";

const PriceFilter = () => {
    const dispatch = useDispatch();

    const {products} = useSelector((state) => state.CATALOG);
    const activeFilterValues = useSelector(getFilters);

    const min = getMinPrice(products);
    const max = getMaxPrice(products);

    const minSum = activeFilterValues.sum.minSum < min ? min : activeFilterValues.sum.minSum;
    const maxSum = (activeFilterValues.sum.maxSum > max || activeFilterValues.sum.maxSum === 0)? max : activeFilterValues.sum.maxSum;

    const handleChangeMinSum = (evt) => {
        let newValue = evt.target.value;
        if (newValue > activeFilterValues.sum.maxSum) {
            newValue = activeFilterValues.sum.maxSum
        }
        if (newValue < min) {
            newValue = min
        }
        dispatch(changeFilter(FilterEnum.sum, {
            ...activeFilterValues.sum,
            [evt.target.id]: Number(newValue)
        }));
    }

    const handleChangeMaxSum = (evt) => {
        let newValue = evt.target.value;
        if (newValue < activeFilterValues.sum.minSum) {
            newValue = activeFilterValues.sum.minSum
        }
        if (newValue > max) {
            newValue = max
        }
        dispatch(changeFilter(FilterEnum.sum, {
            ...activeFilterValues.sum,
            [evt.target.id]: Number(newValue)
        }));
    }

    return <div className="filter__block-item price">
        <label className="visually-hidden" htmlFor="minSum">От</label>
        <input className="price__input"
               type="number"
               id="minSum"
               name="minSum"
               min={min}
               max={max}
               placeholder={minSum}
               value={minSum}
               onChange={handleChangeMinSum}
               aria-label="Минимальное значение"/>
        <label className="visually-hidden" htmlFor="maxSum">До</label>
        <input className="price__input"
               type="number"
               id="maxSum"
               name="maxSum"
               min={min}
               max={max}
               placeholder={maxSum}
               value={maxSum}
               onChange={handleChangeMaxSum}
               aria-label="Максимальное значение"/>
    </div>
}

export default PriceFilter;
