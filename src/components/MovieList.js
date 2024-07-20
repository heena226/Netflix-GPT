import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className='px-10'>        
        <h1 className='font-bold py-4'>
            {title}
        </h1>
        {movies && 
            <div 
                className='w-[100%] overflow-x-auto whitespace-nowrap scrollbar-hidden' 
                style={{ 
                    scrollbarWidth: 'none', /* For Firefox */
                    msOverflowStyle: 'none' /* For Internet Explorer and Edge */
                }}
            >
                <div className='flex'>
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        }
    </div>
  )
}

export default MovieList