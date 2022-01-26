import styled from "styled-components";

export const HeaderWrapper = styled.header`
  margin-top: -1.25rem;
  height: 15vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: static;

  .container {
    position: relative;
    width: 150px;
    margin-right: 25px;
  }

  .image {
    opacity: 1;
    display: flex;
    width: 150px;
    height: auto;
    transition: 0.5s ease;
    backface-visibility: hidden;
    position: relative;
  }

  .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  .container:hover .image {
    opacity: 0.3;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: #97dbff;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }
  @media (max-width: 1000px) {

    .container {
    position: relative;
    width: 150px;
    margin-right: 25px;
  }

    .image {
      opacity: 1;
      display: flex;
      width: 150px;
      //height: auto;
      transition: 0.5s ease;
      backface-visibility: hidden;
      margin: 16px auto;
      position: static;
    }

    .middle {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
  }

  .container:hover .image {
    opacity: 0.3;
  }

  .container:hover .middle {
    opacity: 1;
  }

  .text {
    background-color: #97dbff;
    color: white;
    font-size: 16px;
    padding: 16px 32px;
  }
  }
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
