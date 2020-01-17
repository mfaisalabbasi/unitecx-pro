import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';

const Loging = () => {
  const [data, setdata] = useState({
    email: '',
    password: ''
  });
  const { email, password } = data;
  const user = { email, password };
  const alert = useAlert();
  const history = useHistory();
  const onChange = e => setdata({ ...data, [e.target.name]: e.target.value });
  const onSubmit = async e => {
    e.preventDefault();
    const req = await fetch('http://localhost:5000/api/user/loging', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const res = await req.json();
    const error = res.error;
    if (error) {
      alert.show(error);
    } else {
      localStorage.setItem('token', res.token);
      alert.show('loging sucessfully');
      history.push('/admin/projects');
    }
  };
  console.log(data);
  return (
    <section>
      {' '}
      <div className='sm-container'>
        <h3 className='heading'>
          <span style={{ color: 'red', display: 'block', fontSize: '30px' }}>
            Restricted!!!
          </span>
          Only authorized By Unitecx
        </h3>
        <p>
          This is Restricted Route, only allow to people those are authorized by
          unitecx company. Don't try to access, if you are Unauthorized so don't
          try to do any actions, it's against company privacy. Unitecx can take
          action against them through cyber law cell.
        </p>
      </div>
      <div className='project-form'>
        <div className='pform-head'>
          <h2>Enter Your credentials</h2>
        </div>

        <form method='post' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='password'
              name='password'
              value={password}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input className='submit-btn' type='submit' value='Submit' />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Loging;
