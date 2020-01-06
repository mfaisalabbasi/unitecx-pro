import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ pro }) => {
  const { name, email, phone, protype, _id } = pro;

  return (
    <div className='sec'>
      <h4 className='heading-start'>
        <i className='fa fa-user'></i> Name :
        <span className='data'>{name}</span>
      </h4>{' '}
      <h4 className='heading-start'>
        <i className='fa fa-envelope'></i> Email :{' '}
        <span className='data'>{email}</span>
      </h4>
      <h4 className='heading-start'>
        <i className='fa fa-mobile'></i> Phone :{' '}
        <span className='data'>{phone}</span>
      </h4>
      <h4 className='heading-start'>
        <i className='fa fa-mail-bulk'></i> Project Type :{' '}
        <span className='data'>{protype}</span>
      </h4>
      <div className='cta' style={{ textAlign: 'start', marginTop: '3px' }}>
        <Link to={`/api/projects/${_id}`}>
          <button>view order...</button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
