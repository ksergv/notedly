import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.svg';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

import ButtonAsLink from './ButtonAsLink';
import { IS_LOGGED_IN } from '../gql/query';
import { useHistory } from 'react-router-dom'; // Импортируйте useHistory



const HeaderBar = styled.header`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  height: 64px;
  position: fixed;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  z-index: 1;
`;

const LogoText = styled.h1`
  margin: 0;
  padding: 0;
  display: inline;
`;

const UserState = styled.div`
  margin-left: auto;
`;

const Header = props => {
  // query hook for user logged in state
  const { data, client } = useQuery(IS_LOGGED_IN);
  const history = useHistory(); // Используйте useHistory из react-router-dom


  return (
    <HeaderBar>
      <img src={logo} alt="Notedly Logo" height="40" />
      <LogoText>Заметки</LogoText>
      {/* If logged in display a log out link, else display sign in options */}
      <UserState>
        {data.isLoggedIn ? (
          <ButtonAsLink
            onClick={() => {
              // remove the token
              localStorage.removeItem('token');
              // clear the application's cache
              client.resetStore();
              // update local state
              client.writeData({ data: { isLoggedIn: false } });
              // redirect the user to the homepage
              history.push('/');
            }}
          >
            Выйти
          </ButtonAsLink>
        ) : (
          <p>
            <Link to={'/signin'}>Войти</Link> или{' '}
            <Link to={'/signup'}>Зарегистрироваться</Link>
          </p>
        )}
      </UserState>
    </HeaderBar>
  );
};

export default Header;
