import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div className=''>
        <Header />
        <div className='absolute max-h-full h-full w-full'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/839d49d1-c05f-4069-a637-8d0433328538/CA-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7810a47e-e741-49c0-965a-15801760c571_small.jpg'
                alt='backgound-image'
                className='h-full w-full'
            />
        </div>
        <form className='absolute w-5/12 px-12 py-10 my-44 mx-auto right-0 left-0 bg-black bg-opacity-80 rounded-lg text-white'>
            <p className='text-white px-2 py-2 mb-2 font-bold text-2xl'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </p>
            {!isSignInForm && 
                <input
                    type='text'
                    placeholder='Full Name'
                    className='p-2 mb-4 w-full rounded-lg bg-transparent border border-gray-400'
                /> 
            }
            <input
                type='text'
                placeholder='Email Address'
                className='p-2 w-full mb-4 rounded-lg bg-transparent border border-gray-400'
            />
            <input
                type='password'
                placeholder='Password'
                className='p-2 mb-4 w-full rounded-lg bg-transparent border border-gray-400'
            />
            <button 
                className='p-2 mb-4 font-bold text-lg w-full border rounded-lg bg-red-600 border-red-600 hover:bg-red-700 hover:border-red-700'
            >
                {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='cursor-pointer' onClick={toggleSignInForm}>
                {isSignInForm
                    ? "New to Netflix? Sign Up Now"
                    : "Already a user? Sign In Now"
                }
            </p>
        </form>
    </div>
  )
}

export default Login