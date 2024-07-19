import React, { useEffect } from 'react';
import Login from './Login';
import BrowsePage from './BrowsePage';
import { createBrowserRouter, RouterProvider, useNavigate } from 'react-router-dom';

import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {

    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />
        },
        {
            path: "/browse",
            element: <BrowsePage />
        }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const { uid, displayName, phoneNumber, photoURL, email } = user;
            //   console.log(user);
              // Dispatch an action to save the user in store
              dispatch(addUser({
                uId : user.uid,
                displayName : user.displayName,
                phoneNumber : user.phoneNumber,
                photoURL : user.photoURL,
                email : user.email
              }));
            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });
    }, [dispatch]);

    
  return (
    <div>
        <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body