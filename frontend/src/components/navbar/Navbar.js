import React from "react";
import { NavbarWrapper } from "../../styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <p>Products and Services Overview</p>
      <p>Insights</p>
      <p>Meet the Team</p>
      <p>Register/Login</p>
    </NavbarWrapper>
  );
}

export default Navbar;
