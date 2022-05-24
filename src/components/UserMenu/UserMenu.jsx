import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserMenuContainer, UserName, LogOutButton } from './UserMenu.styled';
import {
  useGetUserRTKQuery,
  useLogOutRTKMutation,
} from 'redux/RTKAuthApi/AuthApi';
import { getToken, isToken } from 'redux/tokenSlice/tokenSlice';
import { useEffect } from 'react';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logOutRTK, { isSuccess }] = useLogOutRTKMutation();

  const token = useSelector(getToken);
  console.log(token);
  const { data = [], isError } = useGetUserRTKQuery(
    { token },
    { refetchOnFocus: true }
  );
  console.log(useGetUserRTKQuery());
  console.log('error', isError);
  useEffect(() => {
    if (isSuccess || isError) {
      console.log('logout success', isSuccess);
      // console.log('logout error', error);
      dispatch(isToken({ token: null }));
      navigate('/');
    }
  }, [dispatch, isError, isSuccess, navigate]);

  const handleLogOut = async () => {
    await logOutRTK(token).unwrap();
  };

  return (
    <UserMenuContainer>
      <UserName>
        UserName : <span>{data.name}</span>
      </UserName>
      <LogOutButton type="button" onClick={handleLogOut}>
        <span>Logout</span>
      </LogOutButton>
    </UserMenuContainer>
  );
};
