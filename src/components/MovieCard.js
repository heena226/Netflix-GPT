import React from 'react'
import { NETFLIX_SIGN, TDMB_IMAGE_URL } from '../utils/constants';

const MovieCard = ({movie}) => {
    const imageURL = TDMB_IMAGE_URL(movie.poster_path);

    if(imageURL === "https://image.tmdb.org/t/p/w500/null") return null;

  return (
    <div className='flex-shrink-0 w-[100px] mb-2 pr-2
                    md:w-[200px] md:mb-10'>
        <div>
            <div className='relative group cursor-pointer'>
                <img
                    className='w-[100%]'
                    src={imageURL}
                    alt="Movie Poster"
                />
                <span className='absolute top-2 left-2 w-4'>
                    {<img 
                        src={NETFLIX_SIGN}
                        className='w-[70%] md:w-[100%]'
                        alt="Netflix"
                    />}
                </span>
                <span className="absolute top-2 right-2 px-5 py-1 font-medium text-white bg-black bg-opacity-75 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                    Ratings - {movie.vote_average.toFixed(1)}
                </span>

            </div>
        </div>
    </div>
  )
}

export default MovieCard