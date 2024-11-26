import React from "react";
import { POSTER_IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="w-48  flex-shrink-0 rounded-lg overflow-hidden shadow-lg transform hover:scale-95 transition-transform duration-400 cursor-pointer">
      <img src={POSTER_IMG_CDN_URL + posterPath} alt="poster card" className="w-full h-72 object-cover" />
    </div>
  );
};

export default MovieCard;
