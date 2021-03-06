import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMaxPrice, getMinPrice} from "../../util";
import {changeFilterPrice} from "../../store/action";

const PriceFilter = () => {
    const dispatch = useDispatch();

    const {products} = useSelector((state) => state.CATALOG);

    const min = getMinPrice(products);
    const max = getMaxPrice(products);

    const [minSum, setMinSum] = useState(``);
    const [maxSum, setMaxSum] = useState(``);

    const handleChangeMinSum = (evt) => {
       setMinSum(evt.target.value);
    }

    const handleChangeMaxSum = (evt) => {
        setMaxSum(evt.target.value)
    }

    const handleBlurInput = (evt) => {
        if (evt.target.id === "minSum") {
            if (evt.target.value !== "") {
                if (evt.target.value < min) {
                    setMinSum(min);
                    dispatch(changeFilterPrice(evt.target.id, min));
                }
                if (Number(evt.target.value) > Number(maxSum) && maxSum !== "") {
                    setMinSum(maxSum);
                    dispatch(changeFilterPrice(evt.target.id, Number(maxSum)));
                }
                if (Number(evt.target.value) > max && maxSum === "") {
                    setMinSum(max);
                    dispatch(changeFilterPrice(evt.target.id, max));
                }
                if (Number(evt.target.value) > 0 && Number(evt.target.value) > min && ((Number(evt.target.value) < Number(maxSum) && maxSum !== "")|| (maxSum === "" && Number(evt.target.value) < max))) {
                    setMinSum(evt.target.value);
                    dispatch(changeFilterPrice(evt.target.id, Number(evt.target.value)));
                }
            }
            if (evt.target.value === "") {
                setMinSum("");
                dispatch(changeFilterPrice(evt.target.id, min));
            }
        }

        if (evt.target.id === "maxSum") {
            if (evt.target.value !== "") {
                if (evt.target.value > max) {
                    setMaxSum(max);
                    dispatch(changeFilterPrice(evt.target.id, max));
                }
                if (Number(evt.target.value) < Number(minSum) && minSum !== "") {
                    setMaxSum(minSum);
                    dispatch(changeFilterPrice(evt.target.id, Number(minSum)));
                }
                if (Number(evt.target.value) < min && minSum === "") {
                    setMaxSum(min);
                    dispatch(changeFilterPrice(evt.target.id, min));
                }
                if (Number(evt.target.value) > 0 && Number(evt.target.value) < max && ((Number(evt.target.value) > Number(minSum) && minSum !== "") || (minSum === "" && Number(evt.target.value) > min))) {
                    dispatch(changeFilterPrice(evt.target.id, Number(evt.target.value)));
                }
            }
            if (evt.target.value === "") {
                setMaxSum("");
                dispatch(changeFilterPrice(evt.target.id, max));
            }
        }
    }

    return <div className="filter__block-item price">
        <label className="visually-hidden" htmlFor="minSum">????</label>
        <input className="price__input"
               type="number"
               id="minSum"
               name="minSum"
               min={min}
               max={max}
               placeholder={min}
               value={minSum}
               onChange={handleChangeMinSum}
               onBlur={handleBlurInput}
               aria-label="?????????????????????? ????????????????"/>
        <label className="visually-hidden" htmlFor="maxSum">????</label>
        <input className="price__input"
               type="number"
               id="maxSum"
               name="maxSum"
               min={min}
               max={max}
               placeholder={max}
               value={maxSum}
               onChange={handleChangeMaxSum}
               onBlur={handleBlurInput}
               aria-label="???????????????????????? ????????????????"/>
    </div>
}

export default PriceFilter;
