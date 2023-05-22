function addToCart(id) {
    let nb_products = parseInt(localStorage.getItem('nb_products')) || 0;
    nb_products += 1;
    localStorage.setItem('nb_products', nb_products);
    localStorage.setItem('product', id + size);
    updateCartQuantity(nb_products);
}

function updateCartQuantity(quantity) {
    const cartQuantityElement = document.getElementById('cart-quantity');
    cartQuantityElement.textContent = " "+quantity;
    cartQuantityElement.style.display = quantity > 0 ? 'inline' : 'none';
}