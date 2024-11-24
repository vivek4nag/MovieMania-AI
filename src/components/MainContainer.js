import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackGround from './VideoBackGround'
import { useSelector } from "react-redux";

const MainContainer = () => {

  const movies = useSelector(store => store.movies?.nowPlayingMovies)
  if(movies === null) return; // if even before updating redux store, if we try to get movies it will be null, hence we will return. this is called early return

  // yahn ek random function likha hai so that random koi bhi movie ka video play ho jaaaye. random ka range 0-20
  const randomIdx = Math.floor(Math.random()*18)
  const mainMovie = movies[randomIdx]
  console.log(mainMovie);

  const {original_title, overview, id} = mainMovie
  

  return (
    <div>
      <VideoTitle title = {original_title} overview = {overview}/>
      <VideoBackGround movieId={id}/>

    </div>
  )
}

export default MainContainer