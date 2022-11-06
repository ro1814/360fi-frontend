import React from "react";
import {} from "../styles/LoginRegisterScreenStyles.css";
import { Form, Button, Modal } from "react-bootstrap";

const LoginRegisterScreen = () => {
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
    </div>
  );
};

export default LoginRegisterScreen;
