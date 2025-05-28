// ShoppingCart.jsx
import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([
    { id: 1, name: 'T-Shirt', price: 19.99, quantity: 2 },
    { id: 2, name: 'Jeans', price: 49.99, quantity: 1 },
    { id: 3, name: 'Sneakers', price: 89.99, quantity: 1 }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Calculate total price
  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < items.length; i++) { // Fixed: use < instead of <=
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

  // Update item quantity
  function updateQuantity(itemId, newQuantity) {
    if (newQuantity >= 0) {
      const updatedItems = items.map(item => {
        if (item.id == itemId) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setItems(updatedItems);
    }
  }

  // Apply coupon discount
  function applyCoupon() {
    if (couponCode === 'SAVE10') {
      setDiscount(10);
    } else if (couponCode === 'SAVE20') {
      setDiscount(20);
    } else {
      alert('Invalid coupon code');
    }
  }

  // Handle adding a new item (hardcoded for demo)
  function handleAddNewItem() {
    const newItem = {
      id: Date.now(),
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
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${item.price * item.quantity}</p>
              
              <button 
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
              
              <button 
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
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
        <h2>Total: ${calculateTotal()}</h2>
        
        <div className="coupon-section">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button onClick={applyCoupon}>Apply Coupon</button>
        </div>
        
        <button onClick={handleAddNewItem}>
          Add Sample Item (Hat)
        </button>
        
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default ShoppingCart;