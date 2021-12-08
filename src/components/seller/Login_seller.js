import React, { useState } from "react";
import { TextField } from "@material-ui/core";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "../../css/seller/Login_seller.css";

import axios from "../../axios";

function Login_seller() {
  let initVals = { seller_email: "", seller_password: "" };
  const [vals, setVal] = useState(initVals);
  const [err, seterr] = useState("");
  const [show, setshow] = useState("password");
  const [eyeicon, seteyeicon] = useState("VisibilityOffIcon");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
  };
  const changeVisibility = () => {
    setshow("password");
    seteyeicon("VisibilityOffIcon");
  };
  const changeVisibilityOff = () => {
    setshow("text");
    seteyeicon("VisibilityIcon");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(vals);
    await axios
      .post("/buyer/", vals)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        seterr("");
        console.log(err);
        window.location.href = "http://localhost:3000/seller/allpdts";
      })
      .catch((err) => {
        seterr("Invalid Email-Id or Password");
        setTimeout(() => {
          seterr("");
        }, 2000);
        console.log(err.status);
        console.log(err);
      });
  };
  const removeErr = () => {
    console.log(123);

    seterr("");
  };

  return (
    <div className="login-seller">
      {err !== "" ? (
        <div className=" row error">
          <p className="col-10">{err}</p>
          <p className="remove col-2" onClick={removeErr}>
            X
          </p>
        </div>
      ) : null}
      <h1>Log-In</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="seller_email"
          label="Email"
          name="seller_email"
          autoComplete="name"
          autoFocus
          onChange={handleChange}
        />
        <div className="passwordfield">
          <TextField
            type={show}
            margin="normal"
            required
            fullWidth
            id="seller_password"
            label="Password"
            name="seller_password"
            autoComplete="seller_password"
            onChange={handleChange}
          />
          <div className="eye">
            {eyeicon === "VisibilityOffIcon" ? (
              <VisibilityOffIcon onClick={changeVisibilityOff} />
            ) : (
              <VisibilityIcon onClick={changeVisibility} />
            )}
          </div>
        </div>
        <input type="submit" value="Log In" id="proceed" className="btn" />
      </form>
    </div>
  );
}

export default Login_seller;
