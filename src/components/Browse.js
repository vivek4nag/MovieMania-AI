import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTVShows from "../hooks/useTrendingTVShows";
import Footer from "./Footer";

const Browse = () => {

  
  // using below custom hook, we are handling the API call & updating our redux store, keeping our browse component clean
  useNowPlayingMovies();
  usePopularMovies() // this hook getting popular movies using custom hook, to be displayed in cards in secondary container
  useTopRatedMovies()
  useUpcomingMovies()
  useTrendingMovies()
  useTrendingTVShows()

  return (
    <>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      <Footer/>
    </>
  );
};

export default Browse;
