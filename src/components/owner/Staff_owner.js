import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Singlestaff_owner from "./Singlestaff_owner";

import "../../css/owner/Staff_owner.css";

import axios from "../../axios";

function Staff_owner() {
  const [staff, setstaff] = useState([]);

  useEffect(() => {
    axios
      .get(`/staff/${localStorage.getItem("id")}/allstaff`)
      .then((res) => {
        setstaff(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`/staff/${localStorage.getItem("id")}/allstaff`)
      .then((res) => {
        setstaff(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [staff]);

  return (
    <div className="allstaff">
      <h1>All Staff Members</h1>
      <div className="row">
        <Grid container spacing={1}>
          {staff.length === 0 ? (
            <h1>You Have No staff...</h1>
          ) : (
            staff.map((x) => (
              <Grid item xs={4}>
                <div className="col-6" key={x._id}>
                  <Singlestaff_owner
                    staff_name={x.staff_name}
                    staff_phone={x.staff_phone}
                    staff_salary={x.staff_salary}
                    staff_last_salary_paid={x.staff_last_salary_paid}
                    staff_upi={x.staff_upi}
                    staff_image={x.staff_image}
                    staff_joining_date={x.staff_joining_date}
                    _id={x._id}
                  />
                </div>
              </Grid>
            ))
          )}
        </Grid>
      </div>
    </div>
  );
}

export default Staff_owner;
