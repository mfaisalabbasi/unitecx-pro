import React from 'react';
import slide from '../img/slide.jpg';
import ProjectForm from '../services/ProjectForm';

const SinglePage = () => {
  return (
    <section>
      <div className='container'>
        <div className='sm-container' style={{ borderBottom: 'none' }}>
          <h1 className='heading'>
            {' '}
            Web Development <i className='fa fa-code heading'></i>
          </h1>

          <p>
            Hellow world how are You doing this is cool way to describe
            education Hellow world how are You doing this is cool way to
            describe education Hellow world how are You doing this is cool way
            to describe education
          </p>
        </div>

        <div className='slider'>
          <img src={slide} alt='web Dev' width='100%' height='100%' />
        </div>

        <div className='sm-container' style={{ borderBottom: 'none' }}>
          <h3 className='heading-start'>Fast Server and Community</h3>
          <p>
            Hellow world how are You doing this is cool way to describe
            education Hellow world how are You doing this is cool way to
            describe education Hellow world how are You doing this is cool way
            to describe education Hellow world how are You doing this is cool
            way to describe education Hellow world how are You doing this is
            cool way to describe education Hellow world how are You doing this
            is cool way to describe education Hellow world how are You doing
            this is cool way to describe education Hellow world how are You
            doing this is cool way to describe education Hellow world how are
            You doing this is cool way to describe education Hellow world how
            are You doing this is cool way to describe education Hellow world
            how are You doing this is cool way to describe education Hellow
            world how are You doing this is cool way to describe education
          </p>
        </div>
        <div className='sm-container' style={{ borderBottom: 'none' }}>
          <div className='slider'>
            <div className='box'>
              {' '}
              <h3 className='heading-start'>Fast Server and Community</h3>
              <p>
                Hellow world how are You doing this is cool way to describe
                education Hellow world how are You doing this is cool way to
                describe education Hellow world how are You doing this is cool
                way to describe education
              </p>
            </div>
            <div className='dbl-box'>
              <img src={slide} alt='web Dev' width='100%' />
            </div>
          </div>
        </div>
        <div className='sm-container' style={{ borderBottom: 'none' }}>
          <div className='slider'>
            <div className='box'>
              {' '}
              <h3 className='heading-start'>Fast Server and Community</h3>
              <p>
                Hellow world how are You doing this is cool way to describe
                education Hellow world how are You doing this is cool way to
                describe education Hellow world how are You doing this is cool
                way to describe education
              </p>
            </div>
            <div className='dbl-box'>
              <img src={slide} alt='web Dev' width='100%' />
            </div>
          </div>
        </div>
        <div className='sm-container' style={{ borderBottom: 'none' }}>
          <div className='slider'>
            <div className='box'>
              {' '}
              <h3 className='heading-start'>Fast Server and Community</h3>
              <p>
                Hellow world how are You doing this is cool way to describe
                education Hellow world how are You doing this is cool way to
                describe education Hellow world how are You doing this is cool
                way to describe education
              </p>
            </div>
            <div className='dbl-box'>
              <img src={slide} alt='web Dev' width='100%' />
            </div>
          </div>
        </div>

        <div className='slider' />
        <ProjectForm />
      </div>
    </section>
  );
};

export default SinglePage;
