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
    background-color: #CBEDFF;
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
export const BioName = styled.h5`
  font-weight: bold;
`
export const BioParagraph = styled.p`
  font-size: 18px;
  text-align: justify;
`
export const BioImagen = styled.img`
  background: #EFEFEF;
`

export const UnUl = styled.ul`
  .social-link {
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    border-radius: 50%;
    transition: all 0.3s;
    font-size: 0.9rem;
}

.social-link:hover, .social-link:focus {
    background: #ddd;
    text-decoration: none;
    color: #555;
}
`
