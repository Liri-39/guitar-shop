import React from "react";

const PriceFilter = (handleChangeInput) => {
    return <div className="filter__block-item price">
        <label className="visually-hidden" htmlFor="min">От</label>
        <input className="price__input"
               type="number"
               id="min"
               name="min"
               min={0}
               max={100000}
               placeholder={0}
               value={1000}
               onChange={handleChangeInput}
               aria-label="Минимальное значение"/>
        <label className="visually-hidden" htmlFor="max">До</label>
        <input className="price__input"
               type="number"
               id="max"
               name="max"
               min={0}
               max={100000}
               placeholder={0}
               value={30000}
               onChange={handleChangeInput}
               aria-label="Максимальное значение"/>
    </div>
}

export default PriceFilter;
