import React, { useEffect, useState } from 'react';
import ProjectForm from './ProjectForm';
import Spinner from '../animations/Spinner';
import Service from './Service';

const Services = () => {
  const [data, setdata] = useState({
    services: [],
    loading: true,
    errors: null,
    isAuthenticated: false
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const req = await fetch('https://still-dusk-38383.herokuapp.com/api/services');
        const services = await req.json();
        setdata({
          services: services,
          loading: false
        });
      } catch (err) {
        console.log(err);
        setdata({
          errors: err,
          loading: false
        });
      }
    };
    fetchServices();
  }, []);
  const { services, loading } = data;

  return (
    <section>
      <div className='container'>
        <div className='sm-container' style={{ borderBottom: 'none' }}>
          <h3 className='heading'>Services</h3>
          <p style={{ paddingTop: '5px' }}>
            We are providing complete digital solution for your Business, like
            design , developemt and digital marketing that can help you to grow
            your Business in modern way.
          </p>
        </div>
        <div className='flex-container'>
          {loading ? (
            <Spinner />
          ) : (
            services.map(service => (
              <Service key={service._id} service={service} />
            ))
          )}
        </div>
        {/* Project form */}
        <ProjectForm />
      </div>
    </section>
  );
};

export default Services;
