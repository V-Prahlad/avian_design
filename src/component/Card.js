import React, { useState } from "react";
import "./Card.css";
import { FaTimes } from "react-icons/fa";
import {
  addHiredUserToLocalStorage,
  getHiredUserFromLocalStorage,
} from "../Utility";

function Card({ user, isHired }) {
  const [hiredStatus, setHiredStatus] = useState(false);

  const editProfile = (user) => {
    console.log(user);
    window.location.href = "/crud?id=" + user.id;
    // alert(`${user.fullName} is hired!`);
  };

  const getHiredStatus = (user) => {
    let users = getHiredUserFromLocalStorage();
    users.map((user) => {
      if (user.id === user.id) {
        return true;
      }
    });
    return false;
  };

  const getHired = (user) => {
    setHiredStatus(true);
    console.log(hiredStatus);
    console.log("Hello");
    alert(`${user.fullName} is hired!`);

    addHiredUserToLocalStorage(user);
  };

  return (
    <div>
      {console.log("hiredStatus " + hiredStatus)}

      <div id="card">
        <div className="card__thumbnail">
          <img src={user.thumbnail} alt="" />
        </div>
        <div className="card__image">
          <img src={user.profile} alt="" />
        </div>
        <div className="card__detail">
          <span className="detail__name">{user.fullName}</span>
          <span className="detail__email">{user.email}</span>
          <span className="detail__phone">{user.phone}</span>
          <span className="detail__city">{user.city}</span>
        </div>
        <span className="card__closeButton">
          <FaTimes />
        </span>
        <div className="card__button">
          {isHired ? (
            <button onClick={() => editProfile(user)}>Edit Profile</button>
          ) : (
            <button
              disabled={getHiredStatus(user) || hiredStatus}
              onClick={() => getHired(user)}
            >
              {hiredStatus ? "Hired" : "Hire"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
