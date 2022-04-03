const filterToppings = (shopMenu, input) => {
    let parseInput = input.toLowerCase();
    return shopMenu.filter((item) =>
        item.toppings.toLowerCase().includes(parseInput)
    );
};

export default filterToppings;
