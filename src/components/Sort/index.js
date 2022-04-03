import React from "react";
import "./index.css";

function Sort({ handleSort, sortType }) {
    return (
        <div className="d-flex">
            <label htmlFor="sort" className="fw-bold align-self-center">
                Sort by
            </label>
            <select
                id="sort"
                className="form-select d-inline-block sort-option w-auto ms-3"
                onChange={handleSort}
                value={sortType}
            >
                <option value="name-asc">Name &#xf062;</option>
                <option value="name-dec">Name &#xf063;</option>
                <option value="price-asc">Price &#xf062;</option>
                <option value="price-dec">Price &#xf063;</option>
            </select>
        </div>
    );
}

export default Sort;
