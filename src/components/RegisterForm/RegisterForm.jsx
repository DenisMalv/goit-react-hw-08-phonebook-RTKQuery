import css from './RegisterForm.module.css';

import { useState } from 'react';
import { useRegisterRTKMutation } from 'redux/RTKAuthApi/AuthApi';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error = false, setError] = useState('');
  const [registerRTK, { isError, isSuccess }] = useRegisterRTKMutation();
  console.log(useRegisterRTKMutation());
  // if (isSuccess) {
  //   console.log('register completed', isSuccess);
  // }
  // if (isError) {
  //   console.log('register not completed', isError);
  // }
  // if (error?.data?.keyValue) {
  //   console.log(`error email already exist`, error.data.keyValue.email);
  // }
  // if (error?.data?.message) {
  //   console.log(`error password`, error.data.message);
  // }

  const handleImputChange = event => {
    const { name, value } = event.currentTarget;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'name':
        console.log(name, value);
        setName(value);
        break;
      case 'email':
        console.log(name, value);
        setEmail(value);
        break;
      case 'password':
        console.log(name, value);
        setPassword(value);
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const user = { name, email, password };
    const resposnce = await registerRTK(user);
    resposnce.error && setError(resposnce.error);
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label className={css.contactForm__label}>
          <span>name</span>
          <input
            type="name"
            name="name"
            value={name}
            onChange={handleImputChange}
          />
        </label>
        <label className={css.contactForm__label}>
          <span>email</span>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleImputChange}
          />
        </label>
        <label className={css.contactForm__label}>
          <span>password</span>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleImputChange}
          />
        </label>
        <button type="submit" className={css.contactForm__button}>
          Register
        </button>
      </form>
      {isSuccess && (
        <p style={{ fontFamily: `Roboto`, fontSize: 24 }}>
          Registration succeess :)
        </p>
      )}
      {isError && (
        <p style={{ fontFamily: `Roboto`, fontSize: 24 }}>
          Registration not succeess :(
        </p>
      )}
      {error?.data?.keyValue && (
        <p style={{ fontFamily: `Roboto`, fontSize: 24 }}>
          this email is already registed :(
        </p>
      )}
      {error?.data?.message && (
        <p style={{ fontFamily: `Roboto`, fontSize: 24 }}>
          {error.data.message}
        </p>
      )}
    </>
  );
};
