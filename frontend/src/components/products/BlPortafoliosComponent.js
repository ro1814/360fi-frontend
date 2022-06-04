import React from "react";
import "../../styles/BlScreenStyles.css";
const BlPortafoliosComponent = () => {
  return (
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
        <div className="cardBl shadow rounded">
          <h1 className="cardTitle">Black-Litterman Model: Going further than MPT</h1>
        </div>

        <div className="cardBl shadow rounded">
          <h1 className="cardTitle">How our Asset Allocation model works</h1>
        </div>
      </div>
    </div>
  );
};

export default BlPortafoliosComponent;
