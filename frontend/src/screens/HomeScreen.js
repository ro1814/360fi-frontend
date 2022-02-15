import React from "react";
import {
  Paragraph,
  Title,
  Greeting,
  Products,
  Product,
  ProductParagraph,
} from "../styles/HomeScreenStyles";

export const HomeScreen = () => {
  return (
    <>
      <Greeting>
        <h1>Philosophy</h1>
        <Paragraph>
          360 Fund Insight Limited is a regulated firm providing truly
          independent, completely transparent, and efficient investment
          governance and technology for professionals, aligned with the
          interests of the end-investor. Our aim is to help advisers maximise
          their efforts and produce better outcomes for investors.
        </Paragraph>
        <Paragraph>
          Data accuracy is critical as it underpins the effectiveness of advice
          and the output of tools. We produce accurate data you can rely on, and
          flexible tools designed to assist in the advice and governance
          processes
        </Paragraph>
      </Greeting>

      <Greeting>
        <Title>Products and Services Overview</Title>
        <Paragraph>
          FundsFairway ™ platform – Over 200 years of experience in fund
          selection and operations that have combined to create a suite of
          products and services by fund professionals for fund professionals.
        </Paragraph>

        <Products>
          <Product>
            <h3>
              {" "}
              <strong> Comprehensive DATA </strong>{" "}
            </h3>
            <ProductParagraph>
              Reliable UCITs fund data that is independently audited for
              accuracy so you can confidently make investment decisions.
            </ProductParagraph>
          </Product>

          <Product>
            <h3>
              {" "}
              <strong> Investment Analytic </strong>
            </h3>
            <ProductParagraph>
              Tools for help you identify quality investments that deliver value
              for money, monitor day-today and comply with best execution.
            </ProductParagraph>
          </Product>

          <Product>
            <h3>
              {" "}
              <strong>Adaptable Solution </strong>{" "}
            </h3>
            <ProductParagraph>
              Bespoke governance and advisory solutions to empower your business
              and unlock efficiency gains.
            </ProductParagraph>
          </Product>
        </Products>
        <br />
        <div>
          <Title>Who Do We Help?</Title>
          <h1>Financial Advisers, Wealth Managers and DFMs: </h1>
          <Paragraph>
            Through FundsFairway we offer accurate data feeds, ongoing
            governance, and fund analytics to empower you to provide the best
            service to your end investors and comply with every regulatory need
            in a personalised, integrated dashboard.
          </Paragraph>

          <h1>Asset Managers </h1>
          <Paragraph>
            360 Fund Insight assists fund distribution through analysis of
            relative position and identification of competitive edge through
            robust target market data, market flows and competitors’ analysis
            tools.
          </Paragraph>

          <h1>Distributors </h1>
          <Paragraph>
            At 360 Fund Insight, we empower Custodian Banks and Fund Platforms
            providing front office and back-office solutions to help their
            clients to focus on what really matters, the end investor. By taking
            control of the governance of fund data and corporate actions, we
            provide information with class-leading accuracy and our flexible
            analytics tools empower front office solutions.
          </Paragraph>
        </div>
        <br />
        <div>
          <Title>Testimonials:</Title>
          <h3>
            <strong>Inversis: </strong>
          </h3>
          <Paragraph>
            '360 Fund Insight provides a governed data solution tailored to
            empowering their operational infrastructure. Our data quality has
            led to significant reductions in costs and improved operational
            efficiencies'.{" "}
          </Paragraph>
          <h3>
            {" "}
            <strong> Punter Southall Group: </strong>{" "}
          </h3>
          <Paragraph>
            'Through our Eagle Eye ™ tool Punter Southall Group are able to meet
            their business objectives with our robust cost and charges data and
            proprietary target market database.''{" "}
          </Paragraph>
        </div>
      </Greeting>
    </>
  );
};
