import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='foot-section'>
        <h3>Contact Us</h3>
        <br />
        <p>
          Email : <i className='fa fa-envelope'></i> unitecx@gmail.com
        </p>
        <br />
        <p>
          Facebook : <i className='fab fa-facebook'></i> facebook/unitecx
        </p>
        <br />
        <p>
          Instagram : <i className='fab fa-twitter'></i> twitter/unitecx
        </p>
        <br />
        <p>
          Twitter : <i className='fab fa-instagram'></i> unitecx@gmail.com
        </p>
      </div>
      <div className='foot-section'>
        {' '}
        <h3>Services</h3>
        <br />
        <p>
          <i className='fa fa-laptop'></i> : Web development
        </p>
        <br />
        <p>
          <i className='fa fa-mobile'></i> : App development
        </p>
        <br />
        <p>
          <i className='fa fa-user'></i> : Digital Marketing
        </p>
        <br />
        <p>
          <i className='fa fa-pen'></i> : Graphic Designing
        </p>
      </div>
      <div className='foot-section'>
        {' '}
        <h3>PortFolios</h3>
        <br />
        <p>
          <i className='fa fa-laptop'></i> : www.unitecx.com
        </p>
        <br />
        <p>
          <i className='fa fa-mobile'></i> : www.smartbn.com
        </p>
        <br />
        <p>
          <i className='fa fa-laptop'></i> : www.moonsoa.com
        </p>
      </div>
    </footer>
  );
};

export default Footer;
