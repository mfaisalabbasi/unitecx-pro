import React, { useState, useEffect } from 'react';
import { useAlert } from 'react-alert';
import Spinner from '../../animations/Spinner';

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

  const { loading, project } = data;
  return (
    <section>
      {loading ? (
        <Spinner />
      ) : (
        <div className='container'>
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
                <h4 className='heading-start'>
                  <i className='fa fa-envelope'></i> Email :{' '}
                  <span className='data'>{project.email}</span>
                </h4>
                <h4 className='heading-start'>
                  <i className='fa fa-mobile'></i> Phone :{' '}
                  <span className='data'>{project.phone}</span>
                </h4>
                <h4 className='heading-start'>
                  <i className='fa fa-mail-bulk'></i> Project Type :{' '}
                  <span className='data'>{project.protype}</span>
                </h4>
                <h4 className='heading-start'>
                  <i className='fa fa-clock'></i> Order Date :{' '}
                  <span className='data'>{project.date}</span>
                </h4>{' '}
                <h4 className='heading-start'>
                  <i className='fa fa-box'></i> Project status :{' '}
                  <span className='data'>pending</span>
                </h4>
              </div>
              <div className='dbl-box'>
                {' '}
                <h4 className='heading-start'>
                  <i className='fa fa-mail-bulk'></i> Project files :{' '}
                  <span className='data'>
                    <img src={project.file} alt='files' width='100%' />
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Singlepro;
