import React, { useState } from "react";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";

import "../../css/owner/Register_owner.css";

import axios from "../../axios";
import { BASE_URL, FrontEnd_URL } from "../../baseURL";

function Register_owner() {
  let initVals = {
    owner_name: "",
    owner_email: "",
    owner_phone: "",
    owner_password: "",
    shop_address: "",
    owner_upi: "",
  };
  const [vals, setVal] = useState(initVals);
  const [err, seterr] = useState("");
  const [owner_image, setowner_image] = useState("");
  const [errmsg, seterrmsg] = useState("");
  const [agree, setagree] = useState(false);
  const [show, setshow] = useState("password");
  const [eyeicon, seteyeicon] = useState("VisibilityOffIcon");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
  };
  const handleChangeImage = (e) => {
    console.log(e.target.files[0]);
    setowner_image(e.target.files[0]);
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
    if (!agree) {
      console.log("Please Agree terms & conditons");
    } else {
      const fd = new FormData();
      fd.append("owner_image", owner_image);
      fd.append("owner_name", vals.owner_name);
      fd.append("owner_email", vals.owner_email);
      fd.append("owner_phone", vals.owner_phone);
      fd.append("owner_password", vals.owner_password);
      fd.append("shop_address", vals.shop_address);
      fd.append("owner_upi", vals.owner_upi);
      console.log(fd);
      await axios
        .post(`/register`, fd)
        .then((res) => {
          console.log(res);
          localStorage.setItem("token", res.headers["x-auth-token"]);
          window.location.href = `${FrontEnd_URL}/owner/home`;
          seterrmsg("");
        })
        .catch((err) => {
          seterrmsg("User already registered");
        });
    }
    setTimeout(() => {
      seterrmsg("");
    }, 2000);
  };
  const removeErr = () => {
    seterrmsg("");
  };
  return (
    <div className="register-owner">
      {err !== "" ? (
        <div className=" row error">
          <p className="col-10">{errmsg}</p>
          <p className="remove col-2" onClick={removeErr}>
            X
          </p>
        </div>
      ) : null}
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="owner_name"
          label="Name"
          name="owner_name"
          autoComplete="owner_name"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          type="number"
          margin="normal"
          required
          fullWidth
          id="owner_phone"
          label="Phone"
          name="owner_phone"
          autoComplete="owner_phone"
          onChange={handleChange}
        />
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="owner_email"
          label="Email"
          name="owner_email"
          autoComplete="owner_email"
          onChange={handleChange}
        />
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="shop_address"
          label="Shop Address"
          name="shop_address"
          autoComplete="shop_address"
          onChange={handleChange}
        />
        <TextField
          type="text"
          margin="normal"
          required
          fullWidth
          id="owner_upi"
          label="UPI"
          name="owner_upi"
          autoComplete="owner_upi"
          onChange={handleChange}
        />
        <div className="passwordfield">
          <TextField
            type={show}
            margin="normal"
            required
            fullWidth
            id="owner_password"
            label="Password"
            name="owner_password"
            autoComplete="owner_password"
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
        <input type="file" name="owner_image" onChange={handleChangeImage} />
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              onChange={() => {
                setagree(!agree);
              }}
              name="checkedB"
              color="primary"
            />
          }
          label="Agree Terms &amp; Conditions"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ justifyContent: "left" }}
        >
          Register
          <ArrowRightAltIcon
            style={{
              position: "absolute",
              right: "10px",
              fontSize: "30px",
            }}
          />
        </Button>
      </form>
    </div>
  );
}

export default Register_owner;
