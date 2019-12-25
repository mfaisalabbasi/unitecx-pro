import React from 'react';
import spinner from '../img/spinner.gif';

const Spinner = () => {
  return (
    <section>
      <div className='container'>
        <div className='spinner'>
          <img src={spinner} alt='Loading...' width='50px' height='50px' />
        </div>
      </div>
    </section>
  );
};

export default Spinner;
