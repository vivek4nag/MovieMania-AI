import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
// import { LOGO } from "../utils/constants";
import LOGO from "../assets/LOGO1.png";
import { toggleGptSearchView } from "../utils/gptSlice";
// import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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

  const handleGPTSearchClick = () => {
    // here we want to toggle GPT search- click krne pr GPT search wala page dikhayga, warna normal browse & other stuff
    // we can use state variable to toggle, but jab redux hai to use kro bc
    // we are toggling showGptSearch by toggling an action
    dispatch(toggleGptSearchView());
  };

  // gpt wala button ke andar ka text toggle krne ke liye ye variable laa rhe redux store se useSelector hook use krke
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleLanguageChange = (e) => {
    // console.log(e.target.value)
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute top-0 left-0 w-[100%] px-8 py-4 bg-gradient-to-b from-black flex items-center z-[999] justify-between ">
      
      <img className="w-48 mx-auto sm:mx-0 sm:w-44 cursor-pointer" src={LOGO} alt="logo" />
      

      {/* ye niche is hamburger menu */}
      {user && (
        <button className="sm:hidden flex flex-col items-center justify-center w-10 h-10 text-white"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={`block w-6 h-0.5 bg-white transform transition duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-5 h-0.5 bg-white mt-1.5 transition transform-300 ${menuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-white mt-1.5 transform transition duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>
      )}
      

      {/* user && kiya hai bcz jab bhi user hoga i.e. login/signin hoga tabhi signout the option dikhega. yahn user hum redux store se laa rhe . so jab user me kuch hoga i.e. koi login kiya hoga tabhi ye button render hoga */}
      {user && (

        <div className="hidden sm:flex p-4 gap-4 items-center">

          {/* {showGptSearch && (
            <select className="px-3 py-1  bg-slate-100 rounded-md" onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )} */}

          <button
            onClick={handleGPTSearchClick}
            className="px-2 py-2 text-white font-bold rounded-lg bg-green-600 shadow-md transition-all duration-300 hover:bg-green-900"
          >
            {showGptSearch ? "GO back" : "AI Movie Search"}
          </button>

          <button
            onClick={handleSignout}
            className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 shadow-md transition-all duration-300"
          >
            Sign Out
          </button>

          <img
            className="w-10 h-10 rounded-md border-1 border-gray-500"
            src={user?.photoURL}
            alt="user img"
          />
        </div>
      )}

      {/* chote screen ke liye drop down menu */}
      { user && menuOpen &&(
        <div className="absolute top-16 left-0 w-full bg-black bg-opacity-95 text-white shadow-lg flex flex-col items-center py-4 gap-4 sm:hidden rounded-lg">

          <button onClick={handleGPTSearchClick}
          className="px-3 py-2 text-white font-bold rounded-lg bg-green-600 shadow-md transition-all duration-300 hover:bg-green-900">
            {showGptSearch? "GO Back": "AI Movie Search"}
          </button>

          <button
            onClick={handleSignout}
            className="px-4 py-2 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 shadow-md transition-all duration-300"
          >
            Sign Out
          </button>

          <img
            className="w-10 h-10 rounded-md border-1 border-gray-500"
            src={user?.photoURL}
            alt="user img"
          />




        </div>
      )}
    </div>
  );
};

export default Header;
