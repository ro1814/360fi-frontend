import React from "react";
import {} from "../styles/HomeScreenStyles.css";

export const HomeScreen = () => {
  return (
    <>
      <div className="divTitle">
        <h1 className="homeTitle">Research Governance Solutions</h1>
      </div>
      <div className="aboutDiv shadow p-3 mb-5 bg-white rounded">
        <h1 className="aboutUsTitle"> ABOUT US</h1>
        <p className="aboutUsParagraph">
          360 Fund Insight Limited is an FCA regulated firm providing truly
          independent, completely transparent, and efficient investment
          governance and technology for professionals, aligned with the
          interests of the end-investor. Our aim is to help advisers maximise
          their efforts and produce better outcomes for investors.
        </p>
        <p className="aboutUsParagraph">
          Data accuracy is critical as it underpins the effectiveness of advice
          and the output of tools. We produce accurate data you can rely on, and
          flexible tools designed to assist in the advice and governance
          processes.
        </p>
      </div>
      <div className="whatWeDoDiv">
        <h1 className="title"> What we do</h1>
        <p className="whatWeDoParagraph">
          Our FundsFairwayTM platform combines over 200 years of experience in
          fund selection and operations in order to create a suite of products
          and services by fund professionals for fund professionals.
        </p>
      </div>
      <div className="whatWeDoDivInfo">

        <div className="whatDoweDoInfo shadow p-3 mb-5 rounded hover-overlay">
        <h1 className="whatDoWeDoTitle"> COMPREHENSIVE DATA</h1>
        <p className="whatDoWeDoInfoParagraph">
          Reliable UCITs fund data that is independently audited for accuracy so
          you can confidently make investment decisions.{" "}
        </p>
        </div>

        <div className="whatDoweDoInfo shadow p-3 mb-5 rounded">
        <h1 className="whatDoWeDoTitle">INVESTMENT ANALYTICS</h1>
        <p className="whatDoWeDoInfoParagraph">
        Tools for help you identify quality investments that deliver value for money, monitor day-today and comply with best execution
        </p>
        </div>
        <div className="whatDoweDoInfo shadow p-3 mb-5 rounded">
        <h1 className="whatDoWeDoTitle">ADAPTABLE SOLUTIONS</h1>
        <p className="whatDoWeDoInfoParagraph">
        Bespoke governance and advisory solutions to empower your business and unlock efficiency gains
        </p>
        </div>
      </div>

      <div>
        <div>
        <image></image>
        </div>
        <div>
        <image></image>
        </div>
        <div>
        <image></image>
        </div>
      </div>
    </>
  );
};
