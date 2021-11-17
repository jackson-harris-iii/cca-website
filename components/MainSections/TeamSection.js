import React from 'react';
// reactstrap components
import { UncontrolledCarousel, Container, Row, Col, Card, CardBody, CardHeader, Button, Collapse } from "reactstrap";

const imgStyle = { width: "140px" };

const TeamSection = () => (
  <section className="pb-5">
          {/* <Row className="bg-sl-blue-dark justify-content-center mt-5">{props.children}</Row> */}

          <Row className="bg-sl-blue-dark">
          <Container className="header-body">
            <Row className="align-items-center justify-content-center">

              <Col lg="12" className="white text-center">
                <h2 className="display-2 text-white bolder mb-3">Team</h2>
              </Col>

              {/* Sequoia Slentz */}
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
                          marketing | philanthropy
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href="javascript:;"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="youtube"
                          href="https://www.youtube.com/watch?v=3LdNZ4VWzzg&t=1s"
                        >
                          <i className="fab fa-youtube"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="javascript:;"
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </Col>

              {/* Jackson Harris III*/}
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
                        <span className="d-block mb-1 text-sl-red-xlight">Jackson Harris III</span>
                        <small className="h4 font-weight-light text-muted">
                          developer | web3
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href="javascript:;"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href="https://www.linkedin.com/in/jacksonharris3/"
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="github"
                          href="https://github.com/jackson-harris-iii"
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
                        src={require("assets/img/jason.png")}
                        style={imgStyle}
                      ></img>
                    </a>
                    <div className="pt-4 text-center">
                      <h5 className="h3 title">
                        <span className="d-block mb-1 text-sl-red-xlight">Jason</span>
                        <small className="h4 font-weight-light text-muted">
                          public relations
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href="javascript:;"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="secondary"
                          href="javascript:;"
                        >
                          <i className="fa fa-globe"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href=""
                        >
                          <i className="fab fa-linkedin"></i>
                        </Button>
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
                          artist
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href="javascript:;"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="instagram"
                          href="javascript:;"
                        >
                          <i className="fab fa-instagram"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="primary"
                          href=""
                        >
                          <i className="fab fa-linkedin"></i>
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
                          digital artist
                        </small>
                      </h5>
                      <div className="mt-3">
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="twitter"
                          href="javascript:;"
                        >
                          <i className="fab fa-twitter"></i>
                        </Button>
                        <Button
                          className="btn-icon-only rounded-circle"
                          color="instagram"
                          href="javascript:;"
                        >
                          <i className="fab fa-instagram"></i>
                        </Button>
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