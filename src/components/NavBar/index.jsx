import React from 'react'
import CartWidget from '../CartWidget';
import "./styles.scss"
import { Link } from 'react-router-dom';

const NavBar = ({brand}) => {
  return (
    <div className='menu'>
      <h1 className='menu-title'>{brand}</h1>

      <ul className='menu-items'>
        <li className='menu-links'>
          <Link to="/">Hardware</Link> 
        </li>

        <li className='menu-links'>
          <Link to="/">Perifericos</Link>
        </li>
      </ul>

      <CartWidget />
    </div>
  )
}

export default NavBar;