import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Project from './Project';
import Spinner from '../../animations/Spinner';

const Projects = () => {
  const [data, setdata] = useState({
    projects: [],
    loading: true,
    errors: null
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios('http://localhost:5000/api/projects', {
          headers: {
            'x-auth-token': localStorage.getItem('token')
          }
        });
        const projects = await res.data;
        setdata({ projects: projects, loading: false });
      } catch (err) {
        console.log(err);
        setdata({ errors: err.response.statusText, loading: false });
      }
    };
    fetchData();
  }, []);
  const { projects, loading } = data;
  return (
    <section>
      <div className='container'>
        <div className='sm-container' style={{ borderBottom: 'none' }}>
          <h3 className='heading-start'>
            Projects Details & Ordring information
          </h3>
          <p>
            Here You can see how much orders you got and u can view information
            regarding project that can help you to serve clients with thier
            needs i hope you got what i said
          </p>
        </div>
        <div className='flex-container'>
          {loading ? (
            <Spinner />
          ) : (
            projects.map(pro => <Project key={pro._id} pro={pro} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
