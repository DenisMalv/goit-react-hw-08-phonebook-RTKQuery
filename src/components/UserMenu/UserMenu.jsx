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
  const { data = [], isError } = useGetUserRTKQuery({ token });

  const handleLogOut = async () => {
    try {
      const ress = await logOutRTK(token);
      if (ress) {
        dispatch(isToken({ token: null }));
        navigate('/login');
      }
    } catch (error) {
      console.log('error you are is not login');
      isError(error);
    }

    // if (isSuccess) {
    //   dispatch(isToken({ token: null }));
    //   navigate('/login');
    // }
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
