import React, { useState } from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import "./Cart.css";
import dabeli from './dabeli.jpg'

const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            name: "Dabeli",
            size: "Regular",
            description: " Delicious Dabeli",
            price: 300,
            quantity: 1,
            image: dabeli
        }
    ]);

    const [promoCode, setPromoCode] = useState("");

    const increaseQty = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCartItems((items) =>
            items.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((items) => items.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );
    const shipping = cartItems.length > 0 ? 10 : 0;
    const taxes = cartItems.length > 0 ? subtotal * 0.05 : 0;
    const discount = 0;
    const total = subtotal + shipping + taxes - discount;

    return (
        <div className="cart-page">
            <div className="cart-container">
                <h1 className="cart-title">Cart</h1>

                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} className="cart-img" />

                        <div className="cart-details">
                            <p className="cart-size">Size: {item.size}</p>
                            <h2 className="cart-name">{item.name}</h2>
                            <p className="cart-desc">{item.description}</p>
                        </div>

                        <div className="cart-actions">
                            <button
                                className="qty-btn"
                                onClick={() => decreaseQty(item.id)}
                            >
                                <FaMinus />
                            </button>
                            <span className="qty-value">{item.quantity}</span>
                            <button
                                className="qty-btn"
                                onClick={() => increaseQty(item.id)}
                            >
                                <FaPlus />
                            </button>
                        </div>

                        <button
                            className="remove-btn"
                            onClick={() => removeItem(item.id)}
                        >
                            <FaTimes />
                        </button>
                    </div>
                ))}

                <div className="promo-section">
                    <p className="promo-label">Promo Code</p>
                    <input
                        type="text"
                        placeholder="Enter your promo code"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="promo-input"
                    />
                </div>

                <div className="summary-box">
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span>₹{shipping.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Taxes (5%)</span>
                        <span>₹{taxes.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Discount</span>
                        <span>- ₹{discount.toFixed(2)}</span>
                    </div>
                    <hr />
                    <div className="summary-total">
                        <span>Total</span>
                        <span>₹{total.toFixed(2)}</span>
                    </div>
                </div>

                <button className="place-order-btn">Place Order</button>
            </div>
        </div>
    );
};

export default Cart;
