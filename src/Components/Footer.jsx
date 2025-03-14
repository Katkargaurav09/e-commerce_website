import React from "react";
import { Link } from "react-router";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import SizeGuide from "../images/FEAT_Master_Size_Guide.webp";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <div className="top">
          <div className="categories">
            <h2>Categories</h2>
            <ul>
              <li>
                <Link to={"/about-us"}>About us</Link>
              </li>
              <li>
                <Link>Testimonals</Link>
              </li>
              <li>
                <Link>Contact</Link>
              </li>
              <li>
                <Link>Journal</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="partners">
            <h2>Partners</h2>
            <ul>
              <li>
                <Link>Support</Link>
              </li>
              <li>
                <Link>Shipping & Returns</Link>
              </li>
              <li>
                <Link to={SizeGuide} target="_blank">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link>Product Care</Link>
              </li>
            </ul>
          </div>
          <div className="contact-us">
            <h2>Contact us</h2>
            <ul>
              <li>26A, Pagoda St.TANGS</li>
              <li>Singapore, 058187</li>
            </ul>
            <p>+91 987654321</p>
          </div>
          <div className="subscribe">
            <h2>Subscribe to newsletter</h2>
            <form className="emails">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="ENTER YOUR EMAIL"
              />
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div className="icons">
              <FaFacebook />
              <AiFillTwitterCircle />
            </div>
          </div>
        </div>
        <div className="bottom">
          <span>Copyright XYZ.LTD 2018</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
