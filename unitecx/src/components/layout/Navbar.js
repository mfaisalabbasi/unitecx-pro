import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import unilogo from '../img/unilogo.png';

const Navbar = () => {
  return (
    <Fragment>
      <div className='container-full'>
        <div className='fix-header'>
          <header>
            <div className='logo'>
              <div className='uni-logo'>
                <Link to='/'>
                  <img src={unilogo} alt='unitecx' />
                </Link>
              </div>
            </div>

            <nav>
              <ul>
                <li>
                  <Link to='/services'>Services</Link>
                </li>
                <li>
                  {' '}
                  <Link to='/portfolios'>Portfolios</Link>
                </li>
                <li>
                  {' '}
                  <Link to='/company'>Company</Link>
                </li>

                <li>
                  {' '}
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </Fragment>
  );
};
export default Navbar;
