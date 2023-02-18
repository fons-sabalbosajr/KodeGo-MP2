import React, { useState } from 'react';

//Icons for the main
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

//logos and images
import logo from '../../assets/logo.png';

function NavBar() {
  const [active, setActive] = useState('navBarMenu');
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  };

  const removeNavBar = () => {
    setActive('navBarMenu');
  };

  //adding backgrounf to 2nd navigation bar
  const [noBg, addBg] = useState('navBarTwo');
  const addBgColor = () => {
    if (scrollY >= 10) {
      addBg('navBarTwo navbarBg');
    } else {
      addBg('navBarTwo');
    }
  };
  window.addEventListener('scroll', addBgColor);

  return (
    <>
      <div className='navBar flex'>
        <div className='navBarOne flex'>
          <div>
            <SiConsul className='icon' />
          </div>

          <div className='none flex'>
            <li className='flex'>
              <BsPhoneVibrate className='icon' href='#' /> Support
            </li>
            <li className='flex'>
              <AiOutlineGlobal className='icon' href='#' />
              Languages
            </li>
          </div>

          <div className='atb flex'>
            <span>Sign In</span>
            <span>Sign Out</span>
          </div>
        </div>

        <div className={noBg}>
          <div className='logoDiv'>
            <img src={logo} className='Logo' />
          </div>

          <div className={active}>
            <ul className='menu flex'>
              <li onClick={removeNavBar} className='listItem'>
                Home
              </li>
              <li onClick={removeNavBar} className='listItem'>
                About
              </li>
              <li onClick={removeNavBar} className='listItem'>
                Offers
              </li>
              <li onClick={removeNavBar} className='listItem'>
                Sales
              </li>
              <li onClick={removeNavBar} className='listItem'>
                Destinations
              </li>
            </ul>

            <button onClick={removeNavBar} className='btn flex btnOne'>
              Contact
            </button>
          </div>

          {<button className='btn flex btnTwo'>Contact</button>}

          <div onClick={showNavBar} className='toggleIcon'>
            <CgMenuGridO className='icon' />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
