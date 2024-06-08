document.addEventListener('DOMContentLoaded', () => {
    // Dropdown for Size Selection
    const sizeDropdown = document.querySelector('.dropdown');
    const sizeNumber = document.querySelector('.sizeNumber');
    const dropItems = document.querySelectorAll('.dropItem');

    sizeDropdown.addEventListener('click', () => {
        sizeDropdown.classList.toggle('open');
    });

    dropItems.forEach(item => {
        item.addEventListener('click', (e) => {
            sizeNumber.textContent = e.target.textContent;
            sizeDropdown.classList.remove('open');
        });
    });

    // Quantity Increment/Decrement
    const quantityInput = document.querySelector('.inputQuantity');
    const plusButton = document.querySelector('.btnQuantity.plus');
    const minusButton = document.querySelector('.btnQuantity.minus');
    const errorText = document.querySelector('.error');
    const maxStock = 5;

    plusButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue < maxStock) {
            quantityInput.value = currentValue + 1;
            errorText.style.display = 'none';
        } else {
            errorText.style.display = 'block';
        }
    });

    minusButton.addEventListener('click', () => {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
            errorText.style.display = 'none';
        }
    });

    // Add to Cart Functionality
    const addToCartButton = document.querySelector('.btn.add');
    const itemNumber = document.querySelector('.itemNumber');
    const shoppingCartQuantity = document.querySelector('.shoppingQuantity');

    addToCartButton.addEventListener('click', () => {
        const quantity = parseInt(quantityInput.value);
        itemNumber.textContent = quantity;
        shoppingCartQuantity.textContent = quantity;
    });

    // Toggle Shopping Cart
    const shoppingIcon = document.querySelector('.shoppingIcon');
    const shoppingMenu = document.querySelector('.shoppingMenu');

    shoppingIcon.addEventListener('click', () => {
        shoppingMenu.classList.toggle('open');
    });

    // Empty Cart
    const emptyCartButton = document.querySelector('.emptyCart');

    emptyCartButton.addEventListener('click', () => {
        itemNumber.textContent = '0';
        shoppingCartQuantity.textContent = '0';
        quantityInput.value = '1';
    });
});
