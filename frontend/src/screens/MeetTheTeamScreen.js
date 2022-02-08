import React from "react";
import { MeetTitle, Greeting, Paragraph, Title } from "../styles/MeetusStyles";

const MeetTheTeamScreen = () => {
  return (
    <>
      <MeetTitle>
        <Title> Our Team</Title>
      </MeetTitle>
      <Greeting>
        <Paragraph>
          We are a vastly experienced team that moved away from legacy business
          models to create something innovative in our industry.
        </Paragraph>
        <Paragraph>
          We aspire to provide truly independent, transparent and cost-effective investment
          research that is aligned with the interests of the end investor in
          this new environment. Current business models are challenged as
          transparency, independence and best execution become critical in the
          new regulatory regime.
          </Paragraph>
          <Paragraph>
          Our philosophy is to focus on becoming your
          trusted partner to help your company adapt and differentiate your
          business model to benefit from the revolutionary changes in the market
          in a fast and cost-effective manner
        </Paragraph>
      </Greeting>
    </>
  );
};
export default MeetTheTeamScreen;
