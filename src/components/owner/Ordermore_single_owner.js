import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TextField } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import "../../css/owner/Ordermore_single_owner.css";
function Ordermore_single_owner({
  buy_email,
  buy_image,
  buy_name,
  buy_price,
  buy_seller_name,
  buy_upi,
  _id,
}) {
  const [qty, setqty] = useState(0);
  const handleChange = (e) => {
    setqty(e.target.value);
    console.log(qty);
  };
  const handleEdit = () => {
    //here payment will be taken care first then if that is succesfull
    //we will update the value in owner and seller product
    //then send email

    localStorage.setItem("edit_id", _id);
  };
  return (
    <div className="pdt">
      <img src={`http://localhost:5000/${buy_image}`} alt="" />

      <p>Name : {buy_name}</p>
      <p>Seller Email : {buy_email}</p>
      <p>Seller Name : {buy_seller_name}</p>
      <p>Price : Rs. {buy_price}</p>

      <p>UPI : {buy_upi}</p>
      <TextField
        type="text"
        margin="normal"
        required
        fullWidth
        id="qty"
        label="Quantity"
        name="qty"
        autoComplete="name"
        autoFocus
        onChange={handleChange}
      />
      <Link
        to="/owner/home"
        style={{ textDecoration: "none" }}
        className="product-seller"
      >
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleEdit}
        >
          Order
        </Button>
      </Link>
    </div>
  );
}

export default Ordermore_single_owner;
