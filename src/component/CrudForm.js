import React, { useEffect, useState } from "react";
import { getHiredUserFromLocalStorageFromId } from "../Utility";
import "./CrudForm.css";

function CrudForm() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const id = window.location.href.split("=")[1];
    if (id) {
      const user = getHiredUserFromLocalStorageFromId(id)[0];
      setUserData(user);
    }
  }, []);
  return (
    <div className="crud">
      <div className="crud__main">
        <h1>Edit User Form</h1>

        <div>
          <input
            value={userData.fullName}
            type="text"
            placeholder="Full Name"
          />
        </div>
        <div>
          <input value={userData.city} type="text" placeholder="Full Adress" />
        </div>
        <div>
          <input
            type="email"
            value={userData.email}
            name="email"
            id="email"
            placeholder="Email"
          />
        </div>
        <div>
          <input
            value={userData.phone}
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
          />
        </div>
      </div>
      <div className="form__button">
        <div>
          <button>DELETE</button>
        </div>
        <div>
          <button>SAVE</button>
        </div>
      </div>
    </div>
  );
}

export default CrudForm;
