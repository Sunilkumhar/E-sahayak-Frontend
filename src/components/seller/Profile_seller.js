import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import "../../css/seller/Profile_seller.css";

import axios from "../../axios";
import { BASE_URL } from "../../baseURL";

function Profile_seller() {
  const [user, setuser] = useState([]);

  useEffect(() => {
    axios
      .get(`/buyer/${localStorage.getItem("id")}`)
      .then((res) => {
        console.log(res.data);
        setuser(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);

  return (
    <div className="seller-profile">
      <img src={`${BASE_URL}/${user.seller_image}`} alt="" />
      <p>Name : {user.seller_name}</p>
      <p>Email : {user.seller_email}</p>
      <p>Phone : {user.seller_phone}</p>
      <p>Shop Adress : {user.shop_address}</p>
      <p>UPI : {user.seller_upi}</p>
      <div className="edit-links">
        <Link
          to="/seller/profile/edit"
          style={{ textDecoration: "none" }}
          className="seller-edit"
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
          to="/seller/addnew"
          style={{ textDecoration: "none" }}
          className="addnew-pdt"
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="shop-owner"
          >
            Add Product
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Profile_seller;
