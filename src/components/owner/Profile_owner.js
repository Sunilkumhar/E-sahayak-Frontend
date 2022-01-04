import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "../../css/owner/Profile_owner.css";

import axios from "../../axios";
import { BASE_URL } from "../../baseURL";

function Profile_owner() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get(`/${localStorage.getItem("id")}`)
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);

  return (
    <div className="owner-profile">
      <img src={`${BASE_URL}/${user.owner_image}`} alt="" />
      <p>Name : {user.owner_name}</p>
      <p>Email : {user.owner_email}</p>
      <p>Phone : {user.owner_phone}</p>
      <p>Shop Adress : {user.shop_address}</p>
      <p>UPI : {user.owner_upi}</p>
      <div className="edit-links">
        <Link
          to="/owner/profile/edit"
          style={{ textDecoration: "none" }}
          className="owner-edit"
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="shop-owner"
          >
            Edit Profile
          </Button>
        </Link>
        <Link
          to="/owner/profile/addstaff"
          style={{ textDecoration: "none" }}
          className="addnew-pdt"
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="shop-owner"
          >
            Add Staff
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Profile_owner;
