// ShoppingCart.jsx
import { useEffect, useState } from "react";

function ShoppingCart() {
  const getInitialItems = () => {
    const saved = window.cartData?.items;
    return saved || [
      { id: 1, name: "T-Shirt", price: 19.99, quantity: 2 },
      { id: 2, name: "Jeans", price: 49.99, quantity: 1 },
      { id: 3, name: "Sneakers", price: 89.99, quantity: 1 },
    ];
  };

  const [items, setItems] = useState(getInitialItems);
  const [couponCode, setCouponCode] = useState(window.cartData?.couponCode || "");
  const [discount, setDiscount] = useState(window.cartData?.discount || 0);
  const [couponMessage, setCouponMessage] = useState(window.cartData?.couponMessage || "");

  // Persist data to memory whenever state changes
  useEffect(() => {
    window.cartData = {
      items,
      couponCode,
      discount,
      couponMessage
    };
  }, [items, couponCode, discount, couponMessage]);

  function calculateTotal() {
    let total = 0;
    for (let i = 0; i < items.length; i++) {
      total += items[i].price * items[i].quantity;
    }
    return Math.max(0, total - discount);
  }

 
  function addItem(newItem) {
    const existing = items.find((item) => item.id === newItem.id);
    if (existing) {
      setItems(
        items.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        )
      );
    } else {
      setItems([...items, newItem]);
    }
  }

  
  function removeItem(itemId) {
    const updatedItems = items.filter((item) => item.id !== itemId);
    setItems(updatedItems);

    if (updatedItems.length === 0) {
      setDiscount(0);
      setCouponMessage("");
    }
  }

 
  function updateQuantity(itemId, newQuantity) {
    const updatedItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setItems(updatedItems);
  }

  
  function applyCoupon() {
    const code = couponCode.trim().toUpperCase();
    if (code === "SAVE10") {
      setDiscount(10);
      setCouponMessage("Coupon applied: $10 off!");
    } else if (code === "SAVE20") {
      setDiscount(20);
      setCouponMessage("Coupon applied: $20 off!");
    } else {
      setCouponMessage("");
      alert("Invalid coupon code");
    }
  }

  // Handle adding a new item (hardcoded for demo)
  function handleAddNewItem() {
    const maxId =
      items.length > 0 ? Math.max(...items.map((item) => item.id)) : 0;

    const newItem = {
      id: maxId + 1,
      name: "Hat",
      price: 24.99,
      quantity: 1,
    };
    addItem(newItem);
  }

  function formatPrice(amount) {
    return amount.toFixed(2);
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>

      <div className="cart-items">
        {items.length > 0 ? (
          items.map((item) => (
            <div
              key={item.id}
              className="cart-item"
              style={item.quantity === 0 ? { backgroundColor: "#ffe6e6" } : {}}
            >
              <h3>{item.name}</h3>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Subtotal: ${formatPrice(item.price * item.quantity)}</p>

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

              <button onClick={() => removeItem(item.id)}>Remove</button>
            </div>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>

      <div className="cart-summary">
        <h2>Total: ${formatPrice(calculateTotal())}</h2>

        <div className="coupon-section">
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => setCouponCode(e.target.value)}
          />
          <button onClick={applyCoupon}>Apply Coupon</button>
          {couponMessage && <p>{couponMessage}</p>}
        </div>

        <button onClick={handleAddNewItem}>Add Sample Item (Hat)</button>

        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default ShoppingCart;
