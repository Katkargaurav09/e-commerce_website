import React from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Routing from "./Routing/Routing";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <Routing />
      <Footer />
    </div>
  );
};

export default App;
