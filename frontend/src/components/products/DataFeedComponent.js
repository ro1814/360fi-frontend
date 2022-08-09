import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LinkContainer } from "react-router-bootstrap";

import {
  faChartBar,
  faSearch,
  faPlus,
  faChartPie,
  faEuroSign,
  faLandmark,
  faLeaf,
  faListAlt
} from "@fortawesome/free-solid-svg-icons";

import "../../styles/DataFeedStyles.css";

const DataFeedComponent = () => {
  return (
    <>
      <div className="firstDivDf">
        <h1 className="title titleDf">360 Data Feed</h1>
        <p className="firstPDf">
          A reliable solution for high quality fund data at your disposal –
          adaptable to individual needs with market leading accuracy.
        </p>
        <p className="firstPDf secondPDf">
          Our data-driven solutions, combined with state-of-the-art digital
          services can greatly improve your business profitability, reduce
          regulatory risk, and lead to better expected results for final
          investors. 360 Data Feed
        </p>
        <div className="twoCardsDivDf">
          <div className="cardBlOneDf shadow rounded">
            <h1 className="cardTitle">Certifying Data Quality</h1>
            <div className="blPlusBtn">
              <a href="#mpt" className="plusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>

          <div className="cardBlTwoDf shadow rounded">
            <h1 className="cardTitle">Tailored to Client Needs</h1>
            <div className="blPlusBtn2">
              <a href="#model" className="plusAnker">
                <FontAwesomeIcon icon={faPlus} className="plusIcon" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="secondDivDf">
        <h1 className="title">Certifying Highest Quality – Our Process</h1>
        <p className="thirdPDf">
          We tirelessly work to deliver market leading accuracy to our clients
          with our robust data gathering, processing, and auditing practices.
          All of the data delivered to our clients has undergone a rigorous
          cleansing process.
        </p>
        <div className="firstDivImgDf">
          <img
            className="firstImgDf"
            src="/images/process-data-feed.png"
            alt="data-feed"
          ></img>
        </div>
        <p className="thirdPDf">
          With this aim in mind, we have set robust processes that ensure our
          database contains the cleanest data available, sourcing the data from
          various providers, and continually auditing the veracity of the data
          fed into the database. All of our solutions rely on this thorough
          process:
        </p>
        <div className="firstDivImgDf">
          <img
            className="firstImgDf"
            src="/images/pocess-two-data-feed.png"
            alt="data-feed"
          ></img>
        </div>
      </div>

      <div className="thirdDivDf">
        <h1 className="title">Bespoke Solutions for Different Client Needs</h1>
        <div className="KfASLogosDivAce rounded shadow foourthCardB">
          <div className="logosDivOneAce firstCardIconsMi">
            <FontAwesomeIcon icon={faChartBar} className="aMIcon" />
            <h1 className="subtitleKfAS ">400+</h1>
            <p className="paraKfAce">Asset Managers</p>
          </div>
          <div className="logosDivOneAce logosDivTwoAce firstCardIconsMi">
            <FontAwesomeIcon icon={faChartPie} className="aMIcon" />
            <h1 className="subtitleKfAS">30K+</h1>
            <p className="paraKfAce">UCITS Funds</p>
          </div>
          <div className="logosDivOneAce logosDivThreeAce firstCardIconsMi">
            <FontAwesomeIcon icon={faListAlt} className="aMIcon" />
            <h1 className="subtitleKfAS">120K+</h1>
            <p className="paraKfAce">Share Classes</p>
          </div>
          <div className="logosDivOne logosDivFour">
            <FontAwesomeIcon icon={faSearch} className="aMIcon" />
            <h1 className="subtitleKfAS">250K</h1>
            <p className="paraKfAce">Data Points per ISIN</p>
          </div>
          <div className="logosDivOne logosDivFour">
            <FontAwesomeIcon icon={faLeaf} className="aMIcon" />
            <h1 className="subtitleKfAS">250K</h1>
            <p className="paraKfAce">Data Points per ISIN</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataFeedComponent;
