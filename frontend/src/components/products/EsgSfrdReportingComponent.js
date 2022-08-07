import React from "react";
import {} from "../../styles/EsgSfrdReportingStyles.css";

const EsgSfrdReportingComponent = () => {
  return (
    <>
      <div className="firstDivEsg">
        <h1 className="title titleEsg">ESG – SFDR Reporting</h1>
        <p className="esgP">
          The demand for transparency on sustainable and socially responsible
          practices is on the rise. Environmental, Social and Governance (ESG)
          analysis and reporting can provide valuable insights and help create
          long-term value for stakeholders. It can significantly impact the
          financial metrics of a company and better inform investment decisions.
        </p>
        <p className="esgP esgPTwo">
          Build sustainability into your investment strategy with our
          comprehensive ESG fund data. As regulations and disclosures are
          rapidly changing in this area, we offer transparent and comprehensive
          data governance solutions for analysis at fund level and aggregated
          portfolio level.
        </p>
      </div>

      <div className="container">
        <div className="timeline">
          <div className="timeline-row">
            <div className="timeline-time">November 2021</div>
            <div className="timeline-content timeline-dot-green timeline-background-green">
              <p className="timeline-content-p">
                UK SUSTAINABILITY REGIME: FCA PROPOSALS FOR SUSTAINABILITY
                DISCLOSURE REQUIREMENTS AND INVESTMENT PRODUCT LABELS
              </p>
              <p className="timeline-content-p">
                UK Sustainability Regime: FCA published discussion paper
                (DP21/4) on Sustainability Disclosure Requirements and
                investment product labels.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">January 2022</div>
            <div className="timeline-content timeline-dot-blue timeline-background-blue">
              <h1 className="subTitle">SFDR</h1>
              <p className="timeline-content-p">
                Disclosure Regulation (EU) 2019/2088 – Key applicable dates for
                sustainability-related disclosures in the financial sector
                ("SFDR"): <br /> -Periodic disclosure reporting requirements
                begin to apply.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">January 2022</div>
            <div className="timeline-content timeline-dot-green timeline-background-green">
              <p className="timeline-content-p">
                EU Taxonomy Regulation reporting requirements on climate change
                mitigation and adaption to apply; additional reporting may apply
                for Arts 8 or 9 SFDR products
              </p>
              <p className="timeline-content-p">
                EU Taxonomy Regulation – applicable date for the establishment
                of a framework to facilitate sustainable investment: delegated
                acts on climate change mitigation and adaption to apply.
                Additional reporting requirements may apply for Art 8 or 9 SFDR
                products.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">January 2022</div>
            <div className="timeline-content timeline-dot-blue timeline-background-blue">
              <p className="timeline-content-p">
                UK TCFD disclosure requirements in force for larger asset
                managers and asset owners
              </p>
              <p className="timeline-content-p">
                In scope: Largest UK-authorised asset managers and asset owners.
              </p>
              <p className="timeline-content-p">
                Qualifying condition: Balance sheet or assets: Asset managers
                with AuM &gt;£50bn; Asset owners with in- scope assets of £25bn
                or more.
              </p>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">
              8:00 AM<small>Dec 18</small>
            </div>
            <div className="timeline-content">
              <i className="icon-code"></i>
              <h4>Admin Dashboard!</h4>
              <p>
                Maxwell Admin Dashboard contains C3 graphs, flot graphs, data
                tables, calendar.
              </p>
              <div className="thumbs"></div>
              <div className="">
                <span className="badge badge-pill">Ecommerce</span>
                <span className="badge badge-pill">CRM</span>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-time">
              7:45PM<small>Dec 21</small>
            </div>
            <div className="timeline-content">
              <i className="icon-attachment"></i>
              <h4>Admin Template!</h4>
              <p>
                Maxwell Admin Dashboard contains C3 graphs, flot graphs, data
                tables, calendar, drag &amp; drop and ion slider.
              </p>
              <div className="thumbs"></div>
              <div className="">
                <span className="badge badge-pill">Orders</span>
                <span className="badge badge-pill">Sales</span>
              </div>
            </div>
          </div>

          <div className="timeline-row">
            <div className="timeline-content">
              <p className="m-0">Loading...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EsgSfrdReportingComponent;
