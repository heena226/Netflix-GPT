import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTopRatedMovies } from "../utils/moviesSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const topRated = useSelector((store) => store.movies.topRatedMovies);

    const getTopRatedMovies = async () => {
        const data = await fetch(
            'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
            API_OPTIONS
        );
        const json = await data.json();
        // console.log(json);

        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        !topRated && getTopRatedMovies();
    }, []);

}

export default useTopRatedMovies;