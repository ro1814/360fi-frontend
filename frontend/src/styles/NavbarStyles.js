import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: fixed;
  top: 10vh;
  right: ${(props) => (props.open ? "0" : "100%")};
  width: 100%;
  height: 100%;
  transition: right 0.3s linear;

  a {
    //padding: 0.5rem 0.8rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
    font-size: 22px;
    padding-top: 80px;
    padding-bottom: 80px;
  }

  .contProducts {
    background-color: #97dbff;
    width: 100%;
    height: 22.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contInsights {
    background-color: #63c9ff;
    width: 100%;
    height: 22.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contMeet {
    background-color: #0082c6;
    width: 100%;
    height: 22.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .contReg {
    background-color: #00689e;
    width: 100%;
    height: 22.5%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  @media only screen and (min-width: 624px) {
    flex-direction: row;
    position: initial;
    height: auto;
    justify-content: space-evenly;
    background: transparent;

    .contProducts {
      background-color: yellow;
      width: initial;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    .contInsights {
      background-color: yellow;
      width: initial;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .contMeet {
      background-color: yellow;
      width: initial;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .contReg {
      background-color: yellow;
      width: initial;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    a {
      padding: 0.5rem 0.8rem;
      color: black;
      text-decoration: none;
      font-size: 18px;
    }
  }
`;
