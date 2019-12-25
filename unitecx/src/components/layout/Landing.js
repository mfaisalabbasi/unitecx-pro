import React from 'react';
import Unitecx from '../img/Unitecx.png';
import caro1 from '../img/caro1.jpg';
import caro2 from '../img/caro2.jpg';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Landing = () => {
  return (
    <section>
      <div className='carosoule'>
        <AutoplaySlider
          play={true}
          cancelOnInteraction={false} // should stop playing on user interaction
          interval={3000}
          bullets={false}
          className='land-slider'
        >
          <div className='caro'>
            {' '}
            <img src={Unitecx} alt='slider' width='100%' height='100%' />
          </div>
          <div className='caro'>
            {' '}
            <img src={caro1} alt='slider' width='100%' height='100%' />
          </div>
          <div className='caro'>
            {' '}
            <img src={caro2} alt='slider' width='100%' height='100%' />
          </div>
        </AutoplaySlider>
      </div>
    </section>
  );
};
export default Landing;
