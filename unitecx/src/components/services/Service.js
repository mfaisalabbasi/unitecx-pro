import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import caro2 from '../img/caro2.jpg';

const Service = ({ service }) => {
  const { name, bio, _id } = service;
  return (
    <Fragment>
      <div className='sec'>
        <div className='img-sec'>
          <img src={caro2} alt='img-sec' width='100%' />
        </div>
        <h3 className='heading'>{name}</h3>
        <p style={{ paddingTop: '5px' }}>{bio}</p>

        <Link to={`/api/services/${_id}`}>
          <button>Read More...</button>
        </Link>
      </div>
    </Fragment>
  );
};

export default Service;
