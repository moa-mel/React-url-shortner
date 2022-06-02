// eslint-disable-next-line
import React, {useState, useEffect } from 'react';
import { ShortText } from '@mui/icons-material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const closeMobileMenu = () => setClick(false);


    return (
        <>
        <div className="navbar">
        <div className="navbar-container container">
        <div className="item" >
        <Link to='/' className="navbar-logo"  onClick={closeMobileMenu} >
        < ShortText className='navbar-icon' />
           qat<span className='primary'>sar</span>
        </Link>
        </div>
        <div className="item">
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item' onClick={closeMobileMenu}>
            Why Qatsar
        </li>
        <li className='nav-item' onClick={closeMobileMenu}>
            Solutions
        </li>
        <li className='nav-item' onClick={closeMobileMenu}>
          Pricing
      </li>
      <li className='nav-item' onClick={closeMobileMenu}>
        Resources
    </li>
        <li className='nav-item' onClick={closeMobileMenu}>
            Features
        </li>
        </ul>
        </div>
        <div className="item">
        <ul className="nav-sign" >
        <li className='nav-items'>
          <Link to='/' className='nav-linkst'  onClick={closeMobileMenu} >
          <Button buttonStyle='btn--outline'>
          Connect
          </Button>
          </Link>
          </li>
         
        </ul>
        </div>
        </div>
        </div>
        </>
    )
}

export default Navbar;