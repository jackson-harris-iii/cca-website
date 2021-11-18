import React, {useEffect, useRef, useState} from "react";
// reactstrap components
import { UncontrolledCarousel, Container, Row, Col, Card, CardBody, CardHeader, Button, Collapse, Modal, ModalBody, ModalFooter, Input  } from "reactstrap";

import Link from 'next/link'
import { useForm, ValidationError } from '@formspree/react';

// core components
import MainNavbar from "components/Navbars/MainNavbar.js";
import MainFooter from "components/Footers/MainFooter.js";
// import {LaunchSection, Timeline, TeamSection } from "components/MainSections"
import Timeline from "components/MainSections/Timeline.js"
import LaunchSection from "components/MainSections/LaunchSection.js"
import TeamSection from "components/MainSections/TeamSection.js"
import ContactModal from "components/ContactModal.js"

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
    src: require("assets/img/sil4.png"),
    altText: "Slide 2",
    caption: "",
    header: "",
    key: "2",
  },
  {
    src: require("assets/img/sil5.png"),
    altText: "Slide 3",
    caption: "",
    header: "",
    key: "3",
  },
];

const faqCardStyle = { width: "85%" }

function Main(props) {
  const [openedCollapse, setOpenedCollapse] = useState(null);
  const [openedCollapse2, setOpenedCollapse2] = useState(null);
  const [openedCollapse3, setOpenedCollapse3] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [contactSucceess, setContactSuccess] = useState(false);

  // const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView()

  const [contactSubmit, handleSubmit] = useForm("mleaqzba");

  useEffect(() => {
    if (contactSubmit.succeeded) {
      setContactSuccess(true);
    }
  }, [contactSubmit])

  useEffect(() => {
    document.body.classList.add("bg-sl-blue-dark");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.remove("sl-blue-dark");
    };
  }, []);
  return (
    <>
        <MainNavbar scroll={executeScroll} isOpen={modalOpen} setModalOpen={setModalOpen}/>
        {/* Hero section */}
        <section className="header bg-gradient2-sl-red-dark pt-5 pt-lg-6 pb-7 pb-lg-8">
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
                  The Crypto Choice Awards are a first-of-its-kind decentralized award program for cryptocurrency influencers powered by NFTs and benefiting nonprofits. In this inaugural year, we are recognizing the top crypto YouTubers based solely on the number of views their channels have received over the past year with a series of NFTs derived from custom oil paintings of the honorees. In future years, token holders will vote to shape the program and choose the winners as well as the causes our DAO supports.
                  </p>
                  <Container>
                    <Row className="justify-content-center mt-4">
                      {/* <Button color="primary"><i className="fab fa-discord 2x"></i> Discord</Button>
                      <Button className='text-sl-blue-light'><i class="fas fa-ship"></i> Opensea</Button> */}

                      <Button className='' color="twitter" href="https://twitter.com/thecryptochoice" target="blank"><i className="fab fa-twitter"></i> Follow us on Twitter!</Button>
                    </Row>
                  </Container>
                </Col>

                {/* Right Hero text block */}
                <Col lg="5" md="6" className="mt-4">
                  <Card className="pt-4 pb-5 bg-darker">
                    <UncontrolledCarousel controls={false} items={items} indicators={false} cassModule={{maxHeight: "393px", backgroundColor: "transparent"}}/>
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
        <section className="pt-5 pb-5" id="about">
          {/* <Row className="bg-sl-blue-dark justify-content-center mt-5">{props.children}</Row> */}

          <Row className="bg-sl-blue-dark">

          <Container className="header-body">
            <Row className="align-items-center justify-content-center">

               {/* Left Hero text block */}
               <Col lg="5" md="6" className="mt-4">
                <Card className="pt-4 pb-5 bg-darker">
                    <img
                    alt="..."
                    style={{backgroundColor: "transparent"}}
                    src={require("assets/img/sil2.png")}
                    className="img-fluid"
                    />
                </Card>
              </Col>

              {/* Right hero text block */}
              <Col lg="5" md="6" className="align-middle">
                <h2 className="display-4 text-white">How it works? 📝</h2>
                <p className="text-start text-light lead">
                By holding one of our "free to mint" NFTs you will become an official member of the Crypto Choice Awards community (it’s like you’re part of the Academy for Motion Picture Awards, but for crypto!) with access to valuable privileges and the ability to vote on a myriad of different proposals such as future categories, future winners and how to utilize the velocity income generated by the resale of these tokens. Influencers are pivotal in the dissemination of information in the crypto space, and if you believe that algorithms play too big of a role in determining which ones get the loudest voice, then please mint one of our free NFTs and help do something about it. Who really is the best? Let's let the people decide!
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
                Series 1 is a collection of the Top 5 Crypto YouTubers by views over the past year.  Each honoree has a run of 2000 NFTs for a total of 10,000 NFTs in this inaugural run.  The NFTs are stunning works of art painted by Irish artist <Link href="http://brianoart.com/blog"><a target="blank">Brian Manning</a></Link> with variations created by <Link href="https://www.linkedin.com/in/amadeus-tafoya-565738226"><a target="blank">Elevated Designs.</a></Link> The physical oil paintings are the property of each respective honoree. Many clever easter eggs and rarities have been randomly added to some tokens such as music by the world-renowned classical guitarist and composer <Link href="http://darraghoneill.com/"><a target="blank">Darragh O'Neill.</a></Link> Hundreds of hours of painstaking detail have gone into these unique pieces of digital art which serve as historical bookmarks of the inaugural Crypto Choice Awards.
                </p>
              </Col>

               {/* Right Hero text block */}
               <Col lg="5" md="6">
                <Card className="pt-4 pb-5 bg-darker">
                    <img
                    alt="..."
                    style={{backgroundColor: "transparent"}}
                    src={require("assets/img/sil3.png")}
                    className="img-fluid"
                    />
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
              {/* <Card style={faqCardStyle} color="sl-red-dark">
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
              </Card> */}

              {/* FAQ #3 */}
              {/* <Card style={faqCardStyle} color="sl-red-dark">
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
              </Card> */}

              </Row>
            </Container>
          </Row>
        </section>
      </div>

      <MainFooter />
      {/* <ContactModal isOpen={modalOpen} setModalOpen={setModalOpen}/> */}

      <Modal toggle={() => setModalOpen(!modalOpen)} isOpen={modalOpen}>
        <div className="mt-4">
          <Row className="align-items-center">
            <Col className="col-12">
              <div className=" display-4 text-center text-darker">
                Contact Form
              </div>
            </Col>
          </Row>
        </div>
        <ModalBody>
          {
            contactSucceess
            ? <p>Thanks for your submission!</p>
            :
            <form onSubmit={handleSubmit}>
              <label htmlFor="email" className="text-darker">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                name="email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={contactSubmit.errors}
              />
              {/* <textarea
                id="message"
                name="message"
              /> */}
              <ValidationError
                prefix="Message"
                field="message"
                errors={contactSubmit.errors}
              />
              <ModalFooter>
                <Button color="sl-blue-light" className="mt-2" type="submit" disabled={contactSubmit.submitting}>
                  Submit
                </Button>
                <Button
                  color="secondary"
                  type="button"
                  onClick={() => setModalOpen(!modalOpen)}
                >
                  Close
                </Button>
              </ModalFooter>
            </form>
          }
        </ModalBody>

      </Modal>
    </>
  );
}

export default Main;
