import React from 'react'
import { Link } from 'react-router-dom'
import SignUpPage from '../../components/SignUpPage'
import './Register.css'

export default function Register() {
  return (
    <div className='register-center'>
      <div> 
        <h1>Register</h1>
        <SignUpPage />
        <p>
            Already have an account? <Link to="/login">Sign in</Link>
        </p>
    </div>
    </div>
  )
}
