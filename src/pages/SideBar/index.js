import React from "react";
import "./index.css";
import getShopNames from "../../utils/dataQuery";

const shopNames = getShopNames();
function SideBar({ handleChooseShop, shopName }) {
    return (
        <div
            id="sidebar"
            className="d-flex flex-column align-self-stretch sidebar"
        >
            <h4 className="text-white text-center m-4 fw-bold">
                Milk Tea Store
            </h4>

            <ul className="nav flex-column">
                {shopNames.map((name, idx) => {
                    return (
                        <button
                            id={shopName === name ? "sidebar-selected" : ""}
                            onClick={handleChooseShop}
                            key={idx}
                        >
                            {name}
                        </button>
                    );
                })}
            </ul>
        </div>
    );
}

export default SideBar;
