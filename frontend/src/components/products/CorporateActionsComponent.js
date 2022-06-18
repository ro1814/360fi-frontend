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

      <div>
        <div>
          <h1>Transforming Corporate Actions Reporting</h1>
          <p>
            Distribution platforms and fund buyers need strong risk governance
            and operational efficiencies to avoid monetary, regulatory, and
            reputational damage. Corporate actions processing is currently run
            through resource-intensive manual systems running higher risks to
            the business
          </p>
          <p>
            We help provide resilience and efficiency that is easily scalable to
            the demands of your business. Our solution fully automates the
            corporate action life cycle customised to your needs.
          </p>
        </div>

        <div>
          <h1>Our Smart Corporate Actions Tool</h1>
          <p>
            Our Corporate Action Tool is a digital solution that aggregates and
            prioritises the corporate actions you wish to see in a personalised
            digital interface. From over 30 categories of corporate actions that
            we collect, you can prioritise and select which corporate actions
            are most relevant based on your customised universe.
          </p>
          <p>
            With a robust governance process built by our in-house analysts, we
            provide accurate and complete corporate actions data, documentation,
            and the ability to quickly calculate dividends based on the client
            holdings.
          </p>
          <p>
            We offer corporate action solution through our user-friendly
            interface with a customisable calendar to easily monitor your funds
            – or through daily FTP file or API to seamlessly connect to your
            existing infrastructure.
          </p>
        </div>
      </div>
    </>
  );
};

export default CorporateActionsComponent;
