const wrapper = document.querySelector(".slider-wrapper");
const sliderBtn = document.querySelectorAll(".nav-bottom-items");
const productImg = document.querySelector(".product-img");
const productTitle = document.querySelector(".product-title");
const productPrice = document.querySelector(".product-price");
const colors = document.querySelectorAll(".color");
const sizes = document.querySelectorAll(".size");
const closePaymentBtn = document.querySelector(".close");
const paymentDiv = document.querySelector(".payment");
const productBtn = document.querySelector(".product-btn");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: 109,
        colors: [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: 129,
        colors: [
            {
                code: "black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code: "gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
];

let chosenProduct = products[0];

sliderBtn.forEach((item, index) => {
    item.addEventListener("click", () => {
        // change slider
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change product

        chosenProduct = products[index];

        productTitle.textContent = chosenProduct.title;
        productPrice.textContent = "$" + chosenProduct.price;
        productImg.src = chosenProduct.colors[0].img;
        a;
        colors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
    });
});

colors.forEach((color, index) => {
    color.addEventListener("click", () => {
        productImg.src = chosenProduct.colors[index].img;
    });
});

sizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        sizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });

        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});

closePaymentBtn.addEventListener("click", () => {
    paymentDiv.style.display = "none";
});

productBtn.addEventListener("click", () => {
    paymentDiv.style.display = "flex";
});
