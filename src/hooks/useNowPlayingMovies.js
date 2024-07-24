import { useDispatch, useSelector } from "react-redux";
import { addMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

// Custom Hook
const useNowPlayingMovies = () => {
    
  // Fetch data from TMDB API and update store 
  const dispatch = useDispatch();
  
  const nowPlaying = useSelector((store) => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1", 
        API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);

    dispatch(addMovies(json.results)
    );
  }

  useEffect(() => {
    // Calling the function to get  movie list
    !nowPlaying && getNowPlayingMovies();
  }, []);
}

export default useNowPlayingMovies;