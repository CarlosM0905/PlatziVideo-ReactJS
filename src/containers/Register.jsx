/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerRequest } from '../actions/indexAction';
import '../assets/components/Register.scss';
import Header from '../components/Header';

const Register = (props) => {
  const [form, setValues] = useState({
    email: '',
    name: '',
    password: '',
  });

  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/');
  };
  return (
    <>
      <Header isRegister />
      <section className='register'>
        <section className='register__container'>
          <h2>Regístrate</h2>
          <form className='register__container--form' onSubmit={handleSubmit}>
            <input name='name' className='register__input' type='text' placeholder='Nombre' onChange={handleInput} />
            <input name='email' className='register__input' type='text' placeholder='Correo' onChange={handleInput} />
            <input name='password' className='register__input' type='password' placeholder='Contraseña' onChange={handleInput} />
            <button type='submit' className='register__button'>Registrarme</button>
          </form>
          <Link to='/login'>
            Iniciar Sesion
          </Link>
        </section>
      </section>
    </>
  );
};

const mapDispatchToProps = {
  registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);
