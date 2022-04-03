import React from "react";
import FilterInput from "../../components/FilterInput";
import Sort from "../../components/Sort";
import ProductItems from "../ProductItems";

function ProductMenu({
    shopName,
    handleSort,
    handleFilterInput,
    filterInput,
    sortType,
}) {
    return (
        <div className="w-100 m-3 p-3 product-container">
            <div className="text-center fs-3 fw-bold product-title">
                {`${shopName} Menu`}
            </div>

            <div className="d-flex flex-column flex-md-row justify-content-between p-3">
                <FilterInput
                    handleFilterInput={handleFilterInput}
                    filterInput={filterInput}
                    className="form-control"
                />
                <Sort handleSort={handleSort} sortType={sortType} />
            </div>

            <ProductItems
                shopName={shopName}
                sortType={sortType}
                filterInput={filterInput}
            />
        </div>
    );
}

export default ProductMenu;
