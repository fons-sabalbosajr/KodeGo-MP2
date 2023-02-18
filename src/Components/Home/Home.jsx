import React, { useEffect } from 'react';

//import assests =================================
import video from '../../assets/videoloop.mp4';
import airplane from '../../assets/takeOff.png';

//Aos Effect
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000,
    });
  }, []);

  return (
    <div className='home flex container'>
      <div className='mainText'>
        <h1 data-aos='fade-up' data-aos-duration='2250'>
          Find your dream destination near our downtown.
        </h1>
      </div>

      <div data-aos='fade-up' data-aos-duration='2250' className='homeImages flex'>
        <div className='videoDiv'>
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={airplane} className='plane' />
      </div>

      <div data-aos='fade-down' data-aos-duration='2500'>
        <small>SAN FERNANDO AIRLINES</small>
      </div>
    </div>
  );
};

export default Home;
