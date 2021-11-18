/*eslint-disable*/
import React from "react";

// reactstrap components
import { NavItem, NavLink, Nav, Container, Row, Col } from "reactstrap";

function MainFooter() {
  return (
    <>
      <footer className="py-5 bg-darker">
        <Container>
          <Row className="align-items-center justify-content-xl-between">
            <Col xl="6">
              <div className="copyright text-center text-xl-left text-muted">
                © {new Date().getFullYear()}{" "}
                <a
                  className="ml-1 text-muted"
                  href="https://www.creative-tim.com?ref=njsad-auth-footer"
                  target="_blank"
                >
                  stateless
                </a>
              </div>
            </Col>
            <Col xl="6">
              <Nav className="nav-footer justify-content-center justify-content-xl-end">
                {/* <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com?ref=njsad-auth-footer"
                    target="_blank"
                  >
                    Discord
                  </NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink
                    href="https://www.creative-tim.com/presentation?ref=njsad-auth-footer"
                    target="_blank"
                  >
                    About Us
                  </NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink
                    href="http://blog.creative-tim.com?ref=njsad-auth-footer"
                    target="_blank"
                  >
                    Contact
                  </NavLink>
                </NavItem> */}
                {/* <NavItem>
                  <NavLink
                    href="https://github.com/creativetimofficial/argon-dashboard/blob/master/LICENSE.md?ref=njsad-auth-footer"
                    target="_blank"
                  >
                    Terms of Service
                  </NavLink>
                </NavItem> */}
              </Nav>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default MainFooter;
