import React from 'react';
// reactstrap components
import { UncontrolledCarousel, Container, Row, Col, Card, CardBody, CardHeader, Button, Collapse } from "reactstrap";

const imgStyle = { width: "140px" };

const TeamSection = () => (
  <section className="pb-5" id="team">
          {/* <Row className="bg-sl-blue-dark justify-content-center mt-5">{props.children}</Row> */}

          <Row className="bg-sl-blue-dark">
          <Container className="header-body">
            <Row className="align-items-center justify-content-center">

              <Col lg="12" className="white text-center">
                <h2 className="display-2 text-white bolder mb-3">Team</h2>
              </Col>

              {/* Jackson */}
              <Col xs="6" md="3" className="mb-3">
                <Card color="darker">
                  <CardBody>
                    <a href="javascript:;">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/me.jpg")}
                        style={imgStyle}
                      ></img>
                    </a>
                    <div className="pt-4 text-center">
                      <h5 className="h3 title">
                        <span className="d-block mb-1 text-sl-red-xlight">Jackson</span>
                        <small className="h4 font-weight-light text-muted">
                          Founder | Developer | Web3
                        </small>
                      </h5>
                      <div className="mt-3">
                        {/* <Button
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href="javascript:;" target="blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button> */}
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="https://www.linkedin.com/in/jacksonharris3/" target="blank"
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="github"
                          href="https://github.com/jackson-harris-iii" target="blank"
                        >
                          <i className="fab fa-github"></i>
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              {/* Jason */}
              <Col xs="6" md="3" className="mb-3">
                <Card color="darker">
                  <CardBody>
                    <a href="javascript:;">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/jason2.jpg")}
                        style={imgStyle}
                      ></img>
                    </a>
                    <div className="pt-4 text-center">
                      <h5 className="h3 title">
                        <span className="d-block mb-1 text-sl-red-xlight">Jason</span>
                        <small className="h4 font-weight-light text-muted">
                          Founder | Public Relations
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href="https://twitter.com/simmantics" target="blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="secondary"
                          href="https://www.simmspr.com/" target="blank"
                        >
                          <i className="fa fa-globe"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="https://www.linkedin.com/in/jasonsimms/" target="blank"
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              {/* Sequoia */}
              <Col xs="6" md="3" className="mb-3">
                <Card color="darker">
                  <CardBody>
                    <a href="javascript:;">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/sequoia2.jpg")}
                        style={imgStyle}
                      ></img>
                    </a>
                    <div className="pt-4 text-center">
                      <h5 className="h3 title">
                        <span className="d-block mb-1 text-sl-red-xlight">Sequoia</span>
                        <small className="h4 font-weight-light text-muted">
                          Founder | Marketing | Philanthropy
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href="https://twitter.com/sequoiaslentz" target="blank"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="youtube"
                          href="https://youtu.be/fyT1bVoWUUo" target="blank"
                        >
                          <i className="fab fa-youtube"></i>
                        </Button>
                        {/* <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="javascript:;" target="blank"
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button> */}
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              {/* Brian */}
              <Col xs="6" md="3" className="mb-3">
                <Card color="darker">
                  <CardBody>
                    <a href="javascript:;">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/brian.jpg")}
                        style={imgStyle}
                      ></img>
                    </a>
                    <div className="pt-4 text-center">
                      <h5 className="h3 title">
                        <span className="d-block mb-1 text-sl-red-xlight">Brian</span>
                        <small className="h4 font-weight-light text-muted">
                          Artist
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="secondary"
                          href="http://brianoart.com/" target="blank"
                        >
                          <i className="fa fa-globe"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="instagram"
                          href="https://instagram.com/brian_manning_art" target="blank"
                        >
                          <i className="fab fa-instagram"></i>
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              {/* Elevated Design */}
              <Col xs="6" md="3" className="mb-3">
              <Card color="darker">
                <CardBody>
                  <a href="javascript:;">
                    <img
                      alt="..."
                      className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/amadeus.jpg")}
                      style={imgStyle}
                    ></img>
                  </a>
                  <div className="pt-4 text-center">
                    <h5 className="h3 title">
                      <span className="d-block mb-1 text-sl-red-xlight">Elevated Design</span>
                      <small className="h4 font-weight-light text-muted">
                        Digital Artist
                      </small>
                    </h5>
                    <div className="mt-3">
                      <Button
                        className="btn-icon-only rounded-circle"
                        color="primary"
                        href="https://www.linkedin.com/in/amadeus-tafoya-565738226"
                      >
                        <i className="fab fa-linkedin"></i>
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>
              </Col>

              {/* Darragh */}
              <Col xs="6" md="3" className="mb-3">
                <Card color="darker">
                  <CardBody>
                    <a href="javascript:;">
                      <img
                        alt="..."
                        className="rounded-circle img-center img-fluid shadow shadow-lg--hover"
                        src={require("assets/img/darragh.jpg")}
                        style={imgStyle}
                      ></img>
                    </a>
                    <div className="pt-4 text-center">
                      <h5 className="h3 title">
                        <span className="d-block mb-1 text-sl-red-xlight">Darragh</span>
                        <small className="h4 font-weight-light text-muted">
                          Musician
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="secondary"
                          href="http://darraghoneill.com/" target="blank"
                        >
                          <i className="fa fa-globe"></i>
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
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

export default TeamSection;