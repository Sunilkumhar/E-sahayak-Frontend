import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import "../../css/owner/Options_owner.css";

function Options_owner() {
  return (
    <div className="options-owner">
      <div className="options">
        <Link
          to="/owner/login"
          style={{ textDecoration: "none" }}
          className="login-owner-link"
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
          to="/owner/register"
          style={{ textDecoration: "none" }}
          className="register-owner-link"
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

export default Options_owner;
