import React from "react";
import { Form, Button, FloatingLabel, Col } from "react-bootstrap";
import {} from "../styles/ContactUsStyles.css";

const ContactUsScreen = () => {
  return (
    <>
      <div className="firstMeetUsDiv">
        <div className="firstSubDivMu">
          <div className="logoMUDiv">
            <img src="/logo-header360.svg" alt="360-logo" className="logoMU" />
          </div>

          <div className="secondSubDivMu">
            <div className="ukImageDiv">
              <img src="/images/uk-map.svg" alt="ukMap" className="ukMap" />
              <p className="pAddressTitle">UNITED KINGDOM</p>
              <p className="pAddress">Spaces Ealing Aurora 71-75</p>
              <p className="pAddress">Uxbridge Road - Ealing</p>
              <p className="pAddress">LONDON | W5 5SL</p>
              <p className="pAddress">+44(0)795 714 7852</p>
            </div>

            <div className="spImageDiv">
              <img
                src="/images/spain-map.png"
                alt="Map-Spain"
                className="spainMap"
              />
              <p className="pAddressTitleSP">SPAIN</p>
              <p className="pAddress">Calle Félix Boix, 3</p>
              <p className="pAddress">PLanta 1º</p>
              <p className="pAddress">MADRID - 28035</p>
              <p className="pAddress">+35 915 797 084</p>
            </div>
          </div>
        </div>

        <div className="formDivMu">
          <h1 className="formTitle">Contact Us</h1>
          <Form>
            <Form.Group className="mb-3" controlId="contactUsForm">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Name"
                className="mb-3 border-dark"
              >
                <Form.Control type="name" placeholder="Name" 
                className="border-dark"
                />
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Company"
                className="mb-3"
              >
                <Form.Control type="text" placeholder="Company" className="border-dark"/>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="E-mail"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="Email" className="border-dark"/>
              </FloatingLabel>

              <FloatingLabel
                controlId="floatingTextarea"
                label="Message (optional)"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: "90px" }}
                  className="border-dark"
                />
              </FloatingLabel>
              <Col md={{ span: 10, offset: 2 }}>
                <Form.Check label="Accept Privacy Policy and Conditions" />
              </Col>
              <Col md={{ span: 10, offset: 2 }}>
                <Form.Check label="Subscribe to relevant updates and news" />
              </Col>
              <Col md={{ span: 10, offset: 5 }}>
                <Button type="submit" className="mb-2 mt-3" size="lg">
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </div>
    </>
  );
};
export default ContactUsScreen;
