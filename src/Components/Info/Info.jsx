import React, {useEffect} from 'react';
import { RxCalendar } from 'react-icons/rx';
import { BsBookmarkCheck, BsShieldCheck } from 'react-icons/bs';

import Aos from 'aos';
import 'aos/dist/aos.css';

const Info = () => {

useEffect(() => {
  Aos.init({
    duration: 2000});
}, [])


  return (
    <div className='info section'>
      <div className='infoContainer container'>
        <div className='titleDiv flex'>
          <h2 data-aos='fade-right' data-aos-duration='2250'>Closest Airport to travel and make memories to whole universe.</h2>
          <button data-aos='fade-left' data-aos-duration='2250' className='btn'>View All</button>
        </div>

        <div className='cardsDiv grid'>

          <div data-aos='fade-up' data-aos-duration='2500' className='singleCard grid'>
            <div className='iconDiv flex'>
              <RxCalendar className='icon' />
            </div>
            <span className='cardTitle'>Book and Relax</span>
            <p>You can also go walk-in along the downtown and book a flight ticket.</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='3500' className='singleCard grid'>
            <div className='iconDiv flex color1'>
              <BsShieldCheck className='icon' />
            </div>
            <span className='cardTitle '>Smart Bucketlist</span>
            <p>You can also go walk-in along the downtown and book a flight ticket.</p>
          </div>

          <div data-aos='fade-up' data-aos-duration='4500' className='singleCard grid'>
            <div className='iconDiv flex color2'>
              <BsBookmarkCheck className='icon' />
            </div>
            <span className='cardTitle'>Save More</span>
            <p>You can also go walk-in along the downtown and book a flight ticket.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Info;
