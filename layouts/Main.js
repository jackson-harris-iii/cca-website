import React from "react";
// reactstrap components
import { UncontrolledCarousel, Container, Row, Col, Card, CardBody, CardHeader, Button, Collapse } from "reactstrap";

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";
// import {LaunchSection, Timeline, TeamSection } from "components/MainSections"
import Timeline from "components/MainSections/Timeline.js"
import LaunchSection from "components/MainSections/LaunchSection.js"
import TeamSection from "components/MainSections/TeamSection.js"

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

function Main(props) {
  const [openedCollapse, setOpenedCollapse] = React.useState("collapseOne");
  const [openedCollapse2, setOpenedCollapse2] = React.useState("collapseTwo");
  const [openedCollapse3, setOpenedCollapse3] = React.useState("collapseThree");
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
                {/* <span className="font-italic text-white text-muted">A stateless community project</span> */}
                </Col>

                {/* Left hero text block */}
                <Col lg="5" md="6" className="align-middle">
                <h2 className="display-4 text-white">What are the Crypto Choice Awards? 🤔</h2>
                  <p className="text-start text-light lead">
                  Youtube is the primary source of information for much of the crypto space and the Top Crypto Youtubers should be recognized in a way that resembles the decentralized nature of the crypto space.  This year's winners are being awarded solely based on the number of views their channels have received over the past year and we know that a lot of people will have opinions about this which is why this community is being formed.
                  </p>
                  <Container>
                    <Row className="justify-content-center mt-4">
                      <Button color="primary"><i className="fab fa-discord 2x"></i> Discord</Button>
                      <Button className='text-sl-blue-light'><i class="fas fa-ship"></i> Opensea</Button>
                    </Row>
                  </Container>
                </Col>

                {/* Right Hero text block */}
                <Col lg="5" md="6" className="mt-4">
                  <Card className="py-5">
                    <Card className="mx-4 shadow-lg">
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
                    style={{maxHeight: "393px"}}
                    src={require("assets/img/sil2.jpeg")}
                    />
                  </Card>
                </Card>
              </Col>

              {/* Right hero text block */}
              <Col lg="5" md="6" className="align-middle">
                <h2 className="display-4 text-white">How it works? 📝</h2>
                <p className="text-start text-light lead">
                Currently YouTube algorithms play a huge role in dictating which Crypto Youtubers have the most influence.  By holding one of our "free to mint" NFTs you will become an official member of our community with access to valuable privileges and the ability to vote on a myriad of different proposals such as but not limited to future categories, future winners and the best way to utilize the velocity income generated by the resale of these tokens.  Youtubers are pivotal in the dissemination of information in the Crypto space and if you believe that algorithms play too big of a role in determining which ones get the loudest voice, then please mint one of our free NFTs and help do something about it.  Who really is the best?  Let's let the people decide!
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
                Series 1 is a collection of the Top 5 Crypto Youtubers by views.  Each YouTuber has a run of 2000 for a total of 10,000 NFTs.  They were created using oil portraits painted by Irish artist Brian Manning with various alterations done by Elevated Designs.  The actual physical oil paintings are the property of each respective YouTuber; many clever Easter Eggs and rarities have been randomly added with intention to some Tokens such as music by the world renowned classical guitarist and composer Darragh O'Neill.  These are NOT just a bunch of hastily thrown together graphic images that were made for the sole purpose of a cash grab like so many other current NFT projects.  Hundreds of hours of painstaking detail have gone into these unique pieces of digital art which serve as historical bookmarks in the YouTube Crypto space.
                </p>
              </Col>

               {/* Right Hero text block */}
               <Col lg="5" md="6">
                <Card className="py-5">
                  <Card className="mx-4 shadow shadow-lg ">
                    <img
                    alt="..."
                    style={{maxHeight: "393px"}}
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
         {/* <LaunchSection /> */}
         <Timeline />


        {/* team - blue content section */}
        <TeamSection />

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
                    id="headingTwo"
                    aria-expanded={openedCollapse2 === "collapseTwo"}
                    className="bg-sl-red-dark"
                  >
                    <h5 className=" mb-0">
                      <Button
                        onClick={() =>
                          setOpenedCollapse(
                            openedCollapse2 === "collapseTwo"
                              ? ""
                              : "collapseTwo"
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

export default Main;
