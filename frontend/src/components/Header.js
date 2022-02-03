import React from "react";

import '../styles/NavbarStyles.css'
import { Logo, NavLink } from "../styles/NavbarStyles";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container className="containerCustomedStyle" >
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="navLinkCustomed"/>
          <Navbar.Collapse id="responsive-navbar-nav" className="navLinkCustomed">
            <Nav className="me-auto" className="navLinkCustomed">
            <NavLink className="navLinkProductsStyle">

              <NavDropdown
                title="Products and Services"
                id="collasible-nav-dropdown"
                className="navLinkCustomed"
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

              <NavLink className="navLinkInsightsStyle">
              <LinkContainer to="/insights" className="navLinkCustomed">
                <Nav.Link>Insights</Nav.Link>
              </LinkContainer>
              </NavLink>
              <NavLink className="navLinkMeetStyle">
              <LinkContainer to="/meetus" className="navLinkCustomed">
                <Nav.Link>Meet the Team</Nav.Link>
              </LinkContainer>
              </NavLink>
              <NavLink className="navLinkLoginStyle">
              <LinkContainer to="/login" className="navLinkCustomed">
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
