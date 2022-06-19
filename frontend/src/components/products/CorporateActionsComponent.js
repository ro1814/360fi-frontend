import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { LinkContainer } from "react-router-bootstrap";
import "../../styles/CaScreenStyles.css";

const CorporateActionsComponent = () => {
  return (
    <>
      <div className="firstDivCa">
        <h1 className="title titleCa">Smart Corporate Actions</h1>
        <p className="firstPCa">
          Wealth Managers and Financial Advisers are obligated to keep track of
          relevant Corporate Actions regarding their client portfolios.
        </p>
        <p className="firstPCa firstPM">
          Looking to simplify this arduous process, we have developed a
          cutting-edge tool in order to greatly simplify these tasks, and
          enabling WM and Advisers to focus on other value adding tasks.
        </p>

        <div className="threeCardsDiv">
          <div className="cardCaOne shadow rounded">
            <h1 className="cardTitleCa ">
              Transforming Corporate Actions Reporting
            </h1>
            <div className="blPlusBtn">
              <a href="#mpt" className="plusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>

          <div className="cardCaTwo shadow rounded">
            <h1 className="cardTitleCa cardTitleCaM">How it Works</h1>
            <div className="blPlusBtn2 caPlusBtn2">
              <a href="#model" className="plusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>

          <div className="cardCaThree shadow rounded">
            <h1 className="cardTitleCa">A Powerful End-to-End Solution</h1>
            <div className="blPlusBtn2">
              <a href="#model" className="plusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="secondCaDiv">
        <div>
          <h1 className="title secondDivTitle">
            Transforming Corporate Actions Reporting
          </h1>
          <p className="secondCaDivP">
            Distribution platforms and fund buyers need strong risk governance
            and operational efficiencies to avoid monetary, regulatory, and
            reputational damage. Corporate actions processing is currently run
            through resource-intensive manual systems running higher risks to
            the business.
          </p>
          <p className="secondCaDivP">
            We help provide resilience and efficiency that is easily scalable to
            the demands of your business. Our solution fully automates the
            corporate action life cycle customised to your needs.
          </p>
        </div>

        <div className="partTwoP">
          <h1 className="title secondDivTitle">
            Our Smart Corporate Actions Tool
          </h1>
          <p className="secondCaDivP">
            Our Corporate Action Tool is a digital solution that aggregates and
            prioritises the corporate actions you wish to see in a personalised
            digital interface. From over 30 categories of corporate actions that
            we collect, you can prioritise and select which corporate actions
            are most relevant based on your customised universe.
          </p>
          <p className="secondCaDivP">
            With a robust governance process built by our in-house analysts, we
            provide accurate and complete corporate actions data, documentation,
            and the ability to quickly calculate dividends based on the client
            holdings.
          </p>
          <p className="secondCaDivP">
            We offer corporate action solution through our user-friendly
            interface with a customisable calendar to easily monitor your funds
            – or through daily FTP file or API to seamlessly connect to your
            existing infrastructure.
          </p>
        </div>
      </div>

      <div className="thirdCaDiv">
        <h1 className="title titleCaTwo">How it works</h1>
        <div className="thirdSubDiv rounded shadow sDiv">
          <h1 className="subTitleCa">COLLECTION</h1>
          <p className="thirdDivP">
            Over 30 categories of corporate action events are collected directly
            from asset managers and Transfer agents and automatically processed
            to our proprietary Eagle Eye Database. 360 Fund Insight is gathering
            regulatory data and corporate actions for funds from more than 200
            asset manager across Europe. Corporate Actions are collected at
            Share Class, Fund and Umbrella levels. Our governance team can
            absorb the data through the common methods of corporate action
            dissemination including email communication and files – ensuring
            maximum coverage.
          </p>
        </div>

        <div className="thirdSubDiv rounded shadow sDivTwo">
          <h1 className="subTitleCa">GOVERNANCE</h1>
          <p className="thirdDivP">
            Our robust governance process detects and corrects any corrupt or
            inaccurate data, as well as identifies incomplete, incorrect, or
            irrelevant parts of the data. We then run a series of quality
            checks, which includes cross-checking with legal documentation to
            confirm data quality from the internal independent team, as well as
            confirming data validation directly from the asset managers and
            Transfer Agents.
          </p>
          <p className="thirdDivP">
            Eagle Eye database is constructed through a hierarchy system
            connecting mutual fund data from management company level to share
            class level with referential integrity. Corporate actions for funds
            can often affect various levels of a fund structure and through this
            hierarchy we can automatically process one corporate action and link
            through to all ISINs that are affected by that event. This ensures
            that clients receive all corporate actions that directly affect
            their universe.
          </p>
        </div>

        <div className="thirdSubDiv rounded shadow sDivTwo">
          <h1 className="subTitleCa">DISSEMINATION</h1>
          <ul className="ulThirdDiv">
            <li className="thirdDivLi">
              DAILY processing of corporate actions – reduced time lag between
              issuance and dissemination.
            </li>
            <li className="thirdDivLi">
              360 Fund Insight data/files/messages could be connected APIs or
              daily SFTP files – even connecting to clients existing
              infrastructure/calendars.
            </li>
            <li className="thirdDivLi">
              Customised files can be issued to different areas of a business
              depending on corporate action relevance (e.g. operational changes
              vs. investment policy/legal events).
            </li>
            <li>360 Tool (Web solution) integrated solution or white label.</li>
          </ul>
        </div>
      </div>

      <div className="fourthCaDiv">
        <h1 className="title titleCaFourthDiv">A Powerful End-to-End Solution</h1>

        <div className="fourthSubDiv">
          <ul className="ulThirdDiv">
            <li className="thirdDivLi">
              Monitoring and reporting is simplified in a user-friendly calendar
              view. Customizable to each user, displaying only the relevant
              corporate actions in accordance with the user’s role/priority.
            </li>
            <li className="thirdDivLi">
              Up to 5 different client levels of client hierarchy
            </li>
            <li>
              Flexibility in format delivery, and connectivity to existing
              software
            </li>
          </ul>
        </div>

        <div className="videoDivCa">
            <video
              src="/videos/ca-vid.mp4"
              className="vidCa shadow rounded"
              controls
            ></video>
          </div>
      </div>
    </>
  );
};

export default CorporateActionsComponent;
