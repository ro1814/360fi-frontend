import React from "react";
import {} from "../styles/HomeScreenStyles.css";
import { LinkContainer } from "react-router-bootstrap";

export const HomeScreen = () => {
  return (
    <>
      <div className="homeDiv">
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
            Data accuracy is critical as it underpins the effectiveness of
            advice and the output of tools. We produce accurate data you can
            rely on, and flexible tools designed to assist in the advice and
            governance processes.
          </p>
        </div>
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
            Reliable UCITs fund data that is independently audited for accuracy
            so you can confidently make investment decisions.{" "}
          </p>
        </div>

        <div className="whatDoweDoInfo shadow p-3 mb-5 rounded">
          <h1 className="whatDoWeDoTitle">INVESTMENT ANALYTICS</h1>
          <p className="whatDoWeDoInfoParagraph">
            Tools for help you identify quality investments that deliver value
            for money, monitor day-today and comply with best execution
          </p>
        </div>
        <div className="whatDoweDoInfo shadow p-3 mb-5 rounded">
          <h1 className="whatDoWeDoTitle">ADAPTABLE SOLUTIONS</h1>
          <p className="whatDoWeDoInfoParagraph">
            Bespoke governance and advisory solutions to empower your business
            and unlock efficiency gains
          </p>
        </div>
      </div>

      <div className="threeLogosDiv shadow p-1 mb-5 rounded">
        <div className="divLogo">
          <img
            className="fFLogo"
            src="/images/logos/fundsfairwayStatic.svg"
            alt="Funds Fairway Logo"
          ></img>
        </div>
        <div className="divLogo">
          <img
            className="bILogo"
            src="/images/logos/360BusinessInteligence.svg"
            alt="Business Intelligence Logo"
          ></img>
        </div>

        <div className="divLogo">
          <img
            className="eELogo"
            src="/images/logos/EagleEyeBiggerLogo.svg"
            alt="Eagle Eye Logo"
          ></img>
        </div>
      </div>

      <h1 className="wDwHtitle">Who do we help?</h1>
      <div className="whoDoWeHelp  shadow p-3 mb-5 rounded">
        <h2 className="subTitle">
          Financial Advisers, Wealth Managers and DFMs:
        </h2>
        <p className="howDoWeHelpfoParagraph">
          Through FundsFairway we offer accurate data feeds, ongoing governance,
          and fund analytics to empower you to provide the best service to your
          end investors and comply with every regulatory need in a personalised,
          integrated dashboard.
        </p>
        <div className="wDwHLinksDiv">
          <LinkContainer to="/product/eagle-eye">
            <label className="labelStylewDwHLinks">Eagle Eye</label>
          </LinkContainer>

          <LinkContainer to="/product/corporate-actions">
            <label className="labelStylewDwHLinks">Corporate Actions</label>
          </LinkContainer>

          <LinkContainer to="/product/value-for-money">
            <label className="labelStylewDwHLinks">Value for Money</label>
          </LinkContainer>

          <LinkContainer to="/product/black-litterman">
            <label className="labelStylewDwHLinks">Black-Litterman</label>
          </LinkContainer>
        </div>
      </div>
      <div className="wDwHBox">
        <div className="wDwHSubDiv shadow p-3 mb-5 rounded">
          <div className="assetManagerSubDiv">
            <h1 className="subTitle">ASSET MANAGERS</h1>
            <p className="wDwHsubParagraphs">
              360 Fund Insight simplifies fund distribution through analysis of
              relative position and identification of competitive edge through
              robust target market data, market flows and competitors’ analysis
              tools.
            </p>
          </div>

          <div className="assetManagerLinks">
            <LinkContainer to="/product/market-intelligence">
              <label className="labelStylewDwHLinks">Market Intelligence</label>
            </LinkContainer>

            <LinkContainer to="/product/value-for-money">
              <label className="labelStylewDwHLinks">Value for Money</label>
            </LinkContainer>

            <LinkContainer to="/product/competitive-analysis">
              <label className="labelStylewDwHLinks">
                Competitive Analysis
              </label>
            </LinkContainer>
          </div>
        </div>

        <div className="wDwHSubDivDistributors shadow p-3 mb-5 rounded">
          <div className="assetManagerSubDiv">
            <h1 className="subTitle">DISTRIBUTORS</h1>
            <p className="wDwHsubParagraphs">
              We provide Custodian Banks and Fund Platforms with front office
              and back-office solutions to help their clients focus on what
              really matters, the end investor. By taking control of fund data
              governance and corporate actions, we deliver information with
              class-leading accuracy and our flexible analytics tools empower
              front office solutions.
            </p>
          </div>

          <div className="distributorsLinkBox">
            <div className="distributorsLinks">
            <LinkContainer to="/product/data-feed">
                <label className="labelStylewDwHLinks"> Data Feed </label>
              </LinkContainer>

              <LinkContainer to="/product/esg-sfdr-reporting">
                <label className="labelStylewDwHLinks">
                  SFDR Reporting
                </label>
              </LinkContainer>
              
            </div>

            <div className="distributorsLinks">
              
              <LinkContainer to="/product/eagle-eye">
                <label className="labelStylewDwHLinks">Eagle Eye</label>
              </LinkContainer>

              <LinkContainer to="/product/corporate-actions">
                <label className="labelStylewDwHLinks">Corporate Actions</label>
              </LinkContainer>
            </div>
            </div>


          
            </div>
          </div>
    </>
  );
};
