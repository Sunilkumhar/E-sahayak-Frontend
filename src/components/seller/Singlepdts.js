import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import "../../css/seller/Singlepdts.css";
import { BASE_URL } from "../../baseURL";

function Singlepdts({ _id, buy_name, buy_price, buy_image, buy_quantity }) {
  const handleEdit = () => {
    localStorage.setItem("edit_id", _id);
  };
  return (
    <div className="pdt">
      <img src={`${BASE_URL}/${buy_image}`} alt="" />

      <p>Name : {buy_name}</p>
      <p>Price : {buy_price}</p>
      <p>Quantity : {buy_quantity}</p>
      <Link
        to="/seller/pdt/edit"
        style={{ textDecoration: "none" }}
        className="product-seller"
      >
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleEdit}
        >
          Edit
        </Button>
      </Link>
    </div>
  );
}

export default Singlepdts;
