import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Singlepdts from "./Singlepdts";
import Grid from "@material-ui/core/Grid";

import "../../css/seller/Allpdts_seller.css";

import axios from "../../axios";

function Allpdts_seller() {
  const [pdts, setpdts] = useState([]);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      localStorage.setItem("id", user._id);
    } catch {}
  }, []);

  useEffect(() => {
    axios
      .get(`/buyer/${localStorage.getItem("id")}/all`)
      .then((res) => {
        // console.log(res.data);
        setpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`/buyer/${localStorage.getItem("id")}/all`)
      .then((res) => {
        setpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [pdts]);

  return (
    <div className="allpdts-seller">
      <h1>All Products added by you</h1>
      <div className="row">
        <Grid container spacing={1}>
          {pdts.length === 0 ? (
            <h1>You Have No pdts...</h1>
          ) : (
            pdts.map((x) => (
              <Grid item xs={4}>
                <div className="col-6" key={x._id}>
                  <Singlepdts
                    buy_name={x.buy_name}
                    buy_price={x.buy_price}
                    buy_image={x.buy_image}
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

export default Allpdts_seller;
