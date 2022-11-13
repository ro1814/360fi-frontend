import React, { useState, useRef } from "react";
import {} from "../styles/LoginRegisterScreenStyles.css";
import { Form, Button, Modal } from "react-bootstrap";
import CountrySelect from "react-bootstrap-country-select";

function MyVerticallyCenteredModal(props) {
  const [value, setValue] = useState(null);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="modalLogoDiv">
          <img
            src="/images/logos/logo-360-1.png"
            alt="FundFairway-logo"
            className="fundFiLogo"
          />
        </div>
        <h4 className="modalH4">Disclaimer</h4>
        <p className="modalP">
          Our tools are meant for Professional Investors ONLY, in order to have
          access to our tools and services, please identify your investor
          profile and country of domicile.
        </p>
        <div className="divModalSelect">
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

const LoginRegisterScreen = () => {
  const [modalShow, setModalShow] = React.useState(true);
  const [ value, setValue ] = useState(null); 
  return (
    <div className="lRDiv">
      <div className="leftLrDiv">
        <div className="fFimgDiv">
          <img
            src="/images/logos/fund-Fairway-.png"
            alt="FundFairway-logo"
            className="fundFimg"
          />
        </div>
        <div className="lRparagraphDiv">
          <p className="lRparagraph">
            Register for a free trial today and see how our powerful tools can
            help you improve your business profitability.
          </p>
        </div>
        <div className="lRbuttonsDiv">
          <Button size="lg" className="fTbutton pill">
            Free Trial
          </Button>
          <Button size="lg" className="loginButton pill">
            Login
          </Button>
        </div>
      </div>
      <div className="rightLrDiv">
        <img
          src="/images/login-images.png"
          alt="login-images"
          className="loginImages"
        />
      </div>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {/* <CountrySelect
      value={value}
      onChange={setValue}
    /> */}
    </div>
  );
};

export default LoginRegisterScreen;
