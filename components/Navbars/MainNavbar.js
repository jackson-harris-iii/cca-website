import React from "react";
import Link from "next/link";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  Button
} from "reactstrap";

const MainNavbar = ({scroll, setModalOpen, modalOpen}) => {
  return (
    <>
      <Navbar className="navbar-top navbar-horizontal navbar-dark bg-darker" expand="md">
        <Container className="px-4">
          <Link href="/admin/dashboard">
            <Row className="align-items-center">
              <Col className="col-2">
                <NavbarBrand>
                  <img
                    alt="..."
                    src={require("assets/img/cca-logo.png")}
                    className=''
                  />
                </NavbarBrand>
              </Col>
              <Col className="align-items-center">
                <h3 className="text-white mt-2">
                  Crypto Choice Awards
                </h3>
              </Col>
            </Row>
          </Link>
          <button className="navbar-toggler" id="navbar-collapse-main">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse navbar toggler="#navbar-collapse-main" className="bg-darker">
            <div className="navbar-collapse-header d-md-none">
              <Row>
                <Col className="collapse-brand" xs="8">
                  <Link href="/">
                    <img
                      alt="..."
                      src={require("assets/img/cca-logo.png")}
                    />
                  </Link>
                  <span className="ml-2 text-white">Crypto Choice Awards</span>
                </Col>
                <Col className="collapse-close" xs="4">
                  <button className="navbar-toggler" id="navbar-collapse-main">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="ml-auto align-items-center" navbar>
              <NavItem>
                <Link href="#about">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <i className="ni ni-planet text-sl-blue-light" />
                    <span className="nav-link-inner--text text-sl-blue-light">About</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="">
                  <NavLink href="#team" className="nav-link-icon">
                    <i className="ni ni-circle-08 text-sl-blue-light" />
                    <span className="nav-link-inner--text text-sl-blue-light">Team</span>
                  </NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link href="#roadmap">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <i className="ni ni-key-25 text-sl-blue-light" />
                    <span className="nav-link-inner--text text-sl-blue-light">Roadmap</span>
                  </NavLink>
                </Link>
              </NavItem>
              {/* <NavItem>
                <Link href="/admin/profile">
                  <NavLink href="#pablo" className="nav-link-icon">
                    <Button>
                      <span className="nav-link-inner--text">Connect Wallet</span>
                    </Button>
                  </NavLink>
                </Link>
              </NavItem> */}
               <NavItem>
                <NavLink
                  onClick={() => setModalOpen(!modalOpen)}
                >
                   <i className="fa fa-envelope text-sl-blue-light" />
                 <span className="text-sl-blue-light"> Contact </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <Button
                  className="btn-icon-only rounded-circle"
                  color="twitter"
                  href="https://twitter.com/thecryptochoice" target="blank"
                >
                  <i className="fab fa-twitter"></i>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
