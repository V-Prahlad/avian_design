import React, { useState, useEffect } from "react";
import { getHiredUserFromLocalStorage } from "../Utility";
import Card from "./Card";
import "./Home.css";

const Cart = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    setUserData(getHiredUserFromLocalStorage());
  }, []);

  return (
    <div id="container">
      <div id="home">
        {userData.map((user, index) => (
          <Card user={user} key={index} isHired={true}></Card>
        ))}
      </div>
    </div>
  );
};

export default Cart;
