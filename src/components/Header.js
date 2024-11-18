import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();

  const user = useSelector(store => store.user) // wo redux store ko subscribe kr rhe , basically user ka photo laane ke liye hum redux store se photo laayenge

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }
  return (
    <div className="absolute w-screen px-8 py-3 bg-gradient-to-b from-black flex justify-between ">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      />

      {/* user && kiya hai bcz jab bhi user hoga i.e. login/signin hoga tabhi signout the option dikhega. yahn user hum redux store se laa rhe . so jab user me kuch hoga i.e. koi login kiya hoga tabhi ye button render hoga */}
      {user && (<div className="flex p-4 gap-4">
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
      </div>)}
    </div>
  );
};

export default Header;
