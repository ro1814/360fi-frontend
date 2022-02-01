import styled from "styled-components";

export const Logo = styled.img`

  display: inline-block;
  
  @media (max-width: 924px) {
    width: 70%;
  }
`;

export const NavLink = styled.div`

.navLinkStyle {
    background: yellow;
  }

  @media (max-width: 924px){

    display: block;
    margin-top: 10px;
    padding: 4.2rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    text-align: center;
  }
`;
