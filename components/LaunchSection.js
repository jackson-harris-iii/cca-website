import React from 'react';
// reactstrap components
import { UncontrolledCarousel, Container, Row, Col, Card, CardBody, CardHeader, Button, Collapse } from "reactstrap";

const LaunchSection = () => (
  <section className="pt-5 pb-5">
  {/* <Row className="bg-sl-blue-dark justify-content-center mt-5">{props.children}</Row> */}

  <Row className="bg-gradient2-sl-red-light container-fluid" style={{width: '100vw'}}>
  <Container className="header-body my-5">
    <Row className="align-items-center justify-content-center">

      {/* Launch Roadmap section header */}
      <Col lg="12" className="white text-center">
        <h2 className="display-2 text-white bolder mb-3">Launch Roadmap 🚀</h2>
      </Col>

      {/* 20% row           */}
      <Row className="justify-content-around align-items-center">
        {/* percetage block */}
        <Col xs="3" className="align-middle">
          <Card className="py-4 text-center display-3 text-sl-red-xlight">
            20%
          </Card>
        </Col>

        {/* Right hero text block */}
        <Col xs="9" className="align-middle">
          <p className="text-start text-light lead">
          The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped.
          </p>
        </Col>
      </Row>

      {/* 50% row           */}
      <Row className="justify-content-around align-items-center">
        {/* percetage block */}
        <Col xs="3" className="align-middle">
          <Card className="py-4 text-center display-3 text-sl-red-xlight">
            50%
          </Card>
        </Col>

        {/* Right hero text block */}
        <Col xs="9" className="align-middle">
          <p className="text-start text-light lead">
          The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped.
          </p>
        </Col>
      </Row>

      {/* 80% row           */}
      <Row className="justify-content-around align-items-center">
        {/* percetage block */}
        <Col xs="3" className="align-middle">
          <Card className="py-4 text-center display-3 text-sl-red-xlight">
            80%
          </Card>
        </Col>

        {/* Right hero text block */}
        <Col xs="9" className="align-middle">
          <p className="text-start text-light lead">
          The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped.
          </p>
        </Col>
      </Row>

      {/* 90% row           */}
      <Row className="justify-content-around align-items-center">
        {/* percetage block */}
        <Col xs="3" className="align-middle">
          <Card className="py-4 text-center display-3 text-sl-red-xlight">
            90%
          </Card>
        </Col>

        {/* Right hero text block */}
        <Col xs="9" className="align-middle">
          <p className="text-start text-light lead">
          The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped.
          </p>
        </Col>
      </Row>

      {/* 100% row           */}
      <Row className="justify-content-around align-items-center">
        {/* percetage block */}
        <Col xs="3" className="align-middle">
          <Card className="py-4 text-center display-3 text-sl-red-xlight">
            100%
          </Card>
        </Col>

        {/* Right hero text block */}
        <Col xs="9" className="align-middle">
          <p className="text-start text-light lead">
          🎉 The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped.🎉
          </p>
        </Col>
      </Row>


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

export default LaunchSection;