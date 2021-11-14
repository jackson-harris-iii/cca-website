import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Container
} from "reactstrap";
// layout for this page
import Auth from "layouts/Auth.js";

const HomePage = () =>  {
  return (
    <>
      <Container className="">
          <div className="header-body">
            <Row className="align-items-center justify-content-center">

               {/* Left Hero text block */}
               <Col lg="5" md="6">
                <Card className="py-5">
                  <Card className="mx-4 shadow-lg ">
                    <img
                    alt="..."
                    src={require("assets/img/sil2.jpeg")}
                    />
                  </Card>
                </Card>
              </Col>

              {/* Right hero text block */}
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

            </Row>
          </div>
      </Container>
    </>
  );
}

HomePage.layout = Auth;

export default HomePage;
