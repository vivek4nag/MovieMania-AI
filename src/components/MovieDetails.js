import React from "react";
import useMovieDetails from "../hooks/useMovieDetails";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { POSTER_IMG_CDN_URL, EMPTY_MOVIE_POSTER } from "../utils/constants";
import Footer from "./Footer";
import Loading from "./Loading";

const MovieDetails = () => {
  const { id } = useParams();

  useMovieDetails(id);
  const movieDetails = useSelector((store) => store?.movies?.movieDetails);

  if (!movieDetails) return <Loading />;

  const {
    title,
    overview,
    budget,
    runtime,
    genres,
    popularity,
    release_date,
    revenue,
    vote_count,
    vote_average,
    poster_path,
  } = movieDetails;

  return (
    <>
      <div className="relative text-white flex justify-center items-center md:px-16 gap-8 md:py-16 mx-auto flex-col md:flex-row min-h-screen bg-black bg-opacity-60 overflow-y-hidden ">
        <Link to={`/browse/`}>
          <button className="absolute top-6 left-8 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-700 hover:scale-105 transition-transform duration-300 rounded-full">
            ⬅ Back
          </button>
        </Link>

        <div className="w-[250px] md:w-[350px] lg:w-[550px] h-auto object-cover relative rounded-lg mt-12 sm:mt-0 mb-8 md:mb-0 md:mr-8 z-30">
          <img
            src={
              poster_path
                ? POSTER_IMG_CDN_URL + poster_path
                : EMPTY_MOVIE_POSTER
            }
            alt="poster card"
            className=" rounded-lg shadow-md hover:scale-105 transition-transform duration-300 ease-in cursor-pointer"
          />
        </div>

        <div className=" relative px-6 bg-black lg:bg-opacity-80 md:rounded-2xl shadow-lg flex flex-col z-20 max-w-full w-full md:max-w-[1000px]">
          <div className="text-white pt-8">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              {title || "Title Not Available"}
            </h1>

            <p className="lg:text-lg md:text-sm text-gray-400 mb-4 ">
              {overview}
            </p>
          </div>

          <div className="flex flex-wrap gap-16 lg:text-lg md:text-sm text-gray-200 md:hidden  lg:inline-flex">
            <div className="flex flex-col">
              <span className="font-bold text-white">Runtime: </span>
              <span>
                {runtime === 0 ? "to be updated" : `${runtime} minutes`}{" "}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-gray-100">Budget:</span>
              <span>
                {budget === 0
                  ? "to be updated"
                  : `$ ${Math.floor(budget / 1000000)} million`}{" "}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-gray-100">Revenue:</span>
              <span>
                {revenue === 0
                  ? "to be updated"
                  : `$ ${Math.floor(revenue / 1000000)} million`}{" "}
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-gray-100">Release Date:</span>
              <span>{release_date}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-16 text-lg text-gray-200 pt-10  md:hidden lg:inline-flex">
            <div className="flex flex-col">
              <span className="font-bold text-gray-100">Popularity:</span>
              <span>{Math.floor(popularity / 100)} 🌟</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-gray-100">Vote Average:</span>
              <span>{vote_average === 0 ? "to be updated" : vote_average}</span>
            </div>

            <div className="flex flex-col">
              <span className="font-bold text-gray-100">Vote Count:</span>
              <span>{vote_count === 0 ? "to be updated" : vote_average}</span>
            </div>
          </div>

          <div className=" py-10 text-white">
            <h2 className="lg:text-xl md:text-sm font-semibold text-white mb-2">
              Genres:
            </h2>
            {genres && genres.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {genres.map((genre, idx) => (
                  <li
                    key={idx}
                    className="bg-gray-500 px-3 py-1 rounded-full lg:text-lg md:text-sm text-white shadow-md hover:bg-gray-800 transition-all"
                  >
                    {genre.name}
                  </li>
                ))}
              </ul>
            ) : (
              <p>Genres Not Available</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MovieDetails;
