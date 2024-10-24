let products = [];

fetch('./data/products.json')
    .then(response => {
        if(!response.ok) {
            throw new Error('Error loading Products');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Vista en consola, quitar mas adelante.
        products = data;
    })
    .catch(error => {
        console.error('Error loading prducts:', error);
    })

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    for (let product of products) {
        if (product.id === id)
        {
            cart.push(product);
            cart.forEach(product => console.log(product.name));
            // console.log(cart);
            calculateTotal(cart);
            break;
        }
    }
}

// Exercise 2
function cleanCart() {
    let cartContent = document.getElementById('cart_list');
    if (cartContent) {
        cartContent.innerHTML = '';
    }
    total = document.getElementById('total_price');
    if (total != 0) {
        total = 0;
        total_price.innerHTML = total;
    }
}

// Exercise 3
function calculateTotal(cart) {
    // Calculate total price of the cart using the "cartList" array
    total = cart.reduce((accumulated, product) => accumulated + product.price, 0);
    // console.log(`Total value: ${total}`);
    total_price.innerHTML = total;
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}