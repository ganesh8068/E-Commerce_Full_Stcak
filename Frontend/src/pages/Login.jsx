import React, { useState } from 'react'

const Login = () => {

  const [currentState, setCurrentState] = useState('Login')

  const onSubmitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={onSubmitHandler} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div className="mb-2 inline-flex items-center gap-2 mt-10">
          <p className="text-3xl prata-regular">{currentState}</p>
          <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
        </div>
        { currentState === "Login" ? '' : <input type="text" className='w-full px-3 py-3 border border-gray-800' placeholder='Name' required/> }
        <input type="email" className='w-full px-3 py-3 border border-gray-800' placeholder='Email' required/>
        <input type="password" className='w-full px-3 py-3 border border-gray-800' placeholder='Password'required/>
        <div className="w-full flex justify-between text-sm mt-[-8px]">
          <p className="cursor-pointer">Forgot password</p>
          {
            currentState === 'Login' ? 
            <p className="cursor-pointer" onClick={()=> setCurrentState('Sign Up')}> Create account </p> : 
            <p className="cursor-pointer" onClick={()=> setCurrentState('Login')}>Login Here</p>
          }
        </div>

        <button className='text-white bg-black py-2 mt-2 px-8'>{currentState === 'Login' ? "Sign In" : "sign Up"}</button>
      </form>
    </div>
  )
}

export default Login
