const products = [
    { name: "GREY SHOES v.1", price: "$84.99", image: "img/other_shoes1.jpeg" },
    { name: "GREY SHOES v.2", price: "$94.99", image: "img/other_shoes2.jpeg" },
    { name: "NAVY SHOES", price: "$120", image: "img/other_shoes3.jpeg" },
    { name: "PURPLE SHOES", price: "$140", image: "img/other_shoes4.jpeg" },
    { name: "LIGHT BLUE SHOES", price: "$149.99", image: "img/other_shoes5.jpeg" },
    { name: "YELLOW SHOES", price: "$99.99", image: "img/other_shoes6.jpeg" },
    { name: "BLUE SHOES", price: "$129.99", image: "img/other_shoes7.jpeg" },
    { name: "RED SHOES", price: "$74.99", image: "img/other_shoes8.jpeg" }
];

const container = document.querySelector(".others-container");

products.forEach((product, index) => {
    const div = document.createElement("div");
    div.classList.add("others");

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("othersimg");
    imgDiv.style.backgroundImage = "linear-gradient(#fff0 0%, #fff0 80%, #fff 100%), url('" + product.image + "')";

    const textDiv = document.createElement("div");
    textDiv.classList.add("otherstext");

    const nameDiv = document.createElement("div");
    nameDiv.classList.add("othersname");
    const nameH2 = document.createElement("h2");
    nameH2.textContent = product.name;
    nameDiv.appendChild(nameH2);

    const priceDiv = document.createElement("div");
    priceDiv.classList.add("othersprice");
    const priceP = document.createElement("p");
    priceP.textContent = product.price;
    priceDiv.appendChild(priceP);

    const cartDiv = document.createElement("div");
    cartDiv.classList.add("otherscart");
    const cartI = document.createElement("i");
    cartI.classList.add("fas", "fa-shopping-cart", "fa-lg");
    cartDiv.appendChild(cartI);
    cartDiv.addEventListener("click", () => {addToCart();});

    textDiv.appendChild(nameDiv);
    textDiv.appendChild(priceDiv);

    div.appendChild(imgDiv);
    div.appendChild(textDiv);
    div.appendChild(cartDiv);

    container.appendChild(div);
});
