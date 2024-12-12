const menu = [
    {
        name: 'Al Pastor Taco',
        price: 3,
    },
    {
        name: 'Carne Asada Taco',
        price: 4,
    },
    {
        name: 'Vegetarian Taco',
        price: 3,
    },
    {
        name: 'Chorizo Taco',
        price: 4,
    },
    {
        name: 'Nopales (Cactus) Taco',
        price: 5,
    }
];

const card = (name, price) => {
    let div = document.createElement('div');
    div.classList.add('card');
    let item = document.createElement('p');
    item.innerText = name;
    let itemPrice = document.createElement('p');
    itemPrice.innerText = price;
    div.appendChild(item);
    div.appendChild(itemPrice);
    return div;
}

const menuComponent = (content) => {
    content.innerHTML = "";
    let menuTitle = document.createElement("h2");
    menuTitle.classList.add("menu-title");
    menuTitle.innerText = "Menu";
    content.appendChild(menuTitle);
    menu.map((item) => {
        content.appendChild(card(item.name, item.price)) 
    });
}

export { menuComponent };