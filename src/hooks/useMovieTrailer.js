import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

// using this custom hook we are basically fetching the trailer to be played in the background & then also dispatch the trailer to redux store. we are storing in redux store so that we can dynamicaly get the keyf or the trailer & then embed that with youtube link in iframe

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

  // fetch trailer using the video wala API call , it will need movie ID
  const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`;

  const getMovieVideos = async () => {
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log(json.results);

    //filtering trailer wla video from the array of many types of videos
    const filterTrailerArray = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterTrailerArray.length !== 0 ? filterTrailerArray[0] : json.results[0]; //bss fallback ke liye ki agr trailer naa mile to jo bhi pehla video ho utha lo
    console.log(trailer);

    // either we can set a state to dynamically update the trailer key for the iframe youtube video src, or can store our trailer in redux store & get key whenever reqd from there, we are doing latter here
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

}

export default useMovieTrailer