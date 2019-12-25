import React, { useState, useEffect } from 'react';
import slide from '../../img/slide.jpg';
import ProjectForm from '../../services/ProjectForm';
import { useAlert } from 'react-alert';
import Spinner from '../../animations/Spinner';
import Unitecx from '../../img/Unitecx.png';
import caro1 from '../../img/caro1.jpg';
import caro2 from '../../img/caro2.jpg';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
const AutoplaySlider = withAutoplay(AwesomeSlider);

const Singlepro = props => {
  const [data, setdata] = useState({
    project: null,
    loading: true,
    errors: null
  });
  const id = props.match.params.id;
  const alert = useAlert();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const req = await fetch(`http://localhost:5000/api/projects/${id}`);
        const res = await req.json();
        const error = res.error;
        if (error) {
          alert.show(error);
        } else {
          setdata({
            project: res,
            loading: false
          });
        }
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, alert]);
  console.log(data);
  const { loading, project } = data;
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
              {project.name} <i className='fa fa-code heading'></i>
            </h1>

            <p>{project.description}</p>
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

export default Singlepro;
