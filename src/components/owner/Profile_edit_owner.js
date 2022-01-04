import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useNavigate } from "react-router-dom";

import "../../css/owner/Register_owner.css";

import axios from "../../axios";

function Profile_edit_owner() {
  const history = useNavigate();

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

    const fd = new FormData();
    if (owner_image !== "") fd.append("owner_image", owner_image);

    if (vals.owner_name !== "") fd.append("owner_name", vals.owner_name);
    if (vals.owner_email !== "") fd.append("owner_email", vals.owner_email);
    if (vals.owner_phone !== "") fd.append("owner_phone", vals.owner_phone);
    if (vals.owner_password !== "")
      fd.append("owner_password", vals.owner_password);
    if (vals.shop_address !== "") fd.append("shop_address", vals.shop_address);
    if (vals.owner_upi !== "") fd.append("owner_upi", vals.owner_upi);
    console.log(fd);
    await axios
      .put(`/${localStorage.getItem("id")}/update`, fd, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(123);
        history("/owner/profile");
        seterrmsg("");
      })
      .catch((err) => {
        seterrmsg("User already registered");
      });

    setTimeout(() => {
      seterrmsg("");
    }, 2000);
  };
  const removeErr = () => {
    seterrmsg("");
  };

  useEffect(() => {
    alert("fill values which you want to update rest keep as it is");
  }, []);

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
      <h1>Update Profile</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          margin="normal"
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
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ justifyContent: "left", marginTop: "25px" }}
        >
          Update Profile
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

export default Profile_edit_owner;
