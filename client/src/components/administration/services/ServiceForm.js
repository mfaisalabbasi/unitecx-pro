import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAlert } from 'react-alert';
const ServiceForm = () => {
  const alert = useAlert();
  let history = useHistory();
  const [formData, setFormData] = useState({
    name: '',
    bio: '',
    selectedFile: null,
    description: ''
  });
  const { name, bio, description, selectedFile } = formData;
  const onChange = async e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFile = e => {
    setFormData({ ...formData, selectedFile: e.target.files[0] });
  };

  const onSubmit = async e => {
    e.preventDefault();
    try {
      const formD = new FormData();
      formD.append('name', name);
      formD.append('bio', bio);
      formD.append('description', description);
      formD.append('file', selectedFile);
      const req = await fetch('http://localhost:5000/api/services', {
        method: 'POST',
        body: formD
      });

      const res = await req.json();
      const errors = res.errors;
      if (errors) {
        errors.map(err => alert.show(err.msg));
      } else {
        alert.success('service added successfully...');
        history.push('/services');
      }
    } catch (err) {
      console.log('unable to connect', err);
      alert.show('unable to find, check your address');
    }
  };
  return (
    <section>
      <div className='container'>
        <div className='sm-container'>
          <h1 className='heading'>Post Service ...</h1>
          <p>
            post service here that you wanna add for your clients and boostup
            your business. carefully add name of service and describe fully with
            easy sense that should understandable for everyone oook good luck
            ...
          </p>
        </div>
      </div>
      <div className='project-form'>
        <h2 className='pform-head'>Add Services</h2>
        <form
          onSubmit={e => onSubmit(e)}
          method='post'
          encType='multipart/form-data'
        >
          <div className='form-group'>
            <input
              type='text'
              placeholder='Service name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='text'
              name='bio'
              placeholder='short bio'
              value={bio}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <div className='small-text'>***Optional if you want...</div>
            <input type='file' name='file' onChange={e => handleFile(e)} />
          </div>
          <div className='form-group'>
            <textarea
              placeholder='service description'
              name='description'
              value={description}
              onChange={e => onChange(e)}
            />
          </div>
          <div className='form-group'>
            <input
              type='submit'
              className='submit-btn'
              name='submit'
              value='Add Service'
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ServiceForm;
