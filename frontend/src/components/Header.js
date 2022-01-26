import React, { useState } from "react";
import { HeaderWrapper } from "../styles/Header";
import Navbar from "./navbar/Navbar";
import MenuButton from "./navbar/MenuButton";
import LogoButton from "./navbar/LogoButton";

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
      <LogoButton open={open} handleClickClose={handleClickClose}/>
    </HeaderWrapper>
  );
}

export default Header;
