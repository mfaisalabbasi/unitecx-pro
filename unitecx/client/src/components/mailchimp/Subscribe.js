import React from 'react';

const Subscribe = () => {
  return (
    <div className='subscribe'>
      <form
        action='https://websolutions.us19.list-manage.com/subscribe/post?u=2c052a14fa80365d8088f9020&amp;id=bf0c537885'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        target='_blank'
        noValidate
      >
        <input
          type='submit'
          value='Subscribe us'
          name='subscribe'
          className='subs-btn'
        />
      </form>
    </div>
  );
};

export default Subscribe;
