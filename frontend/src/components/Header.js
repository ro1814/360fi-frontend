import React, { useState } from "react";
import { HeaderWrapper } from "../styles/Header";
import Navbar from "./navbar/Navbar";
import MenuButton from "./navbar/MenuButton";
import LogoButton from "./navbar/LogoButton";

function Header() {

  //Varianbles for the Navbar
  const [open, setOpen] = useState(false);
  
  const handleClick = () => {
    document.body.style.overflow = "hidden";
    setOpen(!open);
  };
  const handleClickClose = () => {
    document.body.style.overflow = "visible";
    setOpen(!open);
  };

  //variables for dropdown

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClickDrop = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const openMobileMenu = () => setClick(true)

  const onMouseEnter = () => {
    if (window.innerWidth < 160) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 160) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <HeaderWrapper>
      <Navbar open={open} handleClickClose={handleClickClose} click={click} dropdown = {dropdown} handleClickDrop={handleClickDrop} openMobileMenu = { openMobileMenu} closeMobileMenu = {closeMobileMenu} onMouseEnter ={onMouseEnter} onMouseLeave = {onMouseLeave} />
      <MenuButton
        open={open}
        handleClick={handleClick}
        handleClickClose={handleClickClose}
      />
      <LogoButton open={open} handleClickClose={handleClickClose}/>
    </HeaderWrapper>
  );
}

export default Header;
