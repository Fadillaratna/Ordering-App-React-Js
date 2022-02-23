import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { numberWithCommas } from "../utils/utils";

const ModalKeranjang = ({
  showModal,
  handleClose,
  keranjangDetail,
  jumlah,
  keterangan,
  tambah,
  kurang,
  changeHandler,
  handleSubmit,
  totalHarga,
  hapusPesanan,
  opsi
}) => {
  if (keranjangDetail) {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {keranjangDetail.product.nama}{" "}
            <strong>
              (Rp. {numberWithCommas(keranjangDetail.product.harga)})
            </strong>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total Price :</Form.Label>
              <p>
                <strong>
                  Rp. {numberWithCommas(totalHarga)}
                </strong>
              </p>
            </Form.Group>

            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Total Product :</Form.Label>
              <br />
              <Button variant="primary" size="sm" className="mr-2" onClick={ () => kurang()}>
                <FontAwesomeIcon icon={faMinus} />
              </Button>

              <strong>  {jumlah}   </strong>
              
              <Button variant="primary" size="sm" className="ml-2" onClick={ () => tambah()}>
                <FontAwesomeIcon icon={faPlus} />
              </Button>
            </Form.Group><br/>

            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description :</Form.Label>
              <Form.Control
                as="textarea"
                rows="3"
                name="keterangan"
                placeholder="Example : No Onion, Extra Chili"
                value={keterangan}
                onChange={(event) => changeHandler(event)}
              />
            </Form.Group>

          
            <br/>
            <Button variant="primary" type="submit">
                Save
            </Button>   
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={() => hapusPesanan(keranjangDetail.id)}>
            <FontAwesomeIcon icon={faTrash} /> Delete Your cart
          </Button>
        </Modal.Footer>
      </Modal>
    );
  } else {
    return (
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Kosong</Modal.Title>
        </Modal.Header>
        <Modal.Body>Kosong</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default ModalKeranjang;
