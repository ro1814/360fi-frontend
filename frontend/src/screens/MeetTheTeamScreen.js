import React, { useState } from "react";
import { Container, Collapse } from "react-bootstrap";
import {
  MeetTitle,
  Greeting,
  Paragraph,
  Title,
  BioParagraph,
  BioName,
  BioImagen,
  MobileCard,
  BioSpan,
} from "../styles/MeetusStyles";

const MeetTheTeamScreen = () => {
  const [open, setOpen] = useState(false);

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
          We aspire to provide truly independent, transparent and cost-effective
          investment research that is aligned with the interests of the end
          investor in this new environment. Current business models are
          challenged as transparency, independence and best execution become
          critical in the new regulatory regime.
        </Paragraph>
        <Paragraph>
          Our philosophy is to focus on becoming your trusted partner to help
          your company adapt and differentiate your business model to benefit
          from the revolutionary changes in the market in a fast and
          cost-effective manner
        </Paragraph>
      </Greeting>

      <Container>
        <div className="row text-center">
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4 ">
              <BioImagen
                src="/images/meetusimages/EnriquePardo.png"
                alt="Enrique Pardo CEO"
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <BioName
                className="mb-0"
                onClick={() => setOpen(!open)}
                aria-controls="example-collapse-text"
                aria-expanded={open}
              >
                Enrique Pardo
                
              </BioName>
              <BioSpan className="small text-uppercase text-muted">CCO</BioSpan>
              
              <Collapse in={open} className="example">
                <div id="example-collapse-text">
                  <BioParagraph>
                    Enrique had been working in the Asset Management industry
                    for over 30 years before co-founding 360 Fund Insight.
                    Enrique worked at Allfunds Bank as Global Head of Investment
                    and was a member of the Executive Committee since 2013.
                  </BioParagraph>
                  <BioParagraph>
                    Enrique has years of experience leading teams of Investment
                    Professionals providing Fund Research,Governance, and
                    Investment Solutions. CFA charter holder since 2003.
                  </BioParagraph>
                  <BioParagraph>
                    *Enrique holds Director Responsibilities as described by the
                    FCA
                  </BioParagraph>
                </div>
              </Collapse>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <BioImagen
                src="/images/meetusimages/PedroMarazuela.png"
                alt="Pedro Marazuela COO"
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <BioName className="mb-0">Pedro Marazuela</BioName>
              <span className="small text-uppercase text-muted">COO</span>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <BioImagen
                src="/images/meetusimages/KatyGavelas.png"
                alt="Katy Gavelas CCO"
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <BioName className="mb-0">Katy Gavelas</BioName>
              <span className="small text-uppercase text-muted">CCO</span>
            </div>
          </div>
          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <BioImagen
                src="/images/meetusimages/PhilLindsay.png"
                alt="Phil Lindsay (Chairman)"
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <BioName className="mb-0">Philip Lindsay</BioName>
              <span className="small text-uppercase text-muted">Chairman</span>
            </div>
          </div>

          <div className="col-xl-3 col-sm-6 mb-5">
            <div className="bg-white rounded shadow-sm py-5 px-4">
              <BioImagen
                src="/images/meetusimages/PhilLindsay.png"
                alt="Phil Lindsay (Chairman)"
                width="100"
                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
              />
              <BioName className="mb-0">Philip Lindsay</BioName>
              <span className="small text-uppercase text-muted">Chairman</span>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default MeetTheTeamScreen;
