import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/tokenSlice/tokenSlice';

const PublicRoute = ({ children }) => {
  const isLogin = useSelector(getToken);
  return !isLogin ? children : <Navigate to="/" />;
};

export default PublicRoute;
