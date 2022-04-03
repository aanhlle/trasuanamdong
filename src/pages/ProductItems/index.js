import React from "react";

import CardItem from "../../components/CardItem";

import { getShopMenu } from "../../utils/dataQuery";
import sortNameByAscending, {
    sortNameByDescending,
    sortPriceByAscending,
    sortPriceByDescending,
} from "../../utils/menuSort";
import filterToppings from "../../utils/menuFilter";

function ProductItems({ shopName, filterInput, sortType }) {
    const originalMenu = getShopMenu(shopName);
    const shopMenu = filterToppings(originalMenu, filterInput);

    switch (sortType) {
        case "name-asc":
            sortNameByAscending(shopMenu);
            break;
        case "name-dec":
            sortNameByDescending(shopMenu);
            break;
        case "price-asc":
            sortPriceByAscending(shopMenu);
            break;
        case "price-dec":
            sortPriceByDescending(shopMenu);
            break;
        default:
            sortNameByAscending(shopMenu);
    }

    const itemList = shopMenu.map((item, idx) => {
        return <CardItem shopMenu={item} idx={idx} key={item.id} />;
    });
    return (
        <div className="container mt-3">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                {itemList}
            </div>
        </div>
    );
}

export default ProductItems;
