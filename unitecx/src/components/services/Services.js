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
  console.log(data);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const req = await fetch('http://localhost:5000/api/services');
        const services = await req.json();
        setdata({
          services: services,
          auth: true
        });
      } catch (err) {
        console.log(err);
        setdata({
          errors: err,
          auth: false
        });
      }
    };
    fetchServices();
  }, []);
  const { services, loading } = data;
  console.log(data);
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
