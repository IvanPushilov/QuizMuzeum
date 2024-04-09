import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../../store/store'
import PostItem from '../../Posts/components/PostItem'
import FormAddPost from '../../Posts/components/FormAddPost'


function MainPage(): JSX.Element {
  const posts = useSelector((store:RootState)=>store.posts.posts)

  return (
    <div>
    <div>СИНЕРГИЯ: НЕФТЬ И ГАЗ </div>
    <div>МЕЖДУНАРОДНЫЙ ИНТЕЛЕКТУАЛЬНЫЙ ТУРНИР</div>
    <div><ul>
    <li className="menu__group">
              <Link className="menu__link r-link text-underlined" to="/auth">
                Регистрация/Вход
              </Link>
            </li>
           
      </ul>
      <div>{posts.map((post)=><PostItem post={post} key={post.id}/>)}</div>
      <FormAddPost/>
      </div>
    </div>
  )
}

export default MainPage