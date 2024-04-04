import React from 'react'
import { Link } from 'react-router-dom'

function MainPage(): JSX.Element {
  return (
    <div>
    <div>СИНЕРГИЯ: НЕФТЬ И ГАЗ </div>
    <div>МЕЖДУНАРОДНЫЙ ИНТЕЛЕКТУАЛЬНЫЙ ТУРНИР</div>
    <div><ul>
    <li className="menu__group">
              <Link className="menu__link r-link text-underlined" to="/sign-up">
                Регистрация
              </Link>
            </li>
            <li className="menu__group">
              <Link className="menu__link r-link text-underlined" to="/sign-in">
                Вход
              </Link>
            </li>
      </ul></div>
    </div>
  )
}

export default MainPage