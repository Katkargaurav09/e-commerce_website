import React from "react";
import clothe from "../images/clothe.jpg";

const About = () => {
  return (
    <div className="about-us">
      <aside className="img">
        <img src={clothe} alt="Clothe Image" />
      </aside>
      <aside className="story">
        <h1>Our Story</h1>
        <hr />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
          accusantium vel, veniam asperiores dolor dicta cumque repellat labore
          harum dolore consequatur mollitia animi omnis. Neque fuga nostrum
          tempore maiores, ipsum maxime vel corporis rem, omnis quis itaque
          perferendis. Libero, impedit perspiciatis sit voluptatum voluptatibus
          repudiandae ex in mollitia at ipsam!
        </p>
      </aside>
    </div>
  );
};

export default About;
