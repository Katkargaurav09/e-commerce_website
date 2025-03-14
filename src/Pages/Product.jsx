import React, { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import UserContext from "../Context/UserContext";
import { FaCheckCircle } from "react-icons/fa";


const Men = () => {
  const [data, setData] = useState([]);
  const [isMenChecked, setIsMenChecked] = useState(false);
  const [isWomenChecked, setIsWomenChecked] = useState(false);
  let { setProduct } = useContext(UserContext);
  const [popupMessage, setPopupMessage] = useState(""); // Popup message state
  const [showPopup, setShowPopup] = useState(false); // Control popup visibility

  // Fetch the product data from api
  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch("https://fakestoreapi.com/products");
      let fD = await response.json();
      setData(fD);
    };
    fetchProducts();
  }, []);

  // Handle checkbox changes
  const handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (id === "man") {
      setIsMenChecked(checked);
    } else if (id === "women") {
      setIsWomenChecked(checked);
    }
  };

  // Filter products based on checkboxes
  const filteredData = data.filter((item) => {
    if (isMenChecked && !isWomenChecked)
      return item.category === "men's clothing";
    if (!isMenChecked && isWomenChecked)
      return item.category === "women's clothing";
    if ((!isMenChecked && !isWomenChecked) || (isMenChecked && isWomenChecked))
      return item.category.includes("clothing"); // Show all clothing items
    return false;
  });

  // Cart product
  const addToCart = (product) => {
    setProduct((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      const updatedCart = exists
        ? prevCart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...prevCart, { ...product, qty: 1 }];

      setShowPopup(true);

      // Hide the popup after 2 seconds
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);

      return updatedCart;
    });
  };

  return (
    <div className="product">
      {/* category option for clothing */}
      <div className="category-option">
        <h4>Category</h4>
        <div className="select-category">
          <span className="category-option1">
            <input
              type="checkbox"
              id="man"
              checked={isMenChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="man">Men</label>
          </span>
          <span className="category-option1">
            <input
              type="checkbox"
              id="women"
              checked={isWomenChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="women">Women</label>
          </span>
        </div>
      </div>

      {/* fetch product data display */}
      <div className="product-details">
        {filteredData.map((product) => {
          let { title, id, price, description, image } = product;
          return (
            <div className="product-card" key={id}>
              <div className="product-img">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description.slice(0, 100) + "..."}</p>
              <span className="cart-data">
                <p>$ {price}</p>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
                <div className="icon">
                  <CiHeart />
                </div>
              </span>
            </div>
          );
        })}
      </div>
      {/* Popup Notification */}
      {showPopup && (
        <div className="popup-message">
          <p>
            <FaCheckCircle className="check" /> Added to cart!
          </p>
        </div>
      )}
    </div>
  );
};

export default Men;
