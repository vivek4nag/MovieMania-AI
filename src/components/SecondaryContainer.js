import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'
import Loading from './Loading'
import Footer from './Footer'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  if (!movies.nowPlayingMovies || movies.nowPlayingMovies.length === 0) {
    return <Loading/>;
  }

  return movies.nowPlayingMovies && (
    <>
    <div className=" bg-black md:pt-[44.2rem] pt-[40rem]">
      <div className='-mt-32 relative z-50 pb-8'>
      <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
      <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies} />
      <MovieList title = {"Trending"} movies = {movies.trendingMovies} />
      <MovieList title = {"Popular"} movies = {movies.popularMovies} />
      <MovieList title = {"Upcoming"} movies = {movies.upcomingMovies} />
      {/* <MovieList title = {"Trending TV Shows"} movies = {movies.trendingTVShows} /> */}
      </div>

    </div>
    <Footer/>
    </>
  )
}

export default SecondaryContainer