import styled from "styled-components";

export const Box = styled.div`
  padding: 70px 20px;
  background: #333;
  position: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 624px) {
    padding: 70px 70px 70px 30px;
    position: static;
    width: auto;
    //bottom: 0;
    min-height: 100vh;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
  background: #333;

  
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-left: 60px;

`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 18px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }

  .footerLink {
  color: #fff;
  margin-bottom: 20px;
  font-size: 16px;
  text-decoration: none;
  letter-spacing: .5px;

  &:hover {
    color: white;
    opacity: 0.6;
    transition: 200ms ease-in;
  }
}
`;




export const Image = styled.img`
  height: auto;
  display: block;
  width: 200px;
  max-height: 120px;
  margin:16px auto;


`;

export const Heading = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 40px;
  font-weight: bold;
`;

export const Paragraph = styled.p`
  margin-bottom: 10px;
  color: white;
  font-size: 10px;
  width: 200px;
  max-height: 120px;
  margin: 20px auto;
  display: flex;
`
