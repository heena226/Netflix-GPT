import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {

    const dispatch = useDispatch();
    const moviesTrailer = useSelector((store) => store.movies.trailerVideo);

    // Fetch trailer video and update the store with trailer video data
    const getMovieDetails = async () => {
        // const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '?language=en-US', 
        //     API_OPTIONS);
        const data = await fetch("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            API_OPTIONS);
        const json = await data.json();
        const officialTrailer = json.results.filter((video) => video.name === "Official Trailer");
        
        // If no video is found with "Official Trailer" name
        dispatch(addTrailerVideo(officialTrailer[0] || json.results[0]));
    }

    useEffect(() => {
        !moviesTrailer && getMovieDetails();
    }, [])
}

export default useMovieTrailer;