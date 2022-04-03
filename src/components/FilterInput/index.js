import React from "react";
import "./index.css";

function FilterInput({ handleFilterInput, filterInput, className }) {
    return (
        <form>
            <input
                id="filter-input"
                type="search"
                className={`filter-input ${className}`}
                placeholder="Search for the toppings you like 🔎"
                aria-label="Search"
                onChange={handleFilterInput}
                value={filterInput}
            />
        </form>
    );
}

export default FilterInput;
