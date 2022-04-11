import React, { useState } from 'react'
import './FormPage.css'

export default function Form({title, handleClick}) {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

  return (
    <div className='form-wrapper'>
        <div>
            <input
                className='form-input' 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='email'
                />

            <input
                className='form-input' 
                type="pass" 
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder='password'
                />
            <button
                className='form-button'
                onClick={() => handleClick(email, pass)}
            >
                {title}
            </button>    
        </div>
    </div>
  )
}
