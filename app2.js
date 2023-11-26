function checkout() {
    if (cartItems.length === 0) {
      alert('Your cart is empty. Add some items before checking out.');
    } else {
      alert('Checkout successful! Thank you for your purchase.');
      // In a real application, you would typically redirect to a checkout page and handle payment processing.
    }
  }