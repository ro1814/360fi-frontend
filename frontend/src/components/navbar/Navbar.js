import React from "react";
import { NavbarWrapper } from "../../styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <a href='#'>Products and Services Overview</a>
      <a href='#'>Insights</a>
      <a href='#'>Meet the Team</a>
      <a href='#'>Register/Login</a>
    </NavbarWrapper>
  );
}

export default Navbar;
