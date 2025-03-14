import React, { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import UserContext from "./../Context/UserContext";

const Men = () => {
  let [data, setData] = useState([]);
  let [cartData, setCartData] = useState([]);
  let [isMenChecked, setIsMenChecked] = useState(true);
  let [isWomenChecked, setIsWomenChecked] = useState(false);
  let { setProduct } = useContext(UserContext);

  // Fetch the product data from api
  useEffect(() => {
    let product = async () => {
      let response = await window.fetch("https://fakestoreapi.com/products");
      let fD = await response.json();
      setData(fD);
    };
    product();
  }, []);

  // Handle checkbox changes
  let handleCheckboxChange = (event) => {
    const { id, checked } = event.target;
    if (id === "man") setIsMenChecked(checked);
    else if (id === "women") setIsWomenChecked(checked);
  };

  // Filter the product based on checkbox
  const filteredData = data.filter((item) => {
    if (isMenChecked && !isWomenChecked)
      return item.category === "men's clothing";
    if (!isMenChecked && isWomenChecked)
      return item.category === "women's clothing";
    if ((!isMenChecked && !isWomenChecked) || (isMenChecked && isWomenChecked))
      return item.category.includes("clothing");
    return false;
  });

  const addToCart = (product) => {
    setProduct((prevCart) => {
      const exists = prevCart.find((item) => item.id === product.id);
      return exists
        ? prevCart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        : [...prevCart, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="product">
      {/* category option for clothing  */}
      <div className="category-option">
        <h4>Category</h4>
        <div className="select-category">
          <span className="category-option1">
            <input
              type="checkbox"
              name="man"
              id="man"
              checked={isMenChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="man">Men</label>
          </span>
          <span className="category-option1">
            <input
              type="checkbox"
              name="women"
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
        {" "}
        {filteredData.map((product) => {
          let { title, id, price, description, image } = product;

          return (
            <div className="product-card" key={id}>
              <div className="product-img">
                <img src={image} alt={id} />
              </div>
              <h3>{title} </h3>
              <p>{description.slice(0, 100) + "..."} </p>
              <span className="cart-data">
                <p>$ {price} </p>
                <button onClick={() => addToCart(product)}>Add To Cart</button>
                <div className="icon">
                  <CiHeart />
                </div>
              </span>
            </div>
          );
        })}{" "}
      </div>
    </div>
  );
};

export default Men;
