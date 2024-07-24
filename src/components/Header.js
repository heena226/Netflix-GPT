import React, { useEffect, useRef } from 'react'
import { NETFLIX_LOGO as APP_LOGO, availableLanguages, USER_IMG } from '../utils/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'; 
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { languageSelected, toggleGptSearchView } from '../utils/gptSlice';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  // console.log(user);
  
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const availLanguages = availableLanguages;

  const onSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("Sign Out");
    }).catch((error) => {
      // An error happened.
    });
  };

  const handleGptSearchClick = () => {
    // Toggle GPT Search button
    dispatch(toggleGptSearchView());
  }

  const handleLanguageSelectedChange = (e) => {
    dispatch(languageSelected({
      lang: e.target.value
    }));
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
    <div className='flex justify-between z-10 absolute px-10 py-5 w-full h-[120px] bg-gradient-to-b from-black'>
        <div className='w-32'>
            {APP_LOGO}
        </div>
        {user && 
          <div className='flex'>
            <div>
              <button 
                className='px-4 py-1 bg-purple-800 text-white font-medium mr-4'
                onClick={handleGptSearchClick}
              >
                GPT Search
              </button>
            </div>
            {showGptSearch && (
              <div>
                <select 
                  className='px-4 py-1 bg-purple-800 text-white font-medium mr-4'
                  onChange={(e) => handleLanguageSelectedChange(e)}
                >
                  <option className='text-gray-400' disabled>Select Language</option>
                  {availLanguages.map((lang) => (
                    <option key={lang.id} value={lang.identifier}>{lang.name}</option>
                  ))}
                </select>
              </div>
            )}
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