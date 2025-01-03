import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
import background from "../assets/background.jpg";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  //navigate ka functionality now given to navbar, so woha se ho jayga navigate hence saara navigate related stuff removed
  const navigate = useNavigate(); // this navigate hooks comes from react-router & using this hook we will navigate the user to the browse page once he signs in as we have done in onAuthStatechange ....

  const dispatch = useDispatch();
  // to get the value from form, either we can create a state variable to get form data . Or we can use the useRef hook. By using this hook we will get the reference value of the form input data
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const confirmPassword = useRef(null);
  const confirmPasswordValue = !isSignInForm
    ? confirmPassword.current?.value || ""
    : "";

  const [errorMessage, setErrorMessage] = useState(null);

  const handleButtonClick = () => {
    // form validation
    /*
    console.log(email); // whole input as an object will be printed
    console.log(email.current.value); // the value inside input box
    console.log(password);
    */
    // console.log(password.current.value); // the value inside pasword box

    const msg = checkValidData(
      email.current?.value,
      password.current?.value,
      fullName.current?.value,
      confirmPasswordValue,
      isSignInForm
    );
    // console.log(msg);
    setErrorMessage(msg);

    // agr koi error msg aara to simply return kar jao warna aage bdho & signin/signup karo
    if (msg) return;

    // now comes signin/signup logic
    if (!isSignInForm) {
      //signup logic
      createUserWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            //we are updating the profile with current user
            displayName: fullName.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse"); // signup ke baad we will navigate him to browse page - but no longer needed since now it is handled by inauthchanged in header component
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });

          // console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // signin logic
      signInWithEmailAndPassword(
        auth,
        email.current?.value,
        password.current?.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);

          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
          navigate("/browse"); // login ke baad we will navigate him to browse page , again removed bcz navigate to browse now handled by navbar component
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />

      <div
        className="h-screen bg-cover bg-center object-cover flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url(${background})`,
        }}
      >
        <div className="flex flex-col justify-center bg-black bg-opacity-80 md:p-10 rounded-lg shadow-lg text-white w-full max-w-fit md:max-w-96">
          <h1 className="font-bold text-2xl px-[2rem] py-2 md:text-4xl md:p-4 text-left">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col items-center justify-center"
          >
            {!isSignInForm && (
              <input
                ref={fullName}
                type="text"
                placeholder="Full Name"
                className="md:p-4 p-2 m-2 md:m-4 md:w-72 w-[80%] rounded bg-gray-800 bg-opacity-20 "
              />
            )}

            {/* {!isSignInForm && (
              <input
                type="number"
                placeholder="Mobile Number"
                max={10}
                className="md:p-4 p-2 m-2 md:m-4 md:w-72 w-[80%] rounded bg-gray-800 bg-opacity-20 "
              />
            )} */}

            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="md:p-4 p-2 m-2 md:m-4 md:w-72 w-[80%] rounded bg-gray-800 bg-opacity-20 "
            />
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="md:p-4 p-2 m-2 md:m-4 md:w-72 w-[80%] rounded bg-gray-800 bg-opacity-20"
            />
            {!isSignInForm && (
              <input
                ref={confirmPassword}
                type="password"
                placeholder="Confirm Password"
                className="md:p-4 p-2 m-2 md:m-4 md:w-72 w-[80%] rounded bg-gray-800 bg-opacity-20"
              />
            )}

            {errorMessage && (
            <p className="text-red-700 font-bold text-sm py-2 text-left">
              {errorMessage}
            </p>
            )}
            {isSignInForm && !errorMessage && (
              <>
              <p>Mock login</p>
              <p>id : netflix123@vivek.com</p>
              <p className="pb-4">pw: Vivek@1234</p>
              </>
            )

            }
            <button
              className="p-2 m-2 md:w-72 w-[40%] rounded text-sm md:text-xl"
              style={{ backgroundColor: "#C11119" }}
              onClick={handleButtonClick}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p className="py-6 px-4 ">
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm
                ? " New to MovieMania? Sign Up Now"
                : "Already Registered? Sign In Now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

// 'https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg'
