import React from "react";
import { POSTER_IMG_CDN_URL, EMPTY_MOVIE_POSTER } from "../utils/constants";

const MovieCard = ({ posterPath, movieName }) => {
  return (
    <div className=" w-36 h-52 md:w-48 md:h-72 flex-shrink-0 rounded-lg overflow-hidden shadow-lg transform hover:scale-95 transition-transform duration-400 cursor-pointer">
      <img src={posterPath? POSTER_IMG_CDN_URL + posterPath : EMPTY_MOVIE_POSTER} alt="poster card" className="w-full h-72 object-cover relative" />
      {movieName && (
        <div className="absolute bottom-0 w-full bg-black bg-opacity-80 text-white text-center py-3 text-lg rounded-md">

          <h4 className="text-sm font-semibold">{movieName}</h4>
        </div>
      )}
    </div>
  );
};

export default MovieCard;
