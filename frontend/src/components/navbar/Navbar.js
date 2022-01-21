import React from "react";
import { NavbarWrapper } from "../../styles/NavbarStyles";

function Navbar({ open }) {
  return (
    <NavbarWrapper open={open}>
      <div className="contProducts">
      <a href='#'>Products and Services Overview</a>
      </div>
      <div className="contInsights">
      <a href='#'>Insights</a>
      </div>
      <div className="contMeet">
      <a href='#'>Meet the Team</a>
      </div>
      <div className="contReg">
      <a href='#'>Register/Login</a>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
