document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartButton = document.getElementById('cart-button');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.querySelector('.close');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutBtn = document.getElementById('checkout-btn');

    document.querySelector('.buy-btn').addEventListener('click', (e) => {
        const name = e.target.getAttribute('data-name');
        const price = parseFloat(e.target.getAttribute('data-price'));

        addToCart(name, price);
        updateCart();
    });

    cartButton.addEventListener('click', () => {
        cartModal.style.display = 'block';
        displayCartItems();
    });

    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if (e.target == cartModal) {
            cartModal.style.display = 'none';
        }
    });

    checkoutBtn.addEventListener('click', () => {
        alert('Thank you for your purchase!');
        cart.length = 0;
        updateCart();
        cartModal.style.display = 'none';
    });

    function addToCart(name, price) {
        for (let item of cart) {
            if (item.name === name) {
                item.quantity++;
                return;
            }
        }
        cart.push({ name, price, quantity: 1 });
    }

    function updateCart() {
        cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        cartTotal.textContent = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    }

    function displayCartItems() {
        cartItems.innerHTML = '';
        for (let item of cart) {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)} x ${item.quantity}`;
            cartItems.appendChild(li);
        }
    }
});
