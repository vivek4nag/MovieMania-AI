import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResults } from "../utils/gptSlice"

const GptSearchBar = () => {
  const dispatch = useDispatch()
  // by use useselector we are getting the laguage from store
  const langkey = useSelector((store) => store.config.lang);
  // console.log(langkey);

  // searchBar se text uthane ke liye useref use kr rhe bss
  const searchText = useRef(null);

  const apiKey = process.env.REACT_APP_GEMINI_API_KEY;

  const searchMovieTMDB = async (movie) => {
    try {
      const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS)

      const json = await data.json();
      return json.results;

    } catch (error) {
      console.log(error);

    }
  }

  //search krne pe GPT se reccomendation laane ke liye function
  const handleGPTSearchClick = async () => {
    //API call lgakr movie nikal rhe
    // console.log(searchText?.current?.value);
    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = "Act as a movie & TV series recommendation system & suggest the same for the query:" + searchText?.current?.value + ". Only give me names of 8 movies or TV series, each item comma separated";

      const result = await model.generateContent(prompt);
      console.log(result.response.text());

      // result jo text aayga usko comma ke basis pe split krke array me dal rhe & then for each item in array we will call TMDB api to get movie
      const gptMovies = result.response.text().split(",")
      console.log(gptMovies);

      //calling movie via api using map will return an array of promise. & then we have to resolve the promise to get the mvoies. we are resolving all eksath using promise.all method
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie))

      const tmdbResults = await Promise.all(promiseArray)
      console.log(tmdbResults);
      // hum ek object pass kr rhe bcz bss aise hi mann hua ki tmdb api se aaya hua array ke alawa hum gpt jo movies ka naam de rha tha wo bhi store krenge hum , so we are dispatching both the things in form of array
      dispatch(addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults }))





    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center pt-[5%] pb-1 text-white">
      <div className=" md:w-2/3  p-8">
        <h1 className="text-4xl font-bold text-center mb-4">
          Find Your Perfect Movie 🎥
        </h1>
        <p className="text-gray-400 text-sm text-center pb-3">
          Looking for the perfect movie?
          <span className="text-gray-300 font-semibold"> Our AI suggests hidden gems and similar movies </span>
          based on your search keywords. Try exploring with new keywords!
        </p>

        <form
          className="flex flex-col md:flex-row justify-center items-center gap-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            placeholder={lang[langkey].gptSearchPlaceholder}
            className="w-full md:w-2/3 p-4 rounded-lg bg-gray-700 text-gray-200 placeholder-gray-400 shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 transition duration-300"
          />
          <button
            className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-red-500 to-pink-600 rounded-lg hover:from-red-600 hover:to-pink-700 transition duration-500"
            onClick={handleGPTSearchClick}
          >
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
