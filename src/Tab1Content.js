import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spa from "./img/lotus.png";
import { LogoDropdown } from "./LogoDropdown";


export const Tab1Content = () => {
  return (
    <div>
      <div className="tab1-logo">
        <img src={Spa} alt="spa" />
      </div>
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div>
            <LogoDropdown label="SPA at Fairmont Baku" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div
            >
              <LogoDropdown label="Magic Touch" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div
            >
              <LogoDropdown label="HamamBath" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div
            >
              <LogoDropdown label="Sea Breeze Center" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div
            >
              <LogoDropdown label="Thai House Baku" />
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div
            >
              <LogoDropdown label="Eforea Spa" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};