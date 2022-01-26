import React, { useState } from "react";
import { HeaderWrapper } from "../styles/Header";
import { Link } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import MenuButton from "./navbar/MenuButton";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    document.body.style.overflow = "hidden";
    setOpen(!open);
  };
  const handleClickClose = () => {
    document.body.style.overflow = "visible";
    setOpen(!open);
  };

  return (
    <HeaderWrapper>
      <Navbar open={open} handleClickClose={handleClickClose} />
      <MenuButton
        open={open}
        handleClick={handleClick}
        handleClickClose={handleClickClose}
      />
      <div className="container">
      <img src="/logo-header360.svg" alt ="360 Logo Header" className="image"/>
      <div className="middle">
      <div className="text">Home</div>
      </div>
      </div>
    </HeaderWrapper>

    
  );
}

export default Header;
