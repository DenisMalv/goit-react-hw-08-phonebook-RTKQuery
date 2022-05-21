import css from './RegisterForm.module.css';

import { useState } from 'react';
import { useRegisterRTKMutation } from 'redux/RTKAuthApi/AuthApi';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerRTK, registerApi] = useRegisterRTKMutation();

  if (registerApi.isSuccess) {
    console.log('register completed');
  }

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

  const handleSubmit = event => {
    event.preventDefault();
    const user = { name, email, password };
    console.log('newUser RegisterForm', user);
    registerRTK(user);

    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
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
  );
};
