import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "../css/Home.css";

function home() {
  return (
    <div className="main-page">
      <h1>Welcome to E-sahayak</h1>
      <h3>
        A site made for all local shop owners to keep track of their products.
      </h3>
      <div className="options">
        <Link
          to="/owner/options"
          style={{ textDecoration: "none" }}
          className="shop-owner"
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="shop-owner"
          >
            Shop-Owner
          </Button>
        </Link>

        <Link
          to="/seller/options"
          style={{ textDecoration: "none" }}
          className="product-seller"
        >
          <Button size="large" variant="contained" color="primary">
            Product-Seller
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default home;
