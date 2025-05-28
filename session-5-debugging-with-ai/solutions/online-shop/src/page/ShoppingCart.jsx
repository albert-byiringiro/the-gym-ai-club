import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'T-Shirt', price: 19.99, quantity: 2 },
    { id: 2, name: 'Jeans', price: 49.99, quantity: 1 },
    { id: 3, name: 'Sneakers', price: 89.99, quantity: 1 }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Calculate total price - FIXED: Changed <= to <
  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < items.length; i++) { // Fixed: < instead of <=
      total += items[i].price * items[i].quantity;
    }
    return total - discount;
  }

  // Add item to cart
  function addItem(newItem) {
    setItems([...items, newItem]);
  }

  // Remove item from cart
  function removeItem(itemId) {
    const updatedItems = items.filter(item => item.id !== itemId);
    setItems(updatedItems);
  }

  // Update item quantity - FIXED: Strict equality and zero handling
  function updateQuantity(itemId, newQuantity) {
    if (newQuantity > 0) { // Changed to > 0 to prevent zero quantities
      const updatedItems = items.map(item => {
        if (item.id === itemId) { // Fixed: === instead of ==
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setItems(updatedItems);
    } else if (newQuantity === 0) {
      // Remove item when quantity reaches 0
      removeItem(itemId);
    }
  }

  // Apply coupon discount - FIXED: Assignment to comparison
  function applyCoupon() {
    if (couponCode === 'SAVE10') { // Fixed: === instead of =
      setDiscount(10);
      alert('$10 discount applied!');
    } else if (couponCode === 'SAVE20') {
      setDiscount(20);
      alert('$20 discount applied!');
    } else {
      alert('Invalid coupon code');
    }
  }

  // Handle adding a new item (hardcoded for demo)
  function handleAddNewItem() {
    const newItem = {
      id: Date.now(), // Simple ID generation
      name: 'Hat',
      price: 24.99,
      quantity: 1
    };
    addItem(newItem);
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      
      <div className="cart-items">
        {items.length > 0 ? (
          items.map(item => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
              
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1} // Prevent going below 1
              >
                -
              </button>
              
              <button onClick={() => removeItem(item.id)}>
                Remove
              </button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <div className="cart-summary">
        <h2>Total: ${calculateTotal().toFixed(2)}</h2>
        
        <div className="coupon-section">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button onClick={applyCoupon}>Apply Coupon</button>
          {discount > 0 && (
            <p>Discount applied: -${discount.toFixed(2)}</p>
          )}
        </div>
        
        <button onClick={handleAddNewItem}>
          Add Sample Item (Hat)
        </button>
        
        <button 
          className="checkout-btn"
          disabled={items.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;