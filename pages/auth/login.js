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
} from "reactstrap";
// layout for this page
import Main from "layouts/Main.js";

function Login() {
  return (
    <>
      <Col lg="5" md="7">
        <Row>
          <Col>
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

      </Col>
    </>
  );
}

Login.layout = Main;

export default Login;
