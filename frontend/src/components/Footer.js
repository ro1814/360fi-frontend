import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  Paragraph,
  Image,
} from "../styles/FooterStyles";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box>
      {/* <h1 style={{ color: "white",
				textAlign: "center",
				marginTop: "-50px" }}>
		360
	</h1> */}
      <Container>
        <Row>
          <Column>
            <Image
              src={"/logo-footer360.svg"}
              alt="360 Fund Insight Limited "
            ></Image>
            <Paragraph>
              {" "}
              This website is for investment professionals only. It is not
              intended for private investors. Private investors who are
              interested in our investment services should contact a financial
              professional.
            </Paragraph>
          </Column>
          <Column>
            <Heading>COMPANY</Heading>
            <Link to="/" className="footerLink">
              {" "}
              Home{" "}
            </Link>
            <Link to="/meetus" className="footerLink">
              About us
            </Link>
            <Link to="/contactus" className="footerLink">
              Contact us
            </Link>
          </Column>
          {/* <Column>
            <Heading>OUR SERVICES</Heading>
            <Link to="/research" className="footerLink">
              Research
            </Link>
            <Link to="/governance" className="footerLink">
              Governance
            </Link>
            <Link to="/solutions" className="footerLink">
              Solutions
            </Link>
          </Column> */}
          {/* <Column>
            <Heading>LEGAL</Heading>
            <Link to="/cookies" className="footerLink">
              Cookies policy
            </Link>
            <Link to="/legalinfo" className="footerLink">
              Legal information
            </Link>
            <Link to="/privacy" className="footerLink">
              Privacy policy
            </Link>
          </Column> */}
          <Column>
            <Heading>Social Media</Heading>
            <Link to="/facebook" className="footerLink">
              <i className="fab fa-facebook-f">
                <span>Twitter</span>
              </i>
            </Link>
            <Link to="/linkedin" className="footerLink">
              <i className="fab fa-instagram">
                <span>LinkedIn</span>
              </i>
            </Link>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
