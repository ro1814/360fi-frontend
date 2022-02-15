import React from "react";

import { 
    Paragraph,
    Title, 
    Greeting, 
     } 
from '../styles/ProductsAndServicesScreenStyles'

// import DataFeedComponent from "../components/products/DataFeedComponent";
// import EagleEyeComponent from "../components/products/EagleEyeComponent";
// import CorporateActionsComponent from "../components/products/CorporateActionsComponent";
// import ValueForMoneyComponent from "../components/products/ValueForMoneyComponent";
// import BlackLittermanComponent from "../components/products/BlackLittermanComponent";
// import EsgSfrdReportingComponent from "../components/products/EsgSfrdReportingComponent";
// import CompetitiveAnalysisComponent from "../components/products/CompetitiveAnalysisComponent";

const ProductsAndServicesScreen = () => {
  return (
    <>
    <Greeting> 
        <Title>Products and Services: </Title>
        <h2>Data Feed: </h2>
        <Paragraph>
          360 Fund Insight has built a robust proprietary database and a custom
          governance and analytical tool (FundsFairway™) that underpins our
          research process. We directly receive static and dynamic data from
          almost 400 asset managers. Data goes through our independent
          governance process to ensure the highest levels of accuracy at the
          share class level. As a (FCA) regulated company currently providing
          data governance services to institutional investors, our efforts to
          continually improve the accuracy of our database is of paramount
          importance
        </Paragraph>
        <h2>Eagle Eye:</h2>
        <Paragraph>
          Our digital fund governance tool with class-leading accuracy which
          enable efficient governance of fund ranges and buy lists while helping
          reduce the cost of ownership for investors. Proprietary target market
          data empowers Eagle Eye to help prove best execution.{" "}
        </Paragraph>
        <h2>Value for Money:</h2>
        <Paragraph>
          A web-based tool to enable professional investors objectively
          ascertain if a fund, model portfolio, or DFM solution is providing
          value for money and is of sufficient quality for inclusion in
          investment advice.{" "}
        </Paragraph>
        <h2>Corporate Actions: </h2>
        <Paragraph>
          A digital solution that aggregates corporate actions based on a custom
          fund range and prioritises the corporate actions you wish to see in a
          personalised calendar. No more sifting through thousands of fund
          corporate actions to find those that are relevant to your fund list.
          Also provides the ability to quickly calculate dividends based on the
          client holdings
        </Paragraph>
        <h2 className="fundsFairway">FundsFairway Asset Allocation and Blended Portfolio Models: </h2>
        <Paragraph>
          360 Fund Insight Ltd assists advisers with asset allocation models. We
          have devised a portfolio optimizer tool combining Black Litterman
          capital asset pricing principles and the Markowitz model to calculate
          optimal weighted portfolios. The adviser can factor in the views of a
          range of leading global asset managers to build and maintain robust
          risk-based asset allocation models.
        </Paragraph>

      </Greeting>
      {/* <DataFeedComponent/>
            <EagleEyeComponent/>
            <CorporateActionsComponent/>
            <ValueForMoneyComponent/>
            <BlackLittermanComponent/>
            <EsgSfrdReportingComponent/>
            <CompetitiveAnalysisComponent/> */}
    </>
  );
};

export default ProductsAndServicesScreen;
