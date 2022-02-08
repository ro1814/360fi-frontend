import styled from "styled-components";

export const MeetTitle = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  text-align: center;
  width: auto;

  @media (max-width: 924px) {
    width: auto;
  }
`
export const Title = styled.h1`
    margin: 2%;

    @media (max-width: 924px) {
        width: auto;
    }
`

export const Greeting = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  margin: 2% 25%;
  width: auto;
  color: #6b6b6e;
  text-align: justify;

  @media (max-width: 924px) {
    width: auto;
  }
`;

export const Paragraph = styled.p`
  font-size: 24px;
  display: block;
  color: #6b6b6e;

  @media (max-width: 924px) {
    width: auto;
    margin-right: 0px;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;
