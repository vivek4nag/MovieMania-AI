import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";

// below custom hoook is made for fetching data from TMDB API & updating our redx store in the movie slices. all the below code was first written inside Browse Component but that was making our code  ugly & messy. hence we moved this logic to custom hook & will only cater to render logic in our browse component

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector(
      (store) => store.movies.popularMovies
    );

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json.results);
    dispatch(addPopularMovies(json.results))
  };

  useEffect(() => {
    if (!popularMovies) {
      
      getPopularMovies();
    }
  }, []);
}

export default usePopularMovies;