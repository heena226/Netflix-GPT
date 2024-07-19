import React from 'react'
import { NETFLIX_LOGO as APP_LOGO, USER_IMG } from '../utils/constants'
import { signOut } from 'firebase/auth'; 
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {

  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  // console.log(user);

  const onSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
      console.log("Sign Out");
    }).catch((error) => {
      // An error happened.
    });
  }

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