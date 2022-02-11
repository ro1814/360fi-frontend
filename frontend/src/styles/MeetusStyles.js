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
`;
export const Title = styled.h1`
  margin: 2%;

  @media (max-width: 924px) {
    width: auto;
  }
`;

export const Greeting = styled.div`
  color: #6b6b6e;
  display: flex;
  flex-direction: column;
  margin: 2% 25%;
  position: relative;
  text-align: justify;
  width: auto;

  @media (max-width: 924px) {
    width: 100%;
    margin-left: 0;
    padding: 3%;
    background-color: #cbedff;
  }
`;

export const Paragraph = styled.p`
  font-size: 24px;
  color: #6b6b6e;

  @media (max-width: 924px) {
    
    width: auto;
    margin-right: 0px;
    font-size: 0.75rem;
    line-height: 1rem;
  }
`;

export const MobileCard = styled.div`


  @media (max-width: 924px) {
    display: grid;
    flex-direction: column;
    
    
  }
`;
export const BioName = styled.h5`
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 924px) {
    align-self: center;
    margin-left: 10px;
    justify-content: flex-end;
  }
`;

export const BioSpan = styled.span`

  @media (max-width: 924px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    
  }
`;
export const BioParagraph = styled.p`
  font-size: 18px;
  text-align: justify;

  @media (max-width: 924px) {
    background-color: #cbedff;
    padding: 10px;
    margin: 0px;
  }
`;
export const BioImagen = styled.img`
  background: #efefef;

  @media (max-width: 924px) {
    
   

  }
`;
