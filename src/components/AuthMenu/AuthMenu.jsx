import { RegisterLink, LoginLink, AuthContainer } from './AuthMenu.styled';

export const AuthMenu = () => {
  return (
    <AuthContainer>
      <RegisterLink to="register">
        <span>Registration</span>
      </RegisterLink>
      <LoginLink to="login">
        <span>LogIn</span>
      </LoginLink>
    </AuthContainer>
  );
};
