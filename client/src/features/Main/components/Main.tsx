import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import Footer from './Footer'
import '../../../features/Main/styles/footer.css'

function Main(): JSX.Element {
  return (
    <div className='main'>
      <NavBar/>
      <div className='body'>
        <Outlet/>
      </div>
      <div className='footer'>
        <Footer/>
      </div>
    </div>
  )
}

export default Main