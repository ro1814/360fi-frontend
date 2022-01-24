import React from "react";
import { NavbarWrapper } from "../../styles/NavbarStyles";
import { Link } from "react-router-dom";

function Navbar({ open, handleClickClose }) {
  return (
    <NavbarWrapper open={open}>
      <div className="contProducts" onClick={handleClickClose}>
        <Link to="/products">Products and Services</Link>
      </div>
      <div className="contInsights" onClick={handleClickClose}>
        <Link to="/insights">Insights</Link>
      </div>
      <div className="contMeet" onClick={handleClickClose}>
        <Link to="/meetus">Meet the Team</Link>
      </div>
      <div className="contReg" onClick={handleClickClose}>
        <Link to="/login">Register/Login</Link>
      </div>
    </NavbarWrapper>
  );
}

export default Navbar;
