import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const moviesNowPlaying = useSelector((store) => store.movies.nowPlayingMovies);
    // console.log(moviesNowPlaying);

    const moviesPopular = useSelector((store) => store.movies.popularMovies);
    // console.log(moviesPopular);

    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies);

    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);

  return (
    <div className='w-[100%] mt-0 text-white z-10 absolute
                    md:-mt-64'>
        <MovieList title="Now Playing" movies={moviesNowPlaying} />
        <MovieList title="Popular" movies={moviesPopular} />
        <MovieList title="Top Rated" movies={topRatedMovies} />
        <MovieList title="Upcoming" movies={upcomingMovies} />        
    </div>
  )
}

export default SecondaryContainer;