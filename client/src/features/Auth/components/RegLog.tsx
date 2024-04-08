import React, { useState } from 'react'
import Log from './AuthorisationPage'
import Reg from './RegistrationPage'

function RegLog (): JSX.Element {
  const [logReg, setLogReg] = useState(false)

  return (
   <div className='container'>
    <div className='contAuth'>

      <div className="button-container">
      <button onClick={() => { setLogReg(true) }} className= { logReg ? 'log-reg-button disabled ' : 'log-reg-button'} type='button'>Регистрация</button>
      <button onClick={() => { setLogReg(false) }} className={logReg ? 'log-reg-button' : 'log-reg-button disabled'} type='button' >Войти</button>
      </div>

      { logReg && <Reg/>}
      { !logReg && <Log/>}
    </div>
   </div>

  )
}

export default RegLog