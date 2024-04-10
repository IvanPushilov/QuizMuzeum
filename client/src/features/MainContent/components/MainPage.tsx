import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import type { RootState } from '../../../store/store'
import PostItem from '../../Posts/components/PostItem'
import FormAddPost from '../../Posts/components/FormAddPost'
import '../styles/mainPage.css'
import '../styles/mainpage.scss'


function MainPage(): JSX.Element {
  const posts = useSelector((store:RootState)=>store.posts.posts)
  const user = useSelector((store: RootState) => store.auth.user)

  return (
    <div>
      <div className='container'>
       <div className='container_main'>
        <div className='img-pos'></div>
      </div>
      <div className='container_main'>
        <div className='titleSite_down'>МЕЖДУНАРОДНЫЙ ИНТЕЛЕКТУАЛЬНЫЙ ТУРНИР</div>
       <div className='titleSite'>«СИНЕРГИЯ: <br /> НЕФТЬ И ГАЗ» </div>
       <p className='date'>9 - 11 ноября</p>
       <div className='container-div'>
        <div className='cont-auth'>
              <Link className="link_auth" to="/tournaments">
              Турниры
              </Link>
              </div>
              <Link className="link_auth" to="/auth">
              Вход / Регистрация
              </Link>
              </div>

      </div>
      </div>
     <div><ul>

           
      </ul>
      {/* <div>{posts.map((post)=><PostItem post={post} key={post.id}/>)}</div> */}
      {user?.role === 'admin' && <FormAddPost/>}
      </div>
    </div>
  )
}

export default MainPage