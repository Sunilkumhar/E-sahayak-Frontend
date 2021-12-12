import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import "../../css/owner/Singlepdt_owner.css";

function Singlepdts({
  _id,
  pdt_name,
  pdt_remaining_stock,
  pdt_current_price,
  pdt_image,
  pdt_bought_price,
}) {
  const handleEdit = () => {
    localStorage.setItem("edit_id", _id);
    console.log(pdt_image);
    //to="/owner/pdt/edit"
  };
  return (
    <div className="pdt">
      <img src={`http://localhost:5000/${pdt_image}`} alt="" />

      <p>Name : {pdt_name}</p>
      <p>Price : {pdt_current_price}</p>
      <p>Stock Remaining : {pdt_remaining_stock}</p>
      <p>Bought Price : {pdt_bought_price}</p>
      <p>Current Profit/Qty. : {pdt_current_price - pdt_bought_price}</p>

      <Button
        size="large"
        variant="contained"
        color="primary"
        onClick={handleEdit}
      >
        Edit Product
      </Button>
    </div>
  );
}

export default Singlepdts;
