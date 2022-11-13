import { useSelector } from 'react-redux';
import { getToken } from 'redux/tokenSlice/tokenSlice';
import { Link} from 'react-router-dom';

const HomePage = () => {
  const isLogin = useSelector(getToken);
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>HOMEPAGE </h1>
      {!isLogin && (
        <p style={{ textAlign: 'center', fontSize: 24 }}>
          Please <Link to='/login'>Log In</Link> for more access, or <Link to='/register'>Sign In</Link>.
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
