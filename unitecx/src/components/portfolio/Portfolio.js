import React from 'react';
import { Link } from 'react-router-dom';
import caro2 from '../img/caro2.jpg';

const Portfolio = ({ portfolio }) => {
  const { name, bio, _id } = portfolio;
  return (
    <div className='sec'>
      <div className='img-sec'>
        <img src={caro2} alt='img-sec' width='100%' />
      </div>
      <h3 className='heading'>{name}</h3>
      <p style={{ marginTop: '5px' }}>{bio}</p>
      <Link to={`/api/portfolios/${_id}`}>
        <button>Read More...</button>
      </Link>
    </div>
  );
};

export default Portfolio;
