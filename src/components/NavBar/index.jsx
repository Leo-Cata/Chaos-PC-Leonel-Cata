import React from 'react'
import "./styles.scss"

const NavBar = ({categories, temp}) => {
  

  return (
    <div className='menu'>
      <h1 className='menu-title'>Brand Name</h1>

      <ul className='menu-items'>
        <li className='menu-links'>
          <a href="/#">Hardware</a> 
        </li>

        <li className='menu-links'>
          <a href="/#">Perifericos</a>
        </li>
      </ul>

    </div>
  )
}

export default NavBar;