import React, { useState, useEffect } from 'react';
import ProjectForm from '../services/ProjectForm';
import { useAlert } from 'react-alert';
import Spinner from '../animations/Spinner';
import webdevelopment from '../img/webdevelopment.png';
import appdevelopment from '../img/appdevelopment.png';
import digitalmarketing from '../img/digitalmarketing.png';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Singleportfolio = props => {
  const alert = useAlert();
  const [data, setdata] = useState({
    loading: true,
    portfolio: null,
    errors: null
  });
  const id = props.match.params.id;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(
          `https://still-dusk-38383.herokuapp.com/api/portfolios/${id}`
        );
        const res = await req.json();
        const error = res.error;
        if (error) {
          alert.show(error);
        } else {
          setdata({
            portfolio: res,
            loading: false
          });
        }
      } catch (err) {
        console.log(err);
        setdata({
          errors: err,
          loading: false
        });
        alert.show('server error');
      }
    };
    fetchData();
  }, [alert, id]);

  const { loading, portfolio } = data;
  return (
    <section>
      {loading ? (
        <Spinner />
      ) : (
        <div className='container'>
          <div className='slider'>
            <div className='carosoule'>
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false} // should stop playing on user interaction
                interval={3000}
                bullets={false}
                style={{ height: '40vh' }}
              >
                <div className='caro'>
                  {' '}
                  <img
                    src={webdevelopment}
                    alt='slider'
                    width='100%'
                    height='100%'
                  />
                </div>
                <div className='caro'>
                  {' '}
                  <img
                    src={appdevelopment}
                    alt='slider'
                    width='100%'
                    height='100%'
                  />
                </div>
                <div className='caro'>
                  {' '}
                  <img
                    src={digitalmarketing}
                    alt='slider'
                    width='100%'
                    height='100%'
                  />
                </div>
              </AutoplaySlider>
            </div>
          </div>
          <div className='sm-container' style={{ borderBottom: 'none' }}>
            <h1 className='heading'>
              {' '}
              {portfolio.name} <i className='fa fa-code heading'></i>
            </h1>

            <p>{portfolio.description}</p>
          </div>

          <div className='sm-container' style={{ borderBottom: 'none' }}>
            <div className='slider'>
              <div className='box'>
                {' '}
                <h3 className='heading-start'>Secure and Fast</h3>
                <p>{portfolio.bio}</p>
                <h3 className='heading-start'>Tools and Technologies</h3>
                <p>
                  we have expert community that grow with time and upto data
                  with technologies, we used all best and new tricks for
                  development
                </p>
                <div className='services-list'>
                  <ul>
                    <li>Html5 + Css3</li>
                    <li>Javascript,Reactjs</li>
                    <li>Nodejs,php</li>
                    <li>Firebase,mongoDb,mysql</li>
                  </ul>
                </div>
              </div>
              <div className='dbl-box'>
                <img src={portfolio.file} alt='web Dev' width='100%' />
              </div>
            </div>
          </div>

          <div className='slider' />
          <ProjectForm />
        </div>
      )}
    </section>
  );
};

export default Singleportfolio;
