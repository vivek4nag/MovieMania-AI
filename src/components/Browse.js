import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTrendingTVShows from "../hooks/useTrendingTVShows";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  // redux store se subscribe krke useselector hook se check kr rhe ki apna gpt wlaa variable true hai ya false. true hai to gpt search page dikhao, warna normal browse page
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  // using below custom hook, we are handling the API call & updating our redux store, keeping our browse component clean
  useNowPlayingMovies();
  usePopularMovies(); // this hook getting popular movies using custom hook, to be displayed in cards in secondary container
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingMovies();
  useTrendingTVShows();

  return (
    <>
      <Header />
      {showGptSearch ? (
        <>
        <GptSearchPage />
        
        </>
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          {/* <Footer /> */}
        </>
      )}
      {/* <Footer /> */}
    </>
  );
};

export default Browse;
