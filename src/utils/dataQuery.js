import DATA from "../data";

const getShopNames = () => {
    const shopNames = [];
    DATA.forEach((data) => {
        if (shopNames.includes(data.shopName)) return;
        shopNames.push(data.shopName);
    });
    return shopNames;
};

export const getShopMenu = (shopName) => {
    return DATA.filter((val) => val.shopName === shopName);
};

export default getShopNames;
