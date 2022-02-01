import React from "react";

//import '../styles/NavbarStyles.css'
import { Logo, NavLink } from "../styles/NavbarStyles";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
            <NavLink className="navLinkStyle">

              <NavDropdown
                title="Products and Services"
                id="collasible-nav-dropdown"
              >
                
                <LinkContainer to="/product/data-feed" >
                  <NavDropdown.Item>Data Feed</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/product/eagle-eye">
                  <NavDropdown.Item>Eagle Eye</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/product/corporate-actions">
                  <NavDropdown.Item>Corporate Actions</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/product/value-for-money">
                  <NavDropdown.Item>Value for Money</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/product/black-litterman">
                  <NavDropdown.Item>Black Litterman</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/product/esg-sfdr-reporting">
                  <NavDropdown.Item>ESG SFDR Reporting</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/product/competitive-analysis">
                  <NavDropdown.Item>Competitive Analysis</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/products">
                  <NavDropdown.Item>
                    See all Products and Services
                  </NavDropdown.Item>
                </LinkContainer>
              
              </NavDropdown>
              </NavLink>

              <NavLink>
              <LinkContainer to="/insights">
                <Nav.Link>Insights</Nav.Link>
              </LinkContainer>
              </NavLink>
              <NavLink>
              <LinkContainer to="/meetus">
                <Nav.Link>Meet the Team</Nav.Link>
              </LinkContainer>
              </NavLink>
              <NavLink>
              <LinkContainer to="/login">
                <Nav.Link>Register/Login</Nav.Link>
              </LinkContainer>
              </NavLink>
            </Nav>
          </Navbar.Collapse>

          <LinkContainer to="/">
            <Navbar>
              <Logo src="/logo-header360.svg" />
            </Navbar>
          </LinkContainer>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
