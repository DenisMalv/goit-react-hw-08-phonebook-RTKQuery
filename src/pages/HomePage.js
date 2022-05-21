import { useSelector } from 'react-redux';
import { getToken } from 'redux/tokenSlice/tokenSlice';

const HomePage = () => {
  const isLogin = useSelector(getToken);
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>HOMEPAGE </h1>
      {!isLogin && (
        <p style={{ textAlign: 'center', fontSize: 24 }}>
          Please logIn for more...
        </p>
      )}
      {isLogin && (
        <p style={{ textAlign: 'center', fontSize: 24 }}>
          welcome to your phonebook
        </p>
      )}
    </>
  );
};

export default HomePage;
