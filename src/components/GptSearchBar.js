import React from "react";
import lang from "../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {

  // by use useselector we are getting the laguage from store 
  const langkey = useSelector(store => store.config.lang)
  // console.log(langkey);
  

  return (
    <div className="flex justify-center pt-[5%] pb-1 text-white">
      <div className=" md:w-2/3  p-8">
        <h1 className="text-4xl font-bold text-center mb-6">
          Find Your Perfect Movie 🎥
        </h1>

        <form className="flex flex-col md:flex-row justify-center items-center gap-4">
          <input
            type="text"
            placeholder={lang[langkey].gptSearchPlaceholder}
            className="w-full md:w-2/3 p-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
          />
          <button className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-red-500 to-pink-600 rounded-lg hover:from-red-600 hover:to-pink-700 transition duration-500">
            {" "}
            {lang[langkey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearchBar;

//langkey humare language constants me nhi hai, woha simply hindi, en likha hai. but jab langkey humara aarha to use [] me enclose krke likhenge taaki apna object access kr paaye
