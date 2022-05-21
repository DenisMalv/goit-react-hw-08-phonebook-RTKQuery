import css from './LoginForm.module.css';

import { useState } from 'react';
import { isToken } from 'redux/tokenSlice/tokenSlice';

import { useDispatch } from 'react-redux';
import { useLoginRTKMutation } from 'redux/RTKAuthApi/AuthApi';
import { useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginRTK, { isSuccess, isError }] = useLoginRTKMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (isSuccess) {
    console.log('user is loged', isSuccess);
  }

  const handleLoginRTK = async user => {
    try {
      const ress = await loginRTK(user);
      if (ress.data) {
        console.log(isSuccess);
        navigate('/contacts');
        dispatch(isToken({ token: ress.data.token }));
      }
    } catch (error) {
      isError(error);
    }
  };

  const handleImputChange = event => {
    const { name, value } = event.currentTarget;
    // eslint-disable-next-line default-case
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
    }
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const userLogin = {
      email,
      password,
    };
    await handleLoginRTK(userLogin);
    reset();
  };

  // qwertyuiqq@gmail.com
  // 1234567890qq

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={css.contactForm}
    >
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
        password
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleImputChange}
        />
      </label>
      <button type="submit" className={css.contactForm__button}>
        Login
      </button>
    </form>
  );
};

// function PrivateRoute() {
//   const isLogin = useSelector(getIsLogin);

//   return isLogin ? <Outlet /> : <Navigate to="login" />;
// }
