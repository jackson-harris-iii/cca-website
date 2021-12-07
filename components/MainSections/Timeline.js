import React from 'react';
// reactstrap components
import { UncontrolledCarousel, Container, Row, Col, Card, CardBody, CardHeader, Button, Collapse } from "reactstrap";

const Timeline = () => (
  <section className="pt-5 pb-5" id="roadmap">
  {/* <Row className="bg-sl-blue-dark justify-content-center mt-5">{props.children}</Row> */}

  <Row className="bg-gradient2-sl-red-light container-fluid shadow shadow-lg" style={{width: '100vw'}}>
  <Container className="header-body my-5">
    <Row className="align-items-center justify-content-center">

      {/* Launch Roadmap section header */}
      <Col lg="12" className="white text-center">
        <h2 className="display-2 text-white bolder mb-3">Timeline & Roadmap 🚀</h2>
      </Col>
      <Col lg="8">
        <span className="display-4 text-white">November 2021</span><p className="display-5 text-white">Honorees notified</p>
        <br />
        <span className="display-4 text-white">January 7, 2021</span>
        <p className="display-5 text-white">Honorees announced</p>
        <br />
        <span className="display-4 text-white">Febuary 11th, 2022</span>
        <p className="display-5 text-white">Whitelist minting open</p>
        <br />
        <span className="display-4 text-white">Febuary 13th, 2022</span>
        <p className="display-5 text-white">Public minting open</p>
        <br />
        <span className="display-4 text-white">Febuary 17th, 2022</span>
        <p className="display-5 text-white">NFT reveal</p>
        <br />
        <span className="display-4 text-white">March 31st, 2022 - Community vote on the "Unsung Heroes of Crypto."</span> <p className="text-white">This will be a limited series of NFTs created for the purpose of expanding our community and engaging in a discussion about who should be celebrated for helping move crypto forward.</p>
      </Col>

    </Row>
  </Container>
  </Row>

  {/* Angle for section */}
  <div className="separator separator-bottom separator-skew zindex-100">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      version="1.1"
      viewBox="0 0 2560 100"
      x="0"
      y="0"
    >
      <polygon
        className="fill-darker"
        points="2560 0 2560 100 0 100"
      />
    </svg>
  </div>
  </section>
)

export default Timeline;