import React, { Component } from "react";
import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../utils/constants";

export default class Sukses extends Component {
  componentDidMount() {
    axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        keranjangs.map(function(item) {
            return axios
                .delete(API_URL+"keranjangs/"+item.id)
                .then((res) => console.log(res))
                .catch((error) => console.log(error))
        })
      })
      .catch((error) => {
        console.log("Error yaa ", error);
      });
  }

  render() {
    return (
      <div className="mt-4 text-center py-2">
        <Image src="assets/images/succes.png" width="400" height="430" /><br/><br/>
        <h2>Order Success</h2>
        <p>Thanks For Your Order!</p>
        <Button variant="primary" as={Link} to="/">
          Back
        </Button>
      </div>
    );
  }
}
