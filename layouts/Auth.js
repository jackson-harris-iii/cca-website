import React from "react";
// reactstrap components
import { Container, Row, Col, Card, Button } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

function Auth(props) {
  React.useEffect(() => {
    document.body.classList.add("bg-darker");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("bg-darker");
    };
  }, []);
  return (
    <>
      <div className="main-content">
        <MainNavbar />
        <div className="header bg-gradient2-sl-red-dark py-7 py-lg-8">
          {/* HERO CONTAINER */}
          <Container>
            <div className="header-body">
              <Row className="align-items-center justify-content-center">
                {/* Hero welcome text */}
                <Col lg="12" className="white text-center mb-5">
                <h1 className="display-1 text-white bolder">Welcome to the Crypto Choice Awards</h1>
                <span className="font-italic text-white text-muted">A stateless community project</span>
                </Col>

                {/* Left hero text block */}
                <Col lg="5" md="6" className="align-middle">
                  <p className="text-start text-light lead">
                  The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped. Join us on our adventure and have a good time. Having a Doge Token grants you creative and commercial rights, as well as inclusion in the community.
                  </p>
                  <Container>
                    <Row className="justify-content-center">
                      <Button color="primary"><i className="fab fa-discord 2x"></i> Discord</Button>
                      <Button className='text-sl-blue-light'><i class="fas fa-ship"></i> Opensea</Button>
                    </Row>
                  </Container>
                </Col>

                {/* Right Hero text block */}
                <Col lg="5" md="6">
                  <Card className="py-5">
                    <Card className="mx-4 shadow-lg ">
                      <img
                      alt="..."
                      src={require("assets/img/sil1.png")}
                      />
                    </Card>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>

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
        </div>
        {/* Page content */}
        <Container className="mt-5 pb-5">
          <Row className="justify-content-center mt-5">{props.children}</Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
}

export default Auth;
