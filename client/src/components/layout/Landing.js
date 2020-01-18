import React from 'react';
import webdevelopment from '../img/webdevelopment.png';
import appdevelopment from '../img/appdevelopment.png';
import digitalmarketing from '../img/digitalmarketing.png';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import Services from '../services/Services';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Landing = () => {
  return (
    <section>
      <div className='carosoule' style={{ marginBottom: '-70px' }}>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3000}
          bullets={false}
          className='land-slider'
        >
          <div className='caro'>
            {' '}
            <img
              src={webdevelopment}
              alt='slider'
              width='100%'
              height='100%'
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className='caro'>
            {' '}
            <img
              src={appdevelopment}
              alt='slider'
              width='100%'
              height='100%'
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className='caro'>
            {' '}
            <img
              src={digitalmarketing}
              alt='slider'
              width='100%'
              height='100%'
              style={{ maxWidth: '100%' }}
            />
          </div>
        </AutoplaySlider>
      </div>

      <Services />
    </section>
  );
};
export default Landing;
