import React, { useState, useEffect } from "react";
import Card from "./Card";
import "./Home.css";
const axios = require("axios");

const url = "https://randomuser.me/api//?results=20";

const Home = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        let users = [];
        response.data.results.map((user) => {
          let userObj = {
            id: user.login.uuid,
            thumbnail: user.picture.thumbnail,
            profile: user.picture.medium,
            fullName: user.name.first + " " + user.name.last,
            email: user.email,
            phone: user.phone,
            city: user.location.city,
          };
          users.push(userObj);
        });
        setUserData(users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div id="container">
      <div id="home">
        {userData.map((user, index) => (
          <Card user={user} key={index} isHired={false}></Card>
        ))}
      </div>
    </div>
  );
};

export default Home;
