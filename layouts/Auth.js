import React from "react";
// reactstrap components
import { UncontrolledCarousel, Container, Row, Col, Card, CardBody, CardHeader, Button, Collapse } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routes from "routes.js";

const imgStyle = { width: "140px" };

const items = [
  {
    src: require("assets/img/sil1.png"),
    altText: "Slide 1",
    caption: "",
    header: "",
    key: "1",
  },
  {
    src: require("assets/img/sil2.jpeg"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require("assets/img/sil3.jpeg"),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const faqCardStyle = { width: "85%" }

function Auth(props) {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  React.useEffect(() => {
    document.body.classList.add("bg-sl-blue-dark");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("sl-blue-dark");
    };
  }, []);
  return (
    <>
        <MainNavbar />
        {/* Hero section */}
        <section className="header bg-gradient2-sl-red-dark py-7 py-lg-8">
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
                    <Row className="justify-content-center mt-4">
                      <Button color="primary"><i className="fab fa-discord 2x"></i> Discord</Button>
                      <Button className='text-sl-blue-light'><i class="fas fa-ship"></i> Opensea</Button>
                    </Row>
                  </Container>
                </Col>

                {/* Right Hero text block */}
                <Col lg="5" md="6">
                  <Card className="py-5">
                    <Card className="mx-4 shadow-lg ">
                      {/* <img
                      alt="..."
                      src={require("assets/img/sil1.png")}
                      /> */}

                      <UncontrolledCarousel controls={false} items={items} indicators={false}/>
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
                className="fill-sl-blue-dark"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section>
      <div className="main-content container-fluid">

        {/* about - blue content section */}
        <section className="pt-5 pb-5">
          {/* <Row className="bg-sl-blue-dark justify-content-center mt-5">{props.children}</Row> */}

          <Row className="bg-sl-blue-dark">

          <Container className="header-body">
            <Row className="align-items-center justify-content-center">

               {/* Left Hero text block */}
               <Col lg="5" md="6">
                <Card className="py-5">
                  <Card className="mx-4 shadow shadow-lg ">
                    <img
                    alt="..."
                    src={require("assets/img/sil2.jpeg")}
                    />
                  </Card>
                </Card>
              </Col>

              {/* Right hero text block */}
              <Col lg="5" md="6" className="align-middle">
                <h2 className="display-4 text-white">About 🤔</h2>
                <p className="text-start text-light lead">
                The Doge Pound is 10,000 art pieces carefully chosen by Professor Elon. A unique digital collection of diverse NFTs lying on Ethereum Blockchain. Each one is thoughtfully designed, specifically picked, and impeccably shaped. Join us on our adventure and have a good time. Having a Doge Token grants you creative and commercial rights, as well as inclusion in the community.
                </p>
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

        {/* NFT Artwork - blue content section */}
        <section className="pt-5 pb-5">
          {/* <Row className="bg-sl-blue-dark justify-content-center mt-5">{props.children}</Row> */}

          <Row className="bg-sl-blue-dark">
          <Container className="header-body">
            <Row className="align-items-center justify-content-center">

               {/* Left hero text block */}
              <Col lg="5" md="6" className="align-middle">
                <h2 className="display-4 text-white">NFTs + Artwork 🎨</h2>
                <p className="text-start text-light lead">
                With more than 180+ hand drawn traits, each NFT is unique and comes with a membership to an exclusive group of successful investors. Join an ambitious ever-growing community with multiple benefits and utilities.
                </p>
              </Col>

               {/* Right Hero text block */}
               <Col lg="5" md="6">
                <Card className="py-5">
                  <Card className="mx-4 shadow shadow-lg ">
                    <img
                    alt="..."
                    src={require("assets/img/sil3.jpeg")}
                    />
                  </Card>
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

         {/* launch roadmap - blue content section */}
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

        {/* team - blue content section */}
        <section className="pb-5">
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
                          founder | developer
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
                          color="github"
                          href="javascript:;"
                        >
                          <i className="fab fa-github"></i>
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
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
                          founder | developer
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
                          color="github"
                          href="javascript:;"
                        >
                          <i className="fab fa-github"></i>
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
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
                          founder | developer
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
                          color="github"
                          href="javascript:;"
                        >
                          <i className="fab fa-github"></i>
                        </Button>
                      </div>
                    </div>
                  </CardBody>
                </Card>
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
                          founder | developer
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
                          color="github"
                          href="javascript:;"
                        >
                          <i className="fab fa-github"></i>
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

        {/* faq - red content section */}
        <section>
          <Row className="bg-sl-red-dark py-5">
            <Container className="header-body">
              <Row className="align-items-center justify-content-center mb-5">

              {/* FAQ section header */}
              <Col lg="12" className="white text-center">
                <h2 className="display-2 text-white bolder mb-3">FAQs</h2>
              </Col>

              {/* FAQ #1 */}
              <Card style={faqCardStyle} color="sl-red-dark">
                  <CardHeader
                    id="headingOne"
                    aria-expanded={openedCollapse === "collapseOne"}
                    className="bg-sl-red-dark"
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseOne"
                              ? ""
                              : "collapseOne"
                          )
                        }
                        className=" w-100 text-white text-left bg-sl-red-dark"
                      >
                        Where can I view my NFTs?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseOne"}
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                    id="collapseOne"
                  >
                    <CardBody className="opacity-8 text-white" color="sl-red-dark">
                    Once minted, simply connect to your OpenSea account to view your NFTs.
                    </CardBody>
                  </Collapse>
              </Card>

              {/* FAQ #2 */}
              <Card style={faqCardStyle} color="sl-red-dark">
                  <CardHeader
                    id="headingOne"
                    aria-expanded={openedCollapse === "collapseOne"}
                    className="bg-sl-red-dark"
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseOne"
                              ? ""
                              : "collapseOne"
                          )
                        }
                        className=" w-100 text-white text-left bg-sl-red-dark"
                      >
                        Where can I view my NFTs?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseOne"}
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                    id="collapseOne"
                  >
                    <CardBody className="opacity-8 text-white" color="sl-red-dark">
                    Once minted, simply connect to your OpenSea account to view your NFTs.
                    </CardBody>
                  </Collapse>
              </Card>

              {/* FAQ #3 */}
              <Card style={faqCardStyle} color="sl-red-dark">
                  <CardHeader
                    id="headingOne"
                    aria-expanded={openedCollapse === "collapseOne"}
                    className="bg-sl-red-dark"
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse === "collapseOne"
                              ? ""
                              : "collapseOne"
                          )
                        }
                        className=" w-100 text-white text-left bg-sl-red-dark"
                      >
                        Where can I view my NFTs?
                      </Button>
                    </h5>
                  </CardHeader>
                  <Collapse
                    isOpen={openedCollapse === "collapseOne"}
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                    id="collapseOne"
                  >
                    <CardBody className="opacity-8 text-white" color="sl-red-dark">
                    Once minted, simply connect to your OpenSea account to view your NFTs.
                    </CardBody>
                  </Collapse>
              </Card>

              </Row>
            </Container>
          </Row>
        </section>
      </div>

      <AuthFooter />
    </>
  );
}

export default Auth;
