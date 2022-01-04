import React, { useEffect, useState } from "react";
import { TextField } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import "../../css/owner/Ordermore_single_owner.css";
import axios from "../../axios";
import { BASE_URL, FrontEnd_URL } from "../../baseURL";

function Ordermore_single_owner({
  buy_email,
  buy_image,
  buy_name,
  buy_price,
  buy_seller_name,
  buy_upi,
  buy_quantity,
  _id,
}) {
  const [qty, setqty] = useState(0);
  const [price, setprice] = useState(0);
  const handleChange = (e) => {
    setqty(e.target.value);
  };
  const handleChangePrice = (e) => {
    setprice(e.target.value);
  };

  const handleEdit = async () => {
    if (qty > buy_quantity) return alert("Quantity unavailable");
    console.log(buy_image);
    const fd_owner = new FormData();
    fd_owner.append("pdt_name", buy_name);
    fd_owner.append("pdt_remaining_stock", qty);
    fd_owner.append("pdt_bought_price", buy_price);
    fd_owner.append("pdt_current_price", price);
    fd_owner.append("pdt_image", buy_image);

    //update owner
    await axios
      .post(`/product/${localStorage.getItem("id")}/addpdt`, fd_owner, {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("Owner Updated");
      });

    let seller_id;
    //get seller email
    await axios.post("/buyer/one", { seller_email: buy_email }).then((res) => {
      console.log(res.data);
      seller_id = res.data;
    });

    // update seller
    const fd_seller = new FormData();
    fd_seller.append("buy_quantity", buy_quantity - qty);

    console.log(fd_seller);
    await axios
      .put(`/buyer/${seller_id}/${_id}/update`, fd_seller)
      .then((res) => {
        console.log("seller updated");
      });

    //get owner email
    let owner_email;
    await axios.get(`/${localStorage.getItem("id")}`).then((res) => {
      console.log(res.data);
      owner_email = res.data.owner_email;
    });

    //send email
    const fd_email = new FormData();
    fd_email.append("email1", owner_email);
    fd_email.append("email2", buy_email);
    fd_email.append("pdt_price", buy_price);
    fd_email.append("pdt_qunatity", qty);
    fd_email.append("pdt_name", buy_name);
    fd_email.append("pdt_image", buy_image);

    await axios.post(`/sendmail`, fd_email).then((res) => {
      console.log("emailsent");
      window.location.href = `${FrontEnd_URL}/owner/hone`;
    });
  };
  return (
    <div className="pdt">
      <img src={`${BASE_URL}/${buy_image}`} alt="" />

      <p>Name : {buy_name}</p>
      <p>Seller Email : {buy_email}</p>
      <p>Seller Name : {buy_seller_name}</p>
      <p>Price : Rs. {buy_price}</p>
      <p>Quantity : {buy_quantity}</p>

      <p>UPI : {buy_upi}</p>
      <TextField
        type="number"
        margin="normal"
        required
        fullWidth
        id="qty"
        label="Quantity"
        name="qty"
        autoComplete="name"
        onChange={handleChange}
      />
      <TextField
        type="number"
        margin="normal"
        required
        fullWidth
        id="price"
        label="Price"
        name="price"
        autoComplete="price"
        onChange={handleChangePrice}
      />

      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleEdit}
      >
        Order
      </Button>
    </div>
  );
}

export default Ordermore_single_owner;
