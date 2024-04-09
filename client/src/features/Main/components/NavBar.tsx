import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/nav.css';
import { useSelector } from 'react-redux';
import { type RootState, useAppDispatch } from '../../../store/store';
import * as api from '../../Auth/api';
import { authLogout } from '../../Auth/authSlice';

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useSelector((store: RootState) => store.auth.user);

  const handleLogout = async (): Promise<void> => {
    await api.logoutFetch().then((data) => {
      if (data.message === 'success') {
        dispatch(authLogout()).catch(console.log);
        navigate('/');
      }
    });
  };

  return (
    <nav className="page__menu page__custom-settings menu">
      <ul className="menu__list r-list">
        <li className="menu__group">
          <NavLink className="menu__link r-link text-underlined" to="/tournaments">
            Турниры
          </NavLink>
        </li>
        <li className="menu__group">
          <a
            className="menu__link r-link text-underlined"
            href="https://vk.com/synergyoil86"
            target="_blank"
            rel="noopener noreferrer"
          >
            VK
          </a>
        </li>
        {user != null ? <li className="menu__group">
          <NavLink className="menu__link r-link text-underlined" to="/profile">
            ЛК
          </NavLink>
        </li> :  <NavLink className="menu__link r-link text-underlined" to="/auth">
            ЛК
          </NavLink>}
        {user && (
          <li className="menu__group">
            <NavLink
              onClick={handleLogout}
              className="menu__link r-link text-underlined"
              to="/logout"
            >
              Выйти
            </NavLink>
          </li>
        ) 
        }
      </ul>
    </nav>
  );
}

export default NavBar;
