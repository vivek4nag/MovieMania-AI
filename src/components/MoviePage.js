import React from 'react'
import MovieDetails from './MovieDetails'
import VideoBackGround from './VideoBackGround'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ImageBackGround from './ImageBackGround'

const MoviePage = () => {
    const {id} = useParams()
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  return (
   
    <div className='relative h-screen '>
      {/* <VideoBackGround  movieId={id}/> */}
      {trailerVideo? <VideoBackGround  movieId={id}/> : <ImageBackGround /> }
    
    <MovieDetails/>
    </div>
  )
}

export default MoviePage