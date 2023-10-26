import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: 1em;
  background: #f5f4f0;

  @media (max-width: 700px) {
    padding-top: 64px;
  }

  @media (min-width: 700px) {
    position: fixed;
    width: 220px;
    height: calc(100% - 64px);
    overflow-y: scroll;
  }
`;

const Span=styled.span`
margin-right: 10px;
`;

const NavList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  line-height: 2;
  

  /* We can nest styles in styled-components */
  /* The following styles will apply to links within the NavList component */
  a {
    text-decoration: none;
    font-weight: bold;
    font-size: 1.1em;
    color: #333;
  }

  a:visited {
    color: #333;
  }

  a:hover,
  a:focus {
    color: #0077cc;
  }
`;

const Navigation = () => {

  const [category, setCategory] = useState('All'); // Состояние для выбора категории

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Nav>
      <NavList>
      <li>
      <Link to={`/`}>
         <span aria-hidden="true" role="img">
            📌
          </span> 
          <span style ={{fontWeight:'bold', fontSize: "1.1em", color: "#333"}} >Help! </span> 
          <select value={category} onChange={handleCategoryChange}>
            <option value="Health"> Здоровье</option>
            <option value="Develop"> Развитие</option>
            {/* Добавьте другие категории по аналогии */}
            <option value="Youtube">Youtube</option>
            <option value="Magic">Магия</option>
            <option value="Tsigin">Цигун</option>
            <option value="All"> Разное!</option>
          </select>
          </Link>
          </li>
          <li>
          <Link to={`/category/${category}`}>
            <span aria-hidden="true" role="img">
              🏠
            </span>
            Общие
          </Link>
          
        </li>
        <li>
          <Link to={`/mynotes/category/${category}`}>
            <span aria-hidden="true" role="img">
              📓
            </span>
            Приватные
          </Link>
        </li>
        <li>
          <Link to={`/favorites/category/${category}`}>
            <span aria-hidden="true" role="img">
              🌟
            </span>
            Избранное
          </Link>
        </li>
        <li>
          <Link to="/new">
            <span aria-hidden="true" role="img">
              ➕
            </span>
            Новая заметка
          </Link>
        </li>
      </NavList>
    </Nav>
    
  );
};

export default Navigation;
