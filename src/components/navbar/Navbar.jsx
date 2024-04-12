import React, { useState } from 'react';
import { RiMenu3line, RiCloseLine, RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css'

// BEM -> BLOCK ELEMENT MODIFIER

const Menu = () => (
  <>
      <p><a href="#Home">Home</a></p>
      <p><a href="#wgpt3">What is GPT3</a></p>
      <p><a href="#possibility">Open AI</a></p>
      <p><a href="#features">Case Studies</a></p> 
      <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {

  const [togglemenu, setToggleMenu] = useState(false)

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className='gpt3__navbar-link_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'> Sign up</button>
      </div>
      <div className='gp3__navbar-menu'>
        {
          togglemenu
            ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {togglemenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className='gpt3__navbar-menu_container-links'>
              <Menu/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar