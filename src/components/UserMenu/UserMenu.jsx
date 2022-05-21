import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserMenuContainer, UserName, LogOutButton } from './UserMenu.styled';
import {
  useGetUserRTKQuery,
  useLogOutRTKMutation,
} from 'redux/RTKAuthApi/AuthApi';
import { getToken, isToken } from 'redux/tokenSlice/tokenSlice';

export const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [logOutRTK] = useLogOutRTKMutation();

  const token = useSelector(getToken);
  const { data = [], isSuccess } = useGetUserRTKQuery({ token });

  const handleLogOut = async () => {
    await logOutRTK(token);
    if (isSuccess) {
      dispatch(isToken({ token: null }));
      navigate('/login');
    }
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
