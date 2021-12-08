import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import "../../css/owner/Singlepdt_owner.css";

function Singlestaff_owner({
  staff_name,
  staff_phone,
  staff_salary,
  staff_last_salary_paid,
  staff_upi,
  staff_image,
  staff_joining_date,
  _id,
}) {
  const handleEdit = () => {
    localStorage.setItem("edit_id", _id);
  };

  return (
    <div className="pdt">
      <img src={`http://localhost:5000/${staff_image}`} alt="" />

      <p>Name : {staff_name}</p>
      <p>Phone : {staff_phone}</p>
      <p>Salary : {staff_salary}</p>
      <p>Last salary paid(month) : {staff_last_salary_paid}</p>
      <p>UPI : {staff_upi}</p>
      <p>Joining Date : {staff_joining_date}</p>

      <Link
        to="/owner/staff/edit"
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
      <Link
        to="#"
        style={{ textDecoration: "none" }}
        className="product-seller"
      >
        <Button
          size="large"
          variant="contained"
          color="primary"
          onClick={handleEdit}
        >
          Pay Salary
        </Button>
      </Link>
    </div>
  );
}

export default Singlestaff_owner;
