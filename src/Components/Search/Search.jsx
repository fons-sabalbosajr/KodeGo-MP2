import React, {useEffect} from 'react';

//===========icons================================
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiAccountPinCircleLine } from 'react-icons/ri';
import { RxCalendar } from 'react-icons/rx';

//Aos Effect
import Aos from 'aos';
import 'aos/dist/aos.css';

const Search = () => {

useEffect(() => {
  Aos.init({
    duration: 2000});
}, [])

  return (
    <div className='search container section'>
      <div data-aos='fade-up' data-aos-duration='2250' className='sectionContainer grid'>
        <div className='btns flex'>
          <div className='singleBtn'>
            <span>Economy Class</span>
          </div>

          <div className='singleBtn'>
            <span>Business Class</span>
          </div>

          <div className='singleBtn'>
            <span>First Class</span>
          </div>
        </div>

        <div data-aos='fade-up' data-aos-duration='2000' className='searchInputs flex'>

          <div className='singleInput flex'>
            <div className='IconDiv'>
              <HiOutlineLocationMarker className='icon' />
            </div>

            <div className='texts'>
              <h4>Location</h4>
              <input type='text' placeholder='san ka punta?' />
            </div>
          </div>

          <div className='singleInput flex'>
            <div className='IconDiv'>
              <RiAccountPinCircleLine className='icon' />
            </div>

            <div className='texts'>
              <h4>Travelers</h4>
              <input type='text' placeholder='tara g?' />
            </div>
          </div>

          <div className='singleInput flex'>
            <div className='IconDiv'>
              <RxCalendar className='icon' />
            </div>

            <div className='texts'>
              <h4>Check-In</h4>
            <input type='text' placeholder='overnight na this!' className='inputText' />
            </div>
          </div>

          
          <div className='singleInput flex'>
            <div className='IconDiv'>
              <RxCalendar className='icon' />
            </div>

            <div className='texts'>
              <h4>Check-Out</h4>
              <input type='text' placeholder='uwian na!' className='inputText' />
            </div>
          </div>
          <button className='btn'>Search Flight</button>

        </div>
        
      </div>
    </div>
  );
};

export default Search;
