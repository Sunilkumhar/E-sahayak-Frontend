import React, { useState, useEffect } from "react";
import { TextField, Button } from "@material-ui/core";

import "../../css/owner/Staff_edit_owner.css";

import axios from "../../axios";
import { FrontEnd_URL } from "../../baseURL";
function Staff_edit_owner() {
  let initVals = {
    staff_name: "",
    staff_phone: "",
    staff_salary: "",
    staff_last_salary_paid: "",
    staff_upi: "",
  };
  const [vals, setVal] = useState(initVals);
  const [staff_image, setstaff_image] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setVal({ ...vals, [name]: value });
  };
  const handleChangeImage = (e) => {
    setstaff_image(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const fd = new FormData();
    if (vals.staff_name !== "") fd.append("staff_name", vals.staff_name);
    if (staff_image !== "") fd.append("staff_image", staff_image);

    if (vals.staff_phone !== "") fd.append("staff_phone", vals.staff_phone);
    if (vals.staff_salary !== "") fd.append("staff_salary", vals.staff_salary);
    if (vals.staff_last_salary_paid !== "")
      fd.append("staff_last_salary_paid", vals.staff_last_salary_paid);
    if (vals.staff_upi !== "") fd.append("staff_upi", vals.staff_upi);

    console.log(fd);
    await axios
      .put(
        `/staff/${localStorage.getItem("id")}/${localStorage.getItem(
          "edit_id"
        )}/update`,
        fd,
        {
          headers: {
            "x-auth-token": localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res);
        localStorage.removeItem("edit_id");
        window.location.href = `${FrontEnd_URL}/owner/staff`;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className="addstaff">
      <h1>Update staff details</h1>
      <form onSubmit={handleSubmit}>
        <TextField
          type="text"
          margin="normal"
          fullWidth
          id="staff_name"
          label="Staff Name"
          name="staff_name"
          autoComplete="staff_name"
          autoFocus
          onChange={handleChange}
        />
        <TextField
          type="number"
          margin="normal"
          fullWidth
          id="staff_phone"
          label="Staff Phone"
          name="staff_phone"
          autoComplete="staff_phone"
          onChange={handleChange}
        />
        <TextField
          type="number"
          margin="normal"
          fullWidth
          id="staff_salary"
          label="Staff Salary"
          name="staff_salary"
          autoComplete="staff_salary"
          onChange={handleChange}
        />
        <TextField
          type="text"
          margin="normal"
          fullWidth
          id="staff_last_salary_paid"
          label="Staff Last salary paid month"
          name="staff_last_salary_paid"
          autoComplete="staff_last_salary_paid"
          onChange={handleChange}
        />
        <TextField
          type="text"
          margin="normal"
          fullWidth
          id="staff_upi"
          label="Staff UPI"
          name="staff_upi"
          autoComplete="staff_upi"
          onChange={handleChange}
        />
        <input type="file" name="seller_image" onChange={handleChangeImage} />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          style={{ justifyContent: "left", marginTop: "25px" }}
        >
          Update Staff
        </Button>
      </form>
    </div>
  );
}

export default Staff_edit_owner;
