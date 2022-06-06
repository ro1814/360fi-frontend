import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

import "../../styles/BlScreenStyles.css";
const BlPortafoliosComponent = () => {
  return (
    <>
      <div className="firstDivBl">
        <h1 className="title titleBL">
          Black-Litterman Model Portfolio Generation
        </h1>
        <p className="firstP">
          Using our cutting edge portfolio generation tool, Advisers and Wealth
          Managers can improve their value proposition for end investors – see
          how:
        </p>
        <div className="twoCardsDiv">
          <div className="cardBlOne shadow rounded">
            <h1 className="cardTitle">
              Black-Litterman Model: Going further than MPT
            </h1>
            <a href="#first" className="blPlusBtn" type="button" >
              <FontAwesomeIcon icon={faPlus} className="plusIcon" />
            </a>
          </div>

          <div className="cardBlTwo shadow rounded">
            <h1 className="cardTitle">How our Asset Allocation model works</h1>
            <a href="#second" className="blPlusBtn2" type="button">
              <FontAwesomeIcon icon={faPlus} className="plusIcon" />
            </a>
          </div>
        </div>
      </div>

      <div id="first" className="mptMainDiv">
        <h1 className="title titleMpt ">Going further than MPT</h1>
        <div className="mptDiv">
          <div className="mptDivOne">
            <h1 className="mptSubtitle" >
              THE CLASSIC BLACK-LITTERMAN ASSET ALLOCATION MODEL
            </h1>
            <p className="mptParagraph">
              Our portfolio generation model is based upon the Black-Litterman
              model, which, in turn, is built upon the classic Markowitz model,
              and takes it one step further: 
              <br/>
              <br/>
              Starting point (MPT) – Market
              Equilibrium returns, considering historical returns, level of risk
              aversion, and the historical correlation between the assets of a
              given portfolio 
              <br/>
              <br/>
              Incorporating individual expectations about
              assets, along with their corresponding degree of certainty. The
              inclusion of expectations deepens the analysis, especially when
              the source of the expectations is reliable. This contrasts with
              traditional MPT which simply takes historical returns for the
              portfolio assets 
              <br/>
              <br/>
              The revised portfolio’s asset allocation
              faithfully reflects the subjective views and their degree of
              certainty, resulting in a more nuance, forward- looking position
              for clients Home
            </p>
          </div>
          <img src="/images/blm-first-img.png" alt="mptFirst"></img>
        </div>
      </div>
    </>
  );
};

export default BlPortafoliosComponent;
