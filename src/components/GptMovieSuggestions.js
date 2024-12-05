import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'
import Footer from './Footer'

const GptMovieSuggestions = () => {

  // subscribing to store to get the gpt related data from redux store
  const gpt = useSelector(store => store.gpt)
  const { movieResults, movieNames } = gpt

  if (!movieNames) return null

  return (
    <>
      <div className='bg-gradient-to-r from-gray-900 via-black to-gray-900 text-white'>

        <div className='flex py-6 px-4 flex-col'>

          {movieNames.map((movieName, index) => <MovieList key={movieName} title={movieName} movies={movieResults[index]} />)}

        </div>
        <div className="mt-12  text-gray-200 p-4 text-center text-sm rounded-md">
          ⚠️ <span className="font-semibold">Disclaimer:</span> AI might sometimes suggest unrelated movies or inaccuracies.
          Please use your judgement & verify the details. Enjoy your movie journey!
        </div>


      </div>
      <Footer />
    </>
  )
}

export default GptMovieSuggestions