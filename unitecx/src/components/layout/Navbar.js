import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <div className='container-full'>
        <div className='fix-header'>
          <header>
            <div className='logo'>
              <Link to='/'>
                <h1 className='heading'>Unitecx</h1>
              </Link>
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
