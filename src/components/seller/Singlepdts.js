import React from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import "../../css/seller/Singlepdts.css";

function Singlepdts({ _id, buy_name, buy_price, buy_image }) {
  const handleEdit = () => {
    localStorage.setItem("edit_id", _id);
  };
  return (
    <div className="pdt">
      <img src={`http://localhost:5000/${buy_image}`} alt="" />

      <p>Name : {buy_name}</p>
      <p>Price : {buy_price}</p>
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
