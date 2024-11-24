import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";

// below custom hoook is made for fetching data from TMDB API & updating our redx store in the movie slices. all the below code was first written inside Browse Component but that was making our code  ugly & messy. hence we moved this logic to custom hook & will only cater to render logic in our browse component

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addNowPlayingMovies(json.results))
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;