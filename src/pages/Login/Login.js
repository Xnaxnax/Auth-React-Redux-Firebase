import React from 'react'
import { Link } from 'react-router-dom'
import LoginPage from '../../components/LoginPage'
import './Login.css'

export default function Login() {
  return (
    <div className='login_wrapper'>
      <div>
        <h1>Login</h1>
        <LoginPage />
        <p>
            Or <Link to='/register'>register</Link>
        </p>
    </div>
    </div>
  )
}
