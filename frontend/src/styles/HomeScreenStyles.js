import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 24px;
  color: #6b6b6e;
  margin: 20px;

  @media (max-width: 924px) {

    margin-right: 5px;
    margin-left: 5px;
    width: auto;
    margin-right: 0px;
    font-size: 16px;
    line-height: 1rem;

  }
`;

export const ProductParagraph = styled.p`
  font-size: 22px;
  text-align: justify;
  color: #6b6b6e;
  margin: 20px;

  @media (max-width: 924px) {

    font-size: 10px;
    text-align: justify;
    margin: 5px;
    padding: 5px;
    ;
    
  }
`;

export const Title = styled.h1`
  text-align: center;

  @media (max-width: 924px) {
    width: auto;
  }
`;
export const Greeting = styled.div`
  color: #6b6b6e;
  display: flex;
  flex-direction: column;
  margin: 4% 15%;
  position: relative;
  text-align: justify;
  width: auto;

  @media (max-width: 924px) {
    width: 100%;
    margin-left: 0;
    padding: 3%;
   
  }
`;

export const Products = styled.div`

    display: flex;
    flex-direction: row;
`

export const Product = styled.div`

    margin: 10px;
    padding: 10px;
    width: 35%;
    border-style: solid;

    @media (max-width: 924px) {
      margin: 5px;
      padding: 0;
      }
    h3 {
        text-align: center;
        margin: 10px;
        padding: 5px;

        @media (max-width: 924px){
          margin: 10px;
          font-size: 10px;
          text-align: center;
        }
    }
`