import Form from './FormPage'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slice/userSlice';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import React from 'react'

export default function SignUp() {
    const push = useNavigate()
    const dispatch = useDispatch();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then(({user}) => {
          console.log(user);
          dispatch(setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          }))
          push('/');
        })
        .catch(console.error)
    }

  return (

    
    <div>
        <Form 
            title='register'
            handleClick={handleRegister}
        />
    </div>
  )
}
