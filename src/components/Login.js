import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      {/* <div>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg" alt="backgorundImage" />
      </div> */}
      <div
        className="h-screen bg-cover bg-center flex flex-col justify-center items-center"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7)), url('https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/IN-en-20241111-TRIFECTA-perspective_149877ab-fcbd-4e4f-a885-8d6174a1ee81_large.jpg')`,
        }}
      >
        <div className="flex flex-col  justify-center bg-black bg-opacity-80 p-10 rounded-lg shadow-lg text-white">
          <h1 className="font-bold text-4xl p-4 text-left">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          <form className="flex flex-col items-center justify-center">
            {!isSignInForm && (
              <input
                type="text"
                placeholder="Full Name"
                className="p-4 m-4 w-72 rounded bg-gray-800 bg-opacity-20 "
              />
            )}

            {!isSignInForm && (
              <input
                type="number"
                placeholder="Mobile Number" max={10}
                className="p-4 m-4 w-72 rounded bg-gray-800 bg-opacity-20 "
              />
            )}

            <input
              type="email"
              placeholder="Email Address"
              className="p-4 m-4 w-72 rounded bg-gray-800 bg-opacity-20 "
            />
            <input
              type="password"
              placeholder="Password"
              className="p-4 m-4 w-72 rounded bg-gray-800 bg-opacity-20"
            />
            {!isSignInForm && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="p-4 m-4 w-72 rounded bg-gray-800 bg-opacity-20"
              />
            )}
            <button
              className="p-2 m-2 w-72 rounded text-xl"
              style={{ backgroundColor: "#C11119" }}
            >
              {isSignInForm ? "Sign In" : "Sign Up"}
            </button>
          </form>
          <p className="py-6 px-4 ">
            <span className="cursor-pointer" onClick={toggleSignInForm}>
              {isSignInForm
                ? " New to Netflix? Sign Up Now"
                : "Already Registered? Sign In Now"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
