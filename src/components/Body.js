import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import Error from "./Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
  const dispatch = useDispatch(); // redux dispatch hook to dispatch action

  // creating router
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/error",
      element: <Error />,
    },
  ]);

  // we will use an API given by firebase onAuthStateChanged- used to track the authentication state of a user in real-time.basically jab bhi koi login/signin krega ya logout/signout krega, usko track krne ke liye & then uske basis pe hum apne app ka behaviour krwayenge. yahn hum login/logout pe apna redux store ko update krenge
  // we are using useEffect with empty dependency array bcz we want to set up the onauth.... only once when the page loads
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // signIn case
        const { uid, email, displayName, photoURL } = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );

      } else {
        // User is signed out
        dispatch(removeUser());
      }
    });
  }, []);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
