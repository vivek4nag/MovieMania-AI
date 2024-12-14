import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";

// below custom hoook is made for fetching data from TMDB API & updating our redx store in the movie slices. all the below code was first written inside Browse Component but that was making our code  ugly & messy. hence we moved this logic to custom hook & will only cater to render logic in our browse component

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTopRatedMovies(json.results))
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
}

export default useTopRatedMovies;