import styled from "styled-components";

export const Paragraph = styled.p`
  font-size: 24px;
  color: #6b6b6e;
  margin: 20px;

  @media (max-width: 924px) {
    padding-right: 10px;
    padding-left: 10px;
    width: auto;
    margin-right: 0px;
    margin-left: 0px;
    font-size: 14px;
    line-height: 1rem;
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
    h2.fundsFairway {
      font-size: 22px;
    }
   
  }
`;

export const Products = styled.div`

    display: flex;
`

export const Product = styled.div`
    margin: 50px;
    width: 25%;

    h3 {

        text-align: center;
        margin: 10px;
        padding: 10px;

        @media (max-width: 924px){
            width: auto;
        }
    }
`