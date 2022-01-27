import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import '../../styles/DropDownStyles.css';
import { Link } from 'react-router-dom';

function Dropdown() {
  
  const [click, setClick] = useState(false);

  const handleClickDrop = () => setClick(!click);

  return (
    <>
      <ul
        onClick={handleClickDrop}
        className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
      >
        {MenuItems.map((item, index) => {
          return (
            <li key={index} className='nav-links'>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;