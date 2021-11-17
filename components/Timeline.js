import React from 'react';
// reactstrap components
import { UncontrolledCarousel, Container, Row, Col, Card, CardBody, CardHeader, Button, Collapse } from "reactstrap";

const Timeline = () => (
  <section className="pt-5 pb-5">
  {/* <Row className="bg-sl-blue-dark justify-content-center mt-5">{props.children}</Row> */}

  <Row className="bg-gradient2-sl-red-light container-fluid" style={{width: '100vw'}}>
  <Container className="header-body my-5">
    <Row className="align-items-center justify-content-center">

      {/* Launch Roadmap section header */}
      <Col lg="12" className="white text-center">
        <h2 className="display-2 text-white bolder mb-3">Timeline & Roadmap 🚀</h2>
      </Col>

      <h4 className="text-muted">COMING SOON...</h4>

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