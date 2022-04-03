const sortNameByAscending = (shopMenu) => {
    return shopMenu.sort((a, b) => a.productName.localeCompare(b.productName));
};

export const sortNameByDescending = (shopMenu) => {
    return shopMenu.sort((a, b) => b.productName.localeCompare(a.productName));
};

export const sortPriceByAscending = (shopMenu) => {
    return shopMenu.sort((a, b) => a.price - b.price);
};

export const sortPriceByDescending = (shopMenu) => {
    return shopMenu.sort((a, b) => b.price - a.price);
};

export default sortNameByAscending;
