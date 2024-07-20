import React, { useEffect } from 'react';
import Header from './Header';

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const BrowsePage = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  
  return (
    <div>
      <Header />
      {/* {
        - Main Container
          - Video Background
          - Video Title
        - Secondary Container
          - Movie List *N-rows
            - Cards * N
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  )
}

export default BrowsePage