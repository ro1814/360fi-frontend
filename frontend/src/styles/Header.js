import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin-top: -1.25rem;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;

  
`;

export const Image = styled.img`
  height: auto;
  display: flex;
  width: 150px;
  max-height: 120px;
  margin: 16px auto;
  position: static;
  padding-right: 70px;

  @media (max-width: 1000px) {
    display: flex;
    position: relative;
    width: 110px;
    padding: 20px;
    padding-top: 30px;
    align-items: flex-end;
  }
`;
