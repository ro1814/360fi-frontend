import React, { useState, useRef } from "react";
import {} from "../styles/LoginRegisterScreenStyles.css";
import { Button, Form, Modal } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";

function MyVerticallyCenteredModal(props) {
  const [select, setSelect] = useState("ES");
  const onSelect = (code) => setSelect(code);
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
        <div className="countryInvestorDiv">
          <div className="countrySelectorDiv">
            <ReactFlagsSelect
              className="countrySelector"
              selected={select}
              onSelect={onSelect}
              countries={[
                "ES",
                "GB",
                "AT",
                "BE",
                "BG",
                "HR",
                "CY",
                "CZ",
                "DK",
                "EE",
                "FI",
                "FR",
                "DE",
                "EL",
                "HU",
                "IS",
                "IE",
                "IT",
                "LV",
                "LI",
                "LT",
                "LU",
                "MT",
                "NL",
                "NO",
                "PL",
                "PT",
                "RO",
                "SI",
                "SK",
                "SE",
                "CH",
              ]}
            />
          </div>
          <div className="profInvestorDiv">
            <Form.Check
              type="radio"
              label="I am a Professional Investor"
            ></Form.Check>
          </div>
        </div>
        <div className="modalConditions">
          <Form.Check
            label="I hereby confirm that I have read and accepted the disclaimer and
            terms and conditions of use as well the privacy policy of
            360fundinsight.com."
          ></Form.Check>
        </div>
        <div>
          <Button>Proceed</Button>
          <Button>Cancel</Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const LoginRegisterScreen = () => {
  const [modalShow, setModalShow] = React.useState(true);
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
    </div>
  );
};

export default LoginRegisterScreen;
