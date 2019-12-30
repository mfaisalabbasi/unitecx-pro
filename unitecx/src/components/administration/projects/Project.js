import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ pro }) => {
  const { name, email, phone, protype, date, description, _id, file } = pro;
  console.log('fiel', file);
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
      <h4 className='heading-start'>
        <i className='fa fa-clock'></i> Order Date :{' '}
        <span className='data'>{date}</span>
      </h4>
      <h4 className='heading-start'>
        <i className='fa fa-box'></i> Project status :{' '}
        <span className='data'>pending</span>
      </h4>
      <h4 className='heading-start'>
        <i className='fa fa-mail-bulk'></i> Project Description :{' '}
        <span className='data'>{description}</span>
      </h4>
      <h4 className='heading-start'>
        <i className='fa fa-mail-bulk'></i> Project files :{' '}
        <span className='data'>
          <img src={file} alt='files' width='100%' />
        </span>
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
