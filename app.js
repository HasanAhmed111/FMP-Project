// var products = [
//     { id: 1, name: 'Product 1', price: 20.00 },
//     { id: 2, name: 'Product 2', price: 15.00 },
//     { id: 3, name: 'Product 3', price: 25.00 }
// ];

// // Display products on the page
// var productList = document.getElementById('product-list');
// products.forEach(function(product) {
//     var productCard = document.createElement('div');
//     productCard.classList.add('product');
//     productCard.innerHTML = `
//         <h3>${product.name}</h3>
//         <p>$${product.price.toFixed(2)}</p>
//         <button onclick="addToCart(${product.id})">Add to Cart</button>
//     `;
//     productList.appendChild(productCard);
// });

// // Shopping cart functionality
// var cartItems = document.getElementById('cart-items');
// var cartTotal = document.getElementById('cart-total');
// var cart = [];

// function addToCart(productId) {
//     var product = products.find(function(p) {
//         return p.id === productId;
//     });
//     cart.push(product);
//     updateCart();
// }

// function updateCart() {
//     cartItems.innerHTML = '';
//     var total = 0;
//     cart.forEach(function(item) {
//         var li = document.createElement('li');
//         li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//         cartItems.appendChild(li);
//         total += item.price;
//     });
//     cartTotal.textContent = total.toFixed(2);
// }






const cartItems = [];

  // Function to add items to the cart
  function addToCart(productName, price) {
    cartItems.push({ productName, price });
    updateCartUI();
  }

  // Function to update the cart UI
  function updateCartUI() {
    const cartList = document.getElementById('cart-items');
    cartList.innerHTML = ''; // Clear the existing items

    let totalBill = 0;

    cartItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
      cartList.appendChild(listItem);
      totalBill+= item.price;
    });
    const totalBillElement = document.getElementById('total-bill');
    totalBillElement.textContent = totalBill.toFixed(2);
  }
  function checkout() {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add some items before checking out.');
    } else {
      alert('Checkout successful! Thank you for your purchase.');
      // In a real application, you would typically redirect to a checkout page and handle payment processing.
    }
  }
  function getTotalBill() {
    return cartItems.reduce((total, item) => total + item.price, 0);
  }