import styled from '@emotion/styled';
import { Link, NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: block;
  background: linear-gradient(#003a3efc, #7ce6f42b);
  min-height: 50px;
  // margin-bottom: 20px;
  z-index: -2;
`;

export const Homepage = styled(Link)`
  display: block;
  padding: 10px 0;
  max-width: 150px;

  font-family: 'Oleo Script Swash Caps', cursive;
  font-weight: 700;
  font-size: 30px;
  text-decoration: none;
  color: #000;
  transition: color 400ms ease;
  &:hover {
    color: #00cee4;
  }
`;

export const Footer = styled.footer`
  display: block;
  background: linear-gradient(#7ce6f42b, #003a3efc);
  min-height: 50px;
  text-align: center;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 15px;
`;

export const NavHomepage = styled(NavLink)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: #282828;
  transition: color 400ms ease;
  &:hover {
    color: #00cee4;
  }
  &.active {
    color: #00cdd5;
    pointer-events: none;
  }
`;

export const NavMovie = styled(NavLink)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: #282828;
  padding: 10px;
  transition: color 400ms ease;
  &:hover {
    color: #00cee4;
  }
  &.active {
    color: #00cdd5;
    pointer-events: none;
  }
`;

export const MainContent = styled.main`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    0deg,
   rgb(255 255 255 / 0%) 0%, rgb(121 255 251 / 85%) 49%, rgb(255 255 255 / 0%) 100% );
  );
  min-height: 84.3vh;
  font-family: Roboto;
  padding:20px 0
`;
