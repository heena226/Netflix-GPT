import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptSearchSuggestions = () => {
    
    const gpt = useSelector((store) => store.gpt);
    const movieNames = gpt.movieNames;
    console.log(movieNames);

    const movieResults = gpt.movieResults;
    console.log(movieResults);

  return (
    <div>
        {(movieNames!== null && movieResults!== null) && 
            <div 
                className='absolute top-[calc(15%+122px)] left-[5%] m-auto w-[90%] bg-black bg-opacity-85 z-100 overflow-y-auto max-h-[68%]'
                style={{ 
                    scrollbarWidth: 'none', /* For Firefox */
                    msOverflowStyle: 'none' /* For Internet Explorer and Edge */
                }}
            >
                <div className='text-white'>
                    {movieNames.map((movieName, index) => (
                        <MovieList 
                            key={movieName}
                            title={movieName} 
                            movies={movieResults[index]}
                        />
                    ))}
                </div>
            </div>
        }
    </div>
  )
}

export default GptSearchSuggestions