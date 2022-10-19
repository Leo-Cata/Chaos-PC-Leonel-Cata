import React from 'react';
import { Link } from 'react-router-dom';

import CartWidget from '../CartWidget';

import './styles.scss';

//navbar, navigates to cagetories
const NavBar = ({ brand }) => {
  return (
    <div className='menu'>
      <Link to='/'>
        <h1 className='menu-title'>{brand}</h1>
      </Link>

      <ul className='menu-items'>
        <li className='menu-links'>
          <Link to='/category/CPU'>CPU</Link>
        </li>
        <li className='menu-links'>
          <Link to='/category/GPU'>GPU</Link>
        </li>
        <li className='menu-links'>
          <Link to='/category/motherboard'>Motherboard</Link>
        </li>
        <li className='menu-links'>
          <Link to='/category/ram'>Ram</Link>
        </li>
      </ul>

      <CartWidget />
    </div>
  );
};

export default NavBar;
