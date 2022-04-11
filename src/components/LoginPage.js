import React from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from './FormPage'
import { useDispatch } from 'react-redux'
import { setUser } from '../redux/slice/userSlice';
import { useNavigate } from 'react-router-dom';


export default function Login() {
  const push = useNavigate()
  const dispatch = useDispatch();
    
    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
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
            title="sign in"
            handleClick={handleLogin}
            />
    </div>
  )
}
