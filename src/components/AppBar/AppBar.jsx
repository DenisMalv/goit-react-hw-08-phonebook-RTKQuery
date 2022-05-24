import {
  NavHomepage,
  NavContacts,
  Navigation,
  AppBarContainer,
  // Helper,
} from './AppBar.styled';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/tokenSlice/tokenSlice';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';
import { useGetUserRTKQuery } from 'redux/RTKAuthApi/AuthApi';
import { useEffect } from 'react';

export const AppBar = () => {
  const isLogin = useSelector(getToken);
  const {
    data = [],
    error,
    isFetching,
    isSuccess,
  } = useGetUserRTKQuery({ token: isLogin }, { skip: isLogin === 'null' });
  // console.log(error);
  // console.log(useGetUserRTKQuery());

  console.log(isFetching);
  console.log(isSuccess);
  useEffect(() => {
    if (isSuccess) {
      console.log('login me pls auto');
    }
  }, [isSuccess, isLogin]);

  return (
    <AppBarContainer>
      <Navigation>
        <NavHomepage to="/">
          <span>Homepage</span>
        </NavHomepage>
        {isLogin && (
          <NavContacts to="/contacts">
            <span>Contacts</span>
          </NavContacts>
        )}
        {/* {!error && !isFetching && data.length > 0 && (
          <NavContacts to="/contacts">
            <span>Contacts</span>
          </NavContacts>
        )} */}
        {/* <Helper>
          <p>Test1 Acc: qwertyuiqq@gmail.com</p>
          <p>Test1 Pass : 1234567890qq</p>
        </Helper>
        <Helper>
          <p>Test2 Acc : zxcvbnmqq@mail.com</p>
          <p>Test2 Pass : zxcvbnmqq</p>
        </Helper> */}
      </Navigation>
      {isLogin && <UserMenu />}
      {!isLogin && <AuthMenu />}
      {/* {isSuccess && <UserMenu />}
      {error && <AuthMenu />} */}
    </AppBarContainer>
  );
};
