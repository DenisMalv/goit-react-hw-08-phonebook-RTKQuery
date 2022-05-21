import {
  NavHomepage,
  NavContacts,
  Navigation,
  AppBarContainer,
  Helper,
} from './AppBar.styled';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/tokenSlice/tokenSlice';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';

export const AppBar = () => {
  const isLogin = useSelector(getToken);
  return (
    <AppBarContainer>
      <Navigation>
        <NavHomepage to="/">Homepage</NavHomepage>
        {isLogin && <NavContacts to="/contacts">Contacts</NavContacts>}
        <Helper>
          <p>Test1 Acc: qwertyuiqq@gmail.com</p>
          <p>Test1 Pass : 1234567890qq</p>
        </Helper>
        <Helper>
          <p>Test2 Acc : zxcvbnmqq@mail.com</p>
          <p>Test2 Pass : zxcvbnmqq</p>
        </Helper>
      </Navigation>
      {isLogin && <UserMenu />}
      {!isLogin && <AuthMenu />}
    </AppBarContainer>
  );
};
