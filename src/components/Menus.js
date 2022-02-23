import React from "react";
import { Col, Card } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu, masukKeranjang }) => {
  return (
    <Col md={4} xs={6} className="mb-4 py-3">
      <Card className="shadow" id="p">
        <Card.Img
          variant="top"
          src={
            "assets/images/" +
            menu.category.nama.toLowerCase() +
            "/" +
            menu.gambar
          } class="image"
        />
        <Card.Body>
          <Card.Title>{menu.nama} <strong>({menu.kode})</strong></Card.Title>
          <Card.Text>Rp. {numberWithCommas(menu.harga)}</Card.Text>
          <button onClick={() => masukKeranjang(menu)} class="btn btn-outline-dark">Add To Cart</button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
