import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";
import Singlepdt_owner from "./Singlepdt_owner";
import Grid from "@material-ui/core/Grid";
import MicIcon from "@material-ui/icons/Mic";
import "../../css/owner/Home_owner.css";

import axios from "../../axios";

function Home_owner() {
  const [allpdts, setallpdts] = useState([]);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem("token");
      const user = jwtDecode(jwt);
      localStorage.setItem("id", user._id);
    } catch {}
  }, []);

  useEffect(() => {
    axios
      .get(`/product/${localStorage.getItem("id")}/all`)
      .then((res) => {
        // console.log(res.data);
        setallpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, []);
  useEffect(() => {
    axios
      .get(`/product/${localStorage.getItem("id")}/all`)
      .then((res) => {
        setallpdts(res.data);
      })
      .catch((err) => {
        console.log(err.status);
      });
  }, [allpdts]);

  const handleVoiceRecg = () => {
    console.log("Mic Clicked");
  };

  return (
    <div className="home-owner">
      <div className="home-mic">
        <div className="mic">
          <MicIcon
            style={{
              fontSize: "100px",
              cursor: "pointer",
            }}
            onClick={handleVoiceRecg}
          />
        </div>
      </div>
      <div className="allpdts-owner">
        <p className="allpdts-owner-head">
          All Products Available at your store
        </p>
        <div className="row">
          <Grid container spacing={1}>
            {allpdts.length === 0 ? (
              <h1>You Have No pdts...</h1>
            ) : (
              allpdts.map((x) => (
                <Grid item xs={4}>
                  <div className="col-6" key={x._id}>
                    <Singlepdt_owner
                      pdt_name={x.pdt_name}
                      pdt_remaining_stock={x.pdt_remaining_stock}
                      pdt_current_price={x.pdt_current_price}
                      pdt_bought_price={x.pdt_bought_price}
                      pdt_image={x.pdt_image}
                      _id={x._id}
                    />
                  </div>
                </Grid>
              ))
            )}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default Home_owner;
