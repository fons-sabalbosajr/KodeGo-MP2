import React, {useEffect} from 'react';
import Logo from '../../assets/logo.png';
import { TiSocialFacebook } from 'react-icons/ti';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineYoutube } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Footer = () => {


useEffect(() => {
  Aos.init({
    duration: 2000});
}, [])

  return (
    <div className='footer'>
      <div className='sectionContainer container grid'>
        <div data-aos='fade-up' data-aos-duration='2250' className='gridOne'>
          <div className='logoDiv'>
            <img src={Logo} className='Logo' />
          </div>
          <p>Your mind should be stringer than your feelings, fly-away!</p>
          <div className='socialIcon flex'>
            <TiSocialFacebook className='icon' />
            <AiOutlineTwitter className='icon' />
            <AiOutlineYoutube className='icon' />
            <FaPinterest className='icon' />
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2250' className='footerlinks'>
          <span className='linkTItle'>Quick Guide</span>
          <li>
            <a href=''>FAQs</a>
          </li>
          <li>
            <a href=''>How to</a>
          </li>
          <li>
            <a href=''>Features</a>
          </li>
          <li>
            <a href=''>Baggage</a>
          </li>
          <li>
            <a href=''>Route Map</a>
          </li>
          <li>
            <a href=''>Our Communities</a>
          </li>
        </div>

        <div data-aos='fade-up' data-aos-duration='2250' className='footerlinks'>
          <span className='linkTItle'>Information</span>
          <li>
            <a href=''>Home</a>
          </li>
          <li>
            <a href=''>Explorer</a>
          </li>
          <li>
            <a href=''>Flight Status</a>
          </li>
          <li>
            <a href=''>Travels</a>
          </li>
          <li>
            <a href=''>Check-ins</a>
          </li>
          <li>
            <a href=''>Manage your bookings</a>
          </li>
        </div>
      </div>

      <div className='copyRightDiv flex'>
        <p>
          Courtesy Design | Developed by{' '}
          <a href='https://github.com/fons-sabalbosajr' target='_blank'>
            Alfonso Sabalbosa Jr.
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
