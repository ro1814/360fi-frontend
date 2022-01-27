import React from "react";
import { NavbarWrapper } from "../../styles/NavbarStyles";
import { Link } from "react-router-dom";
import Dropdown from "./DropDown";

function Navbar({ open, handleClickClose, click, dropdown, openMobileMenu, closeMobileMenu, handleClickDrop, onMouseEnter, onMouseLeave }) {
  return (

    <NavbarWrapper open={open} click={click}>
      <div className="contProducts" onClick={handleClickDrop}>
        {/* <Link to="/products">Products and Services</Link> */}
        <li
            className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link
              to='/services'
              className='nav-links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
            </Link>
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
