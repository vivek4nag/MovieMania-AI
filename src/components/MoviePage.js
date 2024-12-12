import React from 'react'
import MovieTrailer from './MovieTrailer'
import MovieDetails from './MovieDetails'
import Footer from './Footer'

const MoviePage = () => {
  return (
    <>
    <div>
        <MovieTrailer/>
    </div>
    <div>
        <MovieDetails/>
    </div>
    <Footer/>
    </>
  )
}

export default MoviePage