import React, {useEffect} from 'react';
import ImgGrid from '../../assets/gridImg2.png';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Lounge = () => {
useEffect(() => {
  Aos.init({
    duration: 2000});
}, [])

  return (
    <div className='lounge container section'>
      <div className='sectionContainer grid'>
        <div data-aos='fade-left' data-aos-duration='2250' className='imgDiv'>
          <img src={ImgGrid} />
        </div>

        <div className='textDiv'>
          <h2 data-aos='fade-down' data-aos-duration='2250'>Unaccompanied Minor Lounge</h2>
          

          <div className='grids grid'>
            <div data-aos='fade-down' data-aos-duration='2250' className='singleGrid'>
              <span className='gridTitle'>Help through the airport</span>
              <p>
                The airport is a great place to help you through the lounge. Your can call airlines
                from your phone and book a flight ticket.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2250' className='singleGrid'>
              <span className='gridTitle'>Top Priority Boarding</span>
              <p>
                The airport is a great place to help you through the lounge. Your can call airlines
                from your phone and book a flight ticket.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2250' className='singleGrid'>
              <span className='gridTitle'>Chauffeur-Drive Service</span>
              <p>
                The airport is a great place to help you through the lounge. Your can call airlines
                from your phone and book a flight ticket.
              </p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2250' className='singleGrid'>
              <span className='gridTitle'>Cares your flight from Arrival-Departure</span>
              <p>
                The airport is a great place to help you through the lounge. Your can call airlines
                from your phone and book a flight ticket.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lounge;
