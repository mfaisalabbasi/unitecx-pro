import React, { useState, useEffect } from 'react';
import slide from '../img/slide.jpg';
import ProjectForm from '../services/ProjectForm';
import { useAlert } from 'react-alert';
import Spinner from '../animations/Spinner';
import Unitecx from '../img/Unitecx.png';
import caro1 from '../img/caro1.jpg';
import caro2 from '../img/caro2.jpg';
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
        const req = await fetch(`http://localhost:5000/api/portfolios/${id}`);
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
  console.log(data);
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
                  <img src={Unitecx} alt='slider' width='100%' height='100%' />
                </div>
                <div className='caro'>
                  {' '}
                  <img src={caro1} alt='slider' width='100%' height='100%' />
                </div>
                <div className='caro'>
                  {' '}
                  <img src={caro2} alt='slider' width='100%' height='100%' />
                </div>
              </AutoplaySlider>
            </div>
          </div>
          <div className='sm-container' style={{ borderBottom: 'none' }}>
            <h1 className='heading'>
              {' '}
              {portfolio.name} <i className='fa fa-code heading'></i>
            </h1>

            <p>{portfolio.bio}</p>
          </div>

          <div className='sm-container' style={{ borderBottom: 'none' }}>
            <h3 className='heading-start'>Fast Server and Community</h3>
            <p>{portfolio.description}</p>
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
      )}
    </section>
  );
};

export default Singleportfolio;
