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
        <NavLink className='link-vk' to='https://vk.com/synergyoil86'>
      <svg width="40px" height="40px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path class="a" d="M27.55,35.19V28.55c4.46.68,5.87,4.19,8.71,6.64H43.5a29.36,29.36,0,0,0-7.9-10.47c2.6-3.58,5.36-6.95,6.71-12.06H35.73c-2.58,3.91-3.94,8.49-8.18,11.51V12.66H18l2.28,2.82,0,10.05c-3.7-.43-6.2-7.2-8.91-12.87H4.5C7,20.32,12.26,37.13,27.55,35.19Z"/></svg>
      </NavLink>
      </li>
      <li>

      </li>



        {user != null && <li className="menu__group">
        <NavLink className='link-profile' to='/profile'>
      <svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path opacity="0.34" d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </NavLink>
        </li> }
        {user && (
          <li className="menu__group">
            <NavLink
              onClick={handleLogout}
              className="menu__link r-link text-underlined"
              to="/logout"
            >
<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 16.5V19C15 20.1046 14.1046 21 13 21H6C4.89543 21 4 20.1046 4 19V5C4 3.89543 4.89543 3 6 3H13C14.1046 3 15 3.89543 15 5V8.0625M11 12H21M21 12L18.5 9.5M21 12L18.5 14.5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </NavLink>
          </li>
        ) 
        }
      </ul>
    </nav>
  );
}

export default NavBar;
