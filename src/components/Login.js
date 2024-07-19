import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateData } from '../utils/validate';

import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { USER_IMG } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {


    const navigate = useNavigate();
    const dispatch = useDispatch();

    const email = useRef(null);
    const password = useRef(null);
    const fullName = useRef(null);

    const [errorMessage, setErrorMessage] = useState("");
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    const handleButtonClick = () => {
        let message;
        if(isSignInForm)
            message = validateData("Bla Bla", email.current.value, password.current.value);
        if(!isSignInForm)
            message = validateData(fullName.current.value, email.current.value, password.current.value);
        
        setErrorMessage(message);

        // Exit from the function if there is any message
        if(message) return;

        // SignIn or SignUp Logic
        if(isSignInForm) {
            // SignIn Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              // Signed in 
              const user = userCredential.user;
              console.log(user);
              toast.success(`User authenticated successfully with email ${email.current.value}`)
              navigate("/browse");
            })
            .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              ;toast.error(`Error while authenticating, please try again! Error Info - ${errorCode}, ${errorMessage}`);
            })

        } else {
            // SignUp Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                updateProfile(auth.currentUser, {
                    displayName: fullName.current.value, 
                    photoURL: USER_IMG
                  }).then(() => {
                    // Profile updated!
                    const { uid, email, displayName, photoURL} = auth.currentUser;
                    dispatch(addUser({
                        displayName : displayName,
                        photoURL : photoURL
                    }))
                    toast.success(`User create with email ${email.current.value}`)
                  }).catch((error) => {
                    // An error occurred
                    toast.error(`Error while creating account. Error Info - ${error.errorCode}, ${error.errorMessage}`);
                  });

                
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                toast.error(`Error while creating account. Error Info - ${errorCode}, ${errorMessage}`);
            });

        }
    }

  return (
    <div className=''>
        <Header />
        <ToastContainer 
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="absolute"
        />
        <div className='absolute max-h-full h-full w-full'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/839d49d1-c05f-4069-a637-8d0433328538/CA-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7810a47e-e741-49c0-965a-15801760c571_small.jpg'
                alt='background-image'
                className='h-full w-full'
            />
        </div>
        <form 
            className='absolute w-5/12 px-12 py-10 my-44 mx-auto right-0 left-0 bg-black bg-opacity-85 rounded-lg text-white'
            onSubmit={(e) => {
                return e.preventDefault();
            }}
        >
            <p className='text-white px-2 py-2 mb-2 font-bold text-2xl'>
                {isSignInForm ? "Sign In" : "Sign Up"}
            </p>
            {!isSignInForm && 
                <input
                    type='text'
                    ref={fullName}
                    placeholder='Full Name'
                    className='p-2 mb-4 w-full rounded-lg bg-transparent border border-gray-400'
                /> 
            }
            <input
                type='text'
                ref={email}
                placeholder='Email Address'
                className='p-2 w-full mb-4 rounded-lg bg-transparent border border-gray-400'
            />
            <input
                type='password'
                ref={password}
                placeholder='Password'
                className='p-2 mb-4 w-full rounded-lg bg-transparent border border-gray-400'
            />
            {errorMessage && 
                <p className='flex'>
                    <span className='items-center flex justify-center pb-1 mb-2 rounded-full w-6 h-6 border-red-600 border-2 font-bold text-xl text-red-600'>
                    &times;
                    </span>
                    <span className='pl-2 text-red-600 font-bold'>{errorMessage}</span>
                </p>
            }
            <button 
                onClick={() => handleButtonClick()}
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