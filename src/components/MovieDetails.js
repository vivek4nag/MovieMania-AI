import React from 'react'
import useMovieDetails from '../hooks/useMovieDetails'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const MovieDetails = () => {
    const {id} = useParams()

    useMovieDetails(id)
    const movieDetails = useSelector((store) => store?.movies?.movieDetails)

    if(!movieDetails) return 
    const {title, overview, budget, genres, popularity, release_date, revenue, vote_count, vote_average } = movieDetails

  return (
    <div>
        <h1>About this Movie</h1>
        <div>
            <h2>name: {title}</h2>
        </div>
    </div>
  )
}

export default MovieDetails