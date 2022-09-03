import React from "react";
import Tile from "./Tile";
import { Container, Row, Col } from "react-bootstrap";

const TileSection = () => {
  return (
    <div className="tile-section-wrapper">
      <Container fluid>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <Tile
              logo="RiHospitalFill"
              title="Find a doctor"
              paragraph="We have the best specialists to deliver top-notch diagnostic services
          for you."
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            {" "}
            <Tile
              logo="MdLocalPharmacy"
              title="Find a Pharmacy"
              paragraph="We provide the a wide range of medical services, so every person could have the opportunity."
            />
          </Col>
          <Col xs={12} md={6} lg={4}>
            {" "}
            <Tile
              logo="ImLab"
              title="Find a Lab"
              paragraph="We use the first-class medical equipment for timely diagnostics of various diseases."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TileSection;
