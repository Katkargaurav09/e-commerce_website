import React, { useState } from "react";
import UserContext from "../Context/UserContext";

const UserContextProvider = ({ children }) => {
  let [product, setProduct] = useState([]);
  return (
    <UserContext.Provider value={{ product, setProduct }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
