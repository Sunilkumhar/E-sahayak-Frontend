import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "../../css/seller/Options_seller.css";

function Options_seller() {
  return (
    <div className="options-seller">
      <div className="options">
        <Link
          to="/seller/login"
          style={{ textDecoration: "none" }}
          className="login-seller-link"
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="login-button"
          >
            Login
          </Button>
        </Link>

        <Link
          to="/seller/register"
          style={{ textDecoration: "none" }}
          className="register-seller-link"
        >
          <Button
            size="large"
            variant="contained"
            color="primary"
            className="register-button"
          >
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Options_seller;
