import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  if (!movies.nowPlayingMovies || movies.nowPlayingMovies.length === 0) {
    return <div>Loading...</div>;
  }

  return movies.nowPlayingMovies && (
    <div className=" bg-black">
      <div className='-mt-32 relative z-10'>
      <MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} />
      <MovieList title = {"Top Rated"} movies = {movies.topRatedMovies} />
      <MovieList title = {"Trending"} movies = {movies.trendingMovies} />
      <MovieList title = {"Popular"} movies = {movies.popularMovies} />
      <MovieList title = {"Upcoming"} movies = {movies.upcomingMovies} />
      <MovieList title = {"Trending TV Shows"} movies = {movies.trendingTVShows} />
      </div>

    </div>
  )
}

export default SecondaryContainer