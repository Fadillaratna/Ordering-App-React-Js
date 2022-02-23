import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const Menus = ({ menu, masukKeranjang }) => {
  return (
    <Col md={4} xs={6} className="mb-4 py-3">
      <Card className="shadow" id="p" onClick={() => masukKeranjang(menu)}>
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
        </Card.Body>
        <Card.Body>
          <Button onClick={() => masukKeranjang(menu)} class="btn btn-outline-dark">Add To Cart</Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Menus;
