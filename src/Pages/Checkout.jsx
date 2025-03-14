import React, { useContext, useEffect, useState } from "react";
import UserContext from "./../Context/UserContext";

const Checkout = () => {
  let [cart, setCart] = useState([]);
  let { product } = useContext(UserContext);

  useEffect(() => {
    setCart(product);
  }, [product]);

  // Function to calculate total price
  const getTotalPrice = () => {
    return cart.length > 0
      ? cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
      : 0.0;
  };

  return (
    <div className="checkout-page">
      <div className="checkout-info">
        <form action="#">
          <p>Contact Information</p>
          <input type="email" name="email" id="email" placeholder="Email" />
          <p>Shipping Address</p>
          <div className="name">
            <input
              type="text"
              name="fname"
              id="fname"
              placeholder="First Name"
            />
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Last Name"
            />
          </div>
          <input type="text" name="add" id="add" placeholder="Address" />
          <input type="text" name="city" id="city" placeholder="City" />
          <button type="submit">Checkout</button>
        </form>
      </div>
      <div className="summary">
        <div className="summary-title">
          <p>Order Summary</p>
        </div>
        <div className="order-product">
          {cart.map((item, index) => {
            let { title, qty, price } = item;
            return (
              <div>
                <span>
                  {qty} * {title}
                </span>
                <p>$ {price}</p>
              </div>
            );
          })}
        </div>
        <div className="total-product">
          <p>Total</p>
          <p>$ {getTotalPrice()}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
