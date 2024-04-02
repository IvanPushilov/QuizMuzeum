import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/nav.css';

function NavBar(): JSX.Element {
  return (
    <nav className="page__menu page__custom-settings menu">
      <ul className="menu__list r-list">
        <li className="menu__group">
          <NavLink className="menu__link r-link text-underlined" to="/tournaments">
            Турниры
          </NavLink>
        </li>
        <li className="menu__group">
          <NavLink className="menu__link r-link text-underlined" to="/sign-up">
            Регистрация
          </NavLink>
        </li>
        <li className="menu__group">
          <NavLink className="menu__link r-link text-underlined" to="/sign-in">
            Вход
          </NavLink>
        </li>
        <li className="menu__group">
          <a
            className="menu__link r-link text-underlined"
            href="https://vk.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            VK
          </a>
        </li>
        <li className="menu__group">
          <NavLink className="menu__link r-link text-underlined" to="/profile">
            ЛК
          </NavLink>
        </li>
        <li className="menu__group">
          <NavLink className="menu__link r-link text-underlined" to="/logout">
            Выйти
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
