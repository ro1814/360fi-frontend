import styled from "styled-components";

export const Logo = styled.img`

  display: inline-block;
  
  @media (max-width: 924px) {
    width: 70%;
  }
`;

export const NavLink = styled.div`

  @media (max-width: 924px){

    display: block;
    margin-top:0;
    padding: 4.7rem 1rem;
    color: #0d6efd;
    text-decoration: none;
    transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;
    text-align: center;
    
    .navbar-light .navbar-nav .show > .nav-link, .navbar-light .navbar-nav .nav-link.active {
        color: white;
    }

    .navbar-light .navbar-nav .nav-link {
        color: white;
    }

    .nav-link {
        font-size: 22px;
        color: white;
    }
  }
`;
