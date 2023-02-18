 import React, {useEffect} from 'react';

//import destinations
import paris from '../../assets/destimg2.png';
import london from '../../assets/destimg3.jpg';
import japan from '../../assets/destimg1.jpg';
import phil from '../../assets/destimg4.jpg';


//import traverles
import paristraveler from '../../assets/traveler3.jpg';
import londontraveler from '../../assets/traveler1.jpg';
import japantraveler from '../../assets/traveler2.jpg';
import philtraveler from '../../assets/traveler4.jpg';

 import Aos from 'aos';
import 'aos/dist/aos.css';


const travelers = [
  {
    id: 1,
    destinationImg: paris,
    travelersImg: paristraveler,
    travelerInfo: 'Analyn',
    sociallink: '@analyntech23',
  },
  {
    id: 2,
    destinationImg: london,
    travelersImg: londontraveler,
    travelerInfo: 'Joanne',
    sociallink: '@joanneIG37',
  },
  {
    id: 3,
    destinationImg: japan,
    travelersImg: japantraveler,
    travelerInfo: 'Rachelle',
    sociallink: '@rachelle_19',
  },
  {
    id: 4,
    destinationImg: phil,
    travelersImg: philtraveler,
    travelerInfo: 'Linda',
    sociallink: '@linda_07',
  }
];

const Travelers = () => {

 useEffect(() => {
  Aos.init({
    duration: 2000});
}, [])

  return (
    <div className='travelers container section'>
      <div className='sectionContainer'>
        <h2 data-aos='fade-down' data-aos-duration='2250'>Top Travelers of this Month!</h2>

        <div className='travelersContainer grid'>
         
          {travelers.map(({id, destinationImg, travelersImg, travelerInfo, sociallink}) => {
             {/* single traveler */}
            return (
              <div data-aos='fade-up' data-aos-duration='2250' key={id} className='singleTraveler'>
                <img className='destinationImg' src={destinationImg} />

                <div className='travelerDetails'>
                  <div className='travelerPic'>
                    <img className='travelerImg' src={travelersImg} />
                  </div>
                  <div className='travelerInfo'>
                    <span>{travelerInfo}</span>
                    <p>{sociallink}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Travelers;
