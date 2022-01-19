import React, { useState } from "react";
import { HeaderWrapper } from "../styles/Header";
import Navbar from "./navbar/Navbar";
import MenuButton from "./navbar/MenuButton";

function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper >
      <Navbar open={open} />
      <MenuButton open={open} handleClick={handleClick}  />
    </HeaderWrapper>
  );
}

export default Header;
