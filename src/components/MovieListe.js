import React from 'react'
import MovieCard from './MovieCard'

function MovieListe({movies}) {
  return (
    <div className='bigbox'>
      {movies.map((el)=><MovieCard movie={el}/>)}
        
    </div>
  )
}

export default MovieListe