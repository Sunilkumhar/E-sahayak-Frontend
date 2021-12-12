import React, { useEffect, useState } from "react";
import Ordermore_single_owner from "./Ordermore_single_owner";
import Grid from "@material-ui/core/Grid";

import "../../css/owner/Ordermore_owner.css";

import axios from "../../axios";

function Ordermore_owner() {
  const [pdts, setpdts] = useState([]);

  useEffect(() => {
    axios
      .get(`/buypdts/all`)
      .then((res) => {
        console.log(res.data);
        setpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`/buypdts/all`)
      .then((res) => {
        setpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [pdts]);

  return (
    <div className="ordermore-owner">
      <h1>All Products available to buy</h1>
      <div className="row">
        <Grid container spacing={1}>
          {pdts.length === 0 ? (
            <h1>There are no products available to buy.</h1>
          ) : (
            pdts.map((x) => (
              <Grid item xs={4}>
                <div className="col-6" key={x._id}>
                  <Ordermore_single_owner
                    buy_email={x.buy_email}
                    buy_image={x.buy_image}
                    buy_name={x.buy_name}
                    buy_price={x.buy_price}
                    buy_seller_name={x.buy_seller_name}
                    buy_upi={x.buy_upi}
                    buy_quantity={x.buy_quantity}
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

export default Ordermore_owner;
