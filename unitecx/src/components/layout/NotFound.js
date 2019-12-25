import React from 'react';
import notfound from '../img/notfound.png';
const NotFound = () => {
  return (
    <section>
      <div className='container'>
        <div className='sm-container'>
          <img src={notfound} alt='not found' width='100%' />
        </div>
      </div>
    </section>
  );
};

export default NotFound;
