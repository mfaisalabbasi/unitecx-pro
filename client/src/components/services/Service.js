import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
  const { name, bio, _id, file } = service;
  return (
    <Fragment>
      <div className='sec'>
        <div className='img-sec'>
          <img src={file} alt='img-sec' width='100%' />
        </div>
        <div className='sec-content'>
          <h3 className='heading'>{name}</h3>
          <p style={{ paddingTop: '5px' }}>{bio}</p>

          <Link to={`/api/services/${_id}`}>
            <button>Read More...</button>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Service;
