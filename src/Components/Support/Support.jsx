 import React, {useEffect} from 'react';

//import images
import gridImg from '../../assets/gridImage.png';

import Aos from 'aos';
import 'aos/dist/aos.css';


const Support = () => {

useEffect(() => {
  Aos.init({
    duration: 2000});
}, [])


  return (
    <div className='support container section'>
      <div className='sectionContainer'>
        <div className='titleDiv'>
          <small>Travel Support</small>
          <h2>Plan your travel without going to far airports.</h2>
          <p>Find help with booking and travel plans, see what to expect along the journey
            to your favorite destinations.
          </p>
        </div>

        <div className='infoDiv grid'>

          <div className='textDiv grid'>
            <div data-aos='fade-down' data-aos-duration='2500' className='singleInfo'>
              <span className='number'>01</span>
              <h4>Travel Requirements for Greenland</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey
            to your favorite destinations.</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='3500' className='singleInfo'>
              <span className='number color1'>02</span>
              <h4>Limo chauffeur services at your arrival.</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey
            to your favorite destinations.</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='4500' className='singleInfo'>
              <span className='number color2'>03</span>
              <h4>Multi-risk travel insurance.</h4>
              <p>Find help with booking and travel plans, see what to expect along the journey
            to your favorite destinations.</p>
            </div>
          </div>

          <div data-aos='fade-left' data-aos-duration='4500' className = 'imgDiv'>
            <img src={gridImg}/>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Support;
