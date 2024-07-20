import React, { useEffect } from 'react'
import { NETFLIX_LOGO as APP_LOGO, USER_IMG } from '../utils/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'; 
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  // console.log(user);

  const onSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign Out");
    }).catch((error) => {
      // An error happened.
    });
  }
  
  useEffect(() => {
    console.log("Body component called!");
    // onAuthStateChanged will handle login and browse page navigation
    // for the logged In user and the Logged out user 
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/auth.user
          const { uid, displayName, phoneNumber, photoURL, email } = user;
          // console.log(user);
          // Dispatch an action to save the user in store
          dispatch(addUser({
            uId : user.uid,
            displayName : user.displayName,
            phoneNumber : user.phoneNumber,
            photoURL : user.photoURL,
            email : user.email
          }));
          navigate("/browse");
        } else {
          // User is signed out
          dispatch(removeUser());
          
          navigate("/");
        }
      });

      // Unsubscribe when component will unmount
      return () => unSubscribe();
}, [dispatch]);


  return (
    <div className='flex justify-between z-10 absolute  px-10 py-5 w-full h-[200px] bg-gradient-to-b from-black'>
        <div className='w-32'>
            {APP_LOGO}
        </div>
        {user && 
          <div className='flex'>
            <div>
              <img 
                src={user.photoURL}
                alt="user_icon"
              />
            </div>
            <div 
              className='cursor-pointer text-white ml-2 font-medium pt-1'
              onClick={() => onSignOut()}
            >
              Sign Out
            </div>
          </div>
        }
    </div>
  )
}

export default Header;