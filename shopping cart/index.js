
const openShopping = document.querySelector(".shopping");
const closeShopping = document.querySelector(".closeShopping");
const list = document.querySelector(".list");
const listCart = document.querySelector(".list-cart");
const total = document.querySelector(".total");
const body = document.querySelector("body");
const quantity = document.querySelector(".quantity");

openShopping.addEventListener("click", () => {
    body.classList.add("active");
});

closeShopping.addEventListener("click", () => {
    body.classList.remove("active");
});

let products = [
    {
        id: 1,
        name: "product 1",
        images: "sneaker4.png",
        price: 2000
    },
    {
        id: 2,
        name: "PRODUCT 2",
        images: "sneaker5.png",
        price: 2500
    },
    {
        id: 3,
        name: "PRODUCT 3",
        images: "sneaker6.png",
        price: 3000
    }, 
    {
        id: 4,
        name: "PRODUCT 4",
        images: "sneaker7.png",
        price: 3500
    },
    {
        id: 5,
        name: "PRODUCT 5",
        images: "sneaker8.png",
        price: 4000
    },
    {
        id: 6,
        name: "PRODUCT 6",
        images: "sneakers3.jpg",
        price: 4500
    }
];

let listCarts = [];

const initApp = () => {
    products.forEach((value, key) => { 
        let newDiv = document.createElement("div");
        newDiv.classList.add("items");
        newDiv.innerHTML = `
            <img src="images/${value.images}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCart(${key})">Add To Cart</button>
        `;
        list.appendChild(newDiv);
    });
};

const addToCart = (key) => {
    listCarts.push(products[key]);
    updateCart();
};

const updateCart = () => {
    listCart.innerHTML = "";
    let totalPrice = 0;
    listCarts.forEach((product) => {
        totalPrice += product.price;
        let newCartItem = document.createElement("li");
        newCartItem.textContent = `${product.name} - ${product.price.toLocaleString()}`;
        listCart.appendChild(newCartItem);
    });
    total.textContent = totalPrice.toLocaleString();
    quantity.textContent = listCarts.length;
};

initApp();

