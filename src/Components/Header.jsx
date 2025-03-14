import React, { useContext, useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import { CiHeart } from "react-icons/ci";
import { GiShoppingBag } from "react-icons/gi";
import profile from "../images/profile.jpg";
import { CiShoppingCart } from "react-icons/ci";
import { GoX } from "react-icons/go";
import UserContext from "./../Context/UserContext";
import { MdCancel } from "react-icons/md";

const Header = () => {
  let Navigate = useNavigate();
  let [display, setDisplay] = useState(false);
  let [cart, setCart] = useState([]);
  const cartRef = useRef(null);
  let { product, setProduct } = useContext(UserContext);
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  let handleClick = () => {
    cartRef.current.style.display = "block";
  };
  let handleCancel = () => {
    cartRef.current.style.display = "none";
  };

  useEffect(() => {
    setCart(product);
  }, [product]);

  const removeFromCart = (id) => {
    setProduct((prevCart) => prevCart.filter((item) => item.id !== id));
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  // Function to calculate total price
  const getTotalPrice = () => {
    return cart.length > 0
      ? cart.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
      : 0.0;
  };

  return (
    <header>
      <div className="display-header">
        <div className="logo">
          <h1>
            <NavLink to={"/"}>LOGO</NavLink>
          </h1>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to={"/"}>HOME</NavLink>
            </li>
            <li>
              <NavLink to={"/men"}>MEN</NavLink>
            </li>
            <li>
              <NavLink to={"/women"}>WOMEN</NavLink>
            </li>
            <li>
              <NavLink to={"/about-us"}>ABOUT</NavLink>
            </li>
          </ul>
        </div>
        <div className="data-user">
          <div className="user">
            <p>WELCOME, GUEST</p>
            <img src={profile} alt="" />
          </div>
          <div className="icon">
            <CiHeart />
            <GiShoppingBag onClick={handleClick} />
          </div>
        </div>
      </div>
      <div className="display-cart" ref={cartRef}>
        <div className="cancel">
          <GoX className="cancel-icon" onClick={handleCancel} />
        </div>
        <div className="cart-info">
          <CiShoppingCart className="icon" />
          <p>Your Shopping Carts</p>
        </div>
        <div className="display-product-cart">
          {cart && cart.length > 0 ? (
            <div className="product-cart-details">
              {cart.map((item, index) => {
                let { title, id, price, description, image, category, qty } =
                  item;
                return (
                  <div className="cart-products">
                    <img src={image} alt={id} className="cart-images" />
                    <div className="cart-item-info">
                      <h2>{title}</h2>
                      <p> Category : {category} </p>
                      <p className="qty">
                        Qty :
                        <input
                          type="number"
                          name="qty"
                          id="qty"
                          value={item.qty}
                          min="1"
                          onChange={(e) => {
                            const newQty = Math.max(
                              1,
                              parseInt(e.target.value) || 1
                            );
                            setCart((prevCart) =>
                              prevCart.map((cartItem) =>
                                cartItem.id === item.id
                                  ? { ...cartItem, qty: newQty }
                                  : cartItem
                              )
                            );
                          }}
                        />
                      </p>
                    </div>
                    <p className="prices">$ {(price * qty).toFixed(2)}</p>
                    <GoX
                      className="cancel-icon1"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <p>Your cart is empty :(</p>
          )}
        </div>
        <div className="display-checkout">
          <div className="checkout-info">
            <p>Checkout</p>
            <p>$ {getTotalPrice()}</p>
          </div>
          <div className="checkout-button">
            <button
              onClick={() => {
                Navigate("/checkout");
              }}
            >
              Go To Checkout
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="popup-message">
          <p>
            <MdCancel className="cancelicon"/> Removed From cart!
          </p>
        </div>
      )}
    </header>
  );
};

export default Header;
