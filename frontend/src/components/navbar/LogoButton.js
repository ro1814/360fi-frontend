import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from '../../styles/Header'

function LogoButton ( { open, handleClick, handleClickClose }) {
  return !open ? (

  <Link to="/" onClick={handleClick}>
      <Image src="/logo-header360.svg" alt="360 logo header" />
  </Link>
  
  ) : (
    <Link to="/" onClick={handleClickClose}>
    <Image src="/logo-header360.svg" alt="360 logo header" />
</Link>

  )
}

export default LogoButton