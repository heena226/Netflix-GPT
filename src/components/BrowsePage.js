import React, { useEffect } from 'react';
import Header from './Header';

import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const BrowsePage = () => {

  const nowPlayingMovies = useNowPlayingMovies();
  
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