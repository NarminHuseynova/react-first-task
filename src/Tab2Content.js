import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Coffee from "./img/coffee-shop.png";
import { useState } from "react";
import BoxLogo from "./img/full-moon.png";

export const Tab2Content = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="tab1-logo">
        <img src={Coffee} alt="coffee" />
      </div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div className="dropdown-btn" onClick={handleShow}>
              Gloria Jeans Coffee
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="dropdown-btn" onClick={handleShow}>
              Starbucks
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="dropdown-btn" onClick={handleShow}>
              Cupcup Coffee
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="dropdown-btn" onClick={handleShow}>
              Coffee Go
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="dropdown-btn" onClick={handleShow}>
              W-Coffee
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="dropdown-btn" onClick={handleShow}>
              Urban Coffee
            </div>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Coffee
        </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-content-img">
            <img className="dropdown-content-img" src={BoxLogo} alt="boxlogo" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
