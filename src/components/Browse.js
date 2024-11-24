import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {

  
  // using below custom hook, we are handling the API call & updating our redux store, keeping our browse component clean
  useNowPlayingMovies()

  return (
    <>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
    </>
  );
};

export default Browse;
