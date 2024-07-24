import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {

    const moviesData = useSelector((store) => store?.movies?.nowPlayingMovies);

    // Early return
    if(!moviesData) return;
    
     // As Video will be played for the one movie only
    const mainMovie = moviesData[0];
    // console.log(mainMovie);

    const {id, original_title, overview} = mainMovie;
  return (
    <div className='pt-[25%] md:pt-0'>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer