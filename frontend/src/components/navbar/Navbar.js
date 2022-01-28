import React from "react";
import { NavbarWrapper } from "../../styles/NavbarStyles";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

function Navbar({
  open,
  handleClickClose,
  click,
  dropdown,
  closeMobileMenu,
  handleClickDrop,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <NavbarWrapper open={open} click={click}>
      <div className="contProducts" onClick={handleClickDrop}>
        {/* <Link to="/products">Products and Services</Link>  */}
        <li onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <ul className="nav-links" onClick={closeMobileMenu}>
            Products and Services
          </ul>
          {dropdown && <Dropdown />}
        </li>
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
