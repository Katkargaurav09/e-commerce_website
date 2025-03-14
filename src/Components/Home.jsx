import React from "react";
import men1 from "../images/home-photo-1-257jNod0.webp";
import men2 from "../images/home-photo-2--o4d97Ez.webp";
import women from "../images/home-photo-3-AyMlcsjR.webp";
import { useNavigate } from "react-router";

const Home = () => {
  let Navigate = useNavigate();
  return (
    <div className="home">
      <div className="home-info">
        <section className="info">
          <h2>
            Experience the height of fashion with our exquisite designer pieces.
          </h2>
          <p>
            Where style, sophistication, exclusivity is the forefront of our
            collection. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repellat quaerat nostrum quia nam earum, libero, expedita impedit
            delectus provident quo eveniet.
          </p>
          <button
            onClick={() => {
              Navigate("/products");
            }}
          >
            Discover Our Products
          </button>
        </section>
        <section className="img">
          <div className="img-men">
            <div className="men1 men"></div>
            <div className="men2 men"></div>
          </div>
          <div className="img-women">
            <div className="women"></div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
