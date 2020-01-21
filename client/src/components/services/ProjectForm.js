import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';

const ProjectForm = () => {
  let history = useHistory();
  const alert = useAlert();

  let [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    protype: '',
    description: '',
    selectedFile: null
  });
  const { name, email, phone, protype, description, selectedFile } = formData;
  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFile = e => {
    setFormData({ ...formData, selectedFile: e.target.files[0] });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const formD = new FormData();
      formD.append('name', name);
      formD.append('email', email);
      formD.append('phone', phone);
      formD.append('protype', protype);
      formD.append('description', description);
      formD.append('file', selectedFile);

      const req = await fetch(
        'https://still-dusk-38383.herokuapp.com/api/projects',
        {
          method: 'post',
          body: formD
        }
      );
      const res = await req.json();
      const errors = res.errors;
      if (errors) {
        errors.map(err => alert.show(err.msg));
      } else {
        alert.success(`order submitted check your mailbox...`);
        history.push('/services');
      }
    } catch (err) {
      console.log('fail to connect', err);
      alert.show('unable to find, check your address');
    }
  };

  return (
    <div className='project-form'>
      <div className='pform-head'>
        <h2>To start a Project !!!</h2>
      </div>

      <form onSubmit={e => onSubmit(e)} encType='multipart/form-data'>
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
            type='text'
            placeholder='Phone'
            name='phone'
            value={phone}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <select name='protype' value={protype} onChange={e => onChange(e)}>
            <option>Select project type</option>
            <option>Websites</option>
            <option>Mobile App</option>
            <option>Digital Marketing</option>
            <option>Video Editing</option>
            <option>Graphic Designing</option>
          </select>
        </div>

        <div className='form-group'>
          <div className='small-text'>***Optional if you want...</div>
          <input type='file' name='file' onChange={e => handleFile(e)} />
        </div>

        <div className='form-group'>
          <textarea
            placeholder='Project Description'
            name='description'
            value={description}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input className='submit-btn' type='submit' value='Submit' />
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
