import React, { useState } from 'react';
import { useAlert } from 'react-alert';
import { useHistory } from 'react-router-dom';

const Signup = () => {
  const [data, setdata] = useState({
    name: '',
    email: '',
    password: ''
  });
  const { name, email, password } = data;
  const alert = useAlert();
  const history = useHistory();
  const onChange = e => {
    setdata({
      ...data,
      [e.target.name]: e.target.value
    });
  };
  const user = {
    name,
    email,
    password
  };
  const onSubmit = async e => {
    e.preventDefault();
    const req = await fetch('https://still-dusk-38383.herokuapp.com/api/user/register', {
      method: 'post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    });
    const res = await req.json();
    const errors = res.errors;
    if (errors) {
      errors.map(err => alert.show(err.msg));
    } else {
      localStorage.setItem('token', res.token);
      alert.show('signed up successfully');
      history.push('/admin/projects');
    }
  };

  return (
    <section>
      <div className='sm-container'>
        <h3 className='heading'>Welcome to Admin Registration</h3>
        <p>
          welcome to admin panel kindly sign up on if you are authorized and you
          have token for siging, And start serving people right with your best
          services. use your code that is given to you by orgnization
        </p>
      </div>
      <div className='project-form'>
        <div className='pform-head'>
          <h2>To start a Project !!!</h2>
        </div>

        <form method='post' onSubmit={e => onSubmit(e)}>
          <div className='form-group'>
            <input
              type='text'
              placeholder='Full Name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
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

export default Signup;
