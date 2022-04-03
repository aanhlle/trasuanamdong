import { useState } from "react";
import ProductMenu from "./pages/ProductMenu";
import SideBar from "./pages/SideBar";

function App() {
    const [shopName, setShopName] = useState("Ding Tea");
    const [sortType, setSortType] = useState("name-asc");
    const [filterInput, setFilterInput] = useState("");

    const handleChooseShop = (e) => {
        setShopName(e.target.innerHTML);
        setSortType("name-asc");
        setFilterInput("");
    };

    const handleSort = (e) => {
        setSortType(e.target.value);
    };

    const handleFilterInput = (e) => {
        setFilterInput(e.target.value);
    };
    return (
        <main className="d-flex">
            <SideBar handleChooseShop={handleChooseShop} shopName={shopName} />

            <ProductMenu
                shopName={shopName}
                handleSort={handleSort}
                handleFilterInput={handleFilterInput}
                sortType={sortType}
                filterInput={filterInput}
            />
        </main>
    );
}

export default App;
