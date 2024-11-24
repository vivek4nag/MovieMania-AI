import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user); // wo redux store ko subscribe kr rhe , basically user ka photo laane ke liye hum redux store se photo laayenge

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/"); not needed here bcz onauthstate wala function is hanlding everything
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  // we will use an API given by firebase onAuthStateChanged- used to track the authentication state of a user in real-time.basically jab bhi koi login/signin krega ya logout/signout krega, usko track krne ke liye & then uske basis pe hum apne app ka behaviour krwayenge. yahn hum login/logout pe apna redux store ko update krenge
  // we are using useEffect with empty dependency array bcz we want to set up the onauth.... only once when the page loads
  // initially we made this in body component. but the bug was that just by changing URL anybody could access the browse page w/o authenticating. se we want authstate chage function somewhere which is there on every page/ component. header is present everywhere, so we moved this authstatechange function to header component. now when someone is loggedin then only he will see the browse page.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // signIn case
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    // below function will be called when our component unmounts. it is just a good prctice
    // When we call the onAuthStateChanged function, Firebase returns an unsubscribe function. This function is a cleanup mechanism that stops the listner & freees up resources
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black flex justify-between ">
      <img className="w-44" src={LOGO} alt="logo" />

      {/* user && kiya hai bcz jab bhi user hoga i.e. login/signin hoga tabhi signout the option dikhega. yahn user hum redux store se laa rhe . so jab user me kuch hoga i.e. koi login kiya hoga tabhi ye button render hoga */}
      {user && (
        <div className="flex p-4 gap-4">
          <img
            className="w-10 h-10 rounded-md border-1 border-gray-500"
            src={user?.photoURL}
            alt="user img"
          />

          <button
            onClick={handleSignout}
            className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 shadow-md transition-all duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
