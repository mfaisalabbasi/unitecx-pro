import React from 'react';

const Company = () => {
  return (
    <section>
      <div className='container'>
        <div className='sm-container'>
          <h3 className='heading'>
            <i className='fa fa-user' style={{ marginRight: '3px' }}></i> ABOUT
            US
          </h3>

          <h6 className='heading'>
            We are Providing Complete Digital Solution For Your Business{' '}
          </h6>
          <p style={{ marginTop: '10px' }}>
            We are Company that Serve Businesses to get more exposure and brand
            thier product in modern way through internet resources. We are
            Providing Digital Marketing, SEO, Web Devlopment Mobile App
            Development, cloud Computng, Designing and alot more on reasonable
            price with clients satisfaction.
          </p>
        </div>
        <div className='sm-container'>
          <h3 className='heading'>
            {' '}
            <i
              className='fa fa-briefcase'
              style={{ marginRight: '3px' }}
            ></i>{' '}
            Our Services
          </h3>
          <h6 className='heading'>
            We are Providing Complete Digital Solution For Your Business{' '}
          </h6>
          <p style={{ marginTop: '10px' }}>
            We serve our client with complete Digital solution for their
            business. These are some majour services that for our company is
            welknown these are following look at list below.
          </p>
          <div className='services-list'>
            <ul>
              <li>Web Development</li>
              <li>App Development</li>
              <li>SEO & Digital Marketing</li>
              <li>Designing</li>
              <li>Cloud Computing</li>
            </ul>
          </div>
          You can Contact us For these services and much more, We will Satisfy
          You With Our Best Quality work that will be best for growing your
          business
        </div>
        <div className='sm-container'>
          <h3 className='heading'>
            {' '}
            <i className='fa fa-users' style={{ marginRight: '5px' }}></i>Our
            Community
          </h3>
          <h6 className='heading'>
            We are Providing Complete Digital Solution For Your Business{' '}
          </h6>
          <p style={{ marginTop: '10px' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='sm-container'>
          <h3 className='heading'>
            {' '}
            <i className='fa fa-mobile-alt' style={{ marginRight: '5px' }}></i>
            Contact's & Loaction's
          </h3>
          <h6 className='heading'>
            We are Providing Complete Digital Solution For Your Business{' '}
          </h6>
          <div className='location-contact' style={{ marginTop: '10px' }}>
            <div className='location'>
              <h3 className='heading'>location</h3>{' '}
              <ul>
                <li>
                  <i
                    className='fa fa-globe heading'
                    style={{ marginRight: '5px' }}
                  ></i>
                  NewYork USA
                </li>
                <li>
                  <i
                    className='fa fa-globe heading'
                    style={{ marginRight: '5px' }}
                  ></i>
                  Jeddah SA
                </li>

                <li>
                  <i
                    className='fa fa-globe heading'
                    style={{ marginRight: '5px' }}
                  ></i>
                  Islamabad PK
                </li>
                <li>
                  <i
                    className='fa fa-globe heading'
                    style={{ marginRight: '5px' }}
                  ></i>
                  Rawalpindi PK
                </li>
                <li>
                  {' '}
                  <i
                    className='fa fa-globe heading'
                    style={{ marginRight: '5px' }}
                  ></i>
                  Mumbai IN
                </li>
              </ul>
            </div>
            <div className='contact'>
              <h3 className='heading'>Contact</h3>
              <ul>
                <li>
                  <i className='fa fa-mobile-alt heading'></i> Phone :
                  +923135100799
                </li>
                <li>
                  <i className='fa fa-envelope heading'></i> Email :
                  unitecx@gmail.com
                </li>
                <li>
                  <i className='fab fa-facebook heading'></i> Facebook :
                  facebook/unitecx
                </li>
                <li>
                  <i className='fab fa-instagram heading'></i> Insta :
                  instagram/unitecx
                </li>
                <li>
                  <i className='fab fa-youtube heading'></i> Youtube :
                  Youtube/unitecx
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Company;
