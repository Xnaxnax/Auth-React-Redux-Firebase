import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/use-auth'
import { removeUser } from '../../redux/slice/userSlice';
import './Homepage.css'

export default function Homepage() {
    const {isAuth, email} = useAuth();
    const dispatch = useDispatch()

  return isAuth ? (
    <div className='homepage-center'>
      <div className='homepage_wrapper'>
        <h1> Welcome </h1>

        <button
            onClick={() => dispatch(removeUser())}>

            Log out from {email}

        </button>
    </div>
    </div>
  ) : ( 
    <div className='homepage-center'>
      <div className='homepage_wrapper'>
        <h1>Hello my friend! =)</h1>
        <p>You don't have an account, so I suggest you register</p>
        <Link to='/register'>Register account</Link>
      </div>
    </div>
  )
}
