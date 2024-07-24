import React, { useRef } from 'react'
import { lang } from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addMovieNames, addMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {

    const searchQuery = useRef(null);

    const dispatch = useDispatch();

    const handleGptSearchButton = async () => {
        
        console.log(searchQuery.current.value);

        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query" + 
                        searchQuery.current.value + 
                        "only give the names of 5 movies, comma separated like the example result given ahead." +
                        "Example result - Gadar, Sholey, Don, Drisham, 3 Idiots";
        
        // Make the API call to get the movie results
        // Not actually using the APi as its Chargeable but kept the code for the reference
        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        // });
        // console.log(gptResults.choices?.[0]?.message?.content);

        let gptResults = "Andaz Apna Apna, 3 Idiots, Chupke Chupke, Jaane Bhi Do Yaara, Padosan";
        gptResults = gptResults.split(',');
        // gptResults = ["Andaz Apna Apna", " 3 Idiots", " Chupke Chupke", " Jaane Bhi Do Yaara", " Padosan"]

        // Iterating array to get single movie name
        // Result will be the array of Promises and it will not wait to all the Promises to come and will execute immediately
        // Sp we will have to wait for all the Promises to get completed
        const promiseArray = gptResults.map(movie => {
            return searchedMovieAPI(movie);
        });

        const tmdbResults = await Promise.all(promiseArray);
        
        // dispatch(addMovieResults(tmdbResults));
        // dispatch(addMovieNames(gptResults));

        // Filter out any empty results
        const filteredResults = tmdbResults.filter(result => result.length > 0);
        const filteredMovies = gptResults.filter((movie, index) => tmdbResults[index].length > 0);

        dispatch(addMovieResults(filteredResults));
        dispatch(addMovieNames(filteredMovies));
    }

    const searchedMovieAPI = async (movie) => {
        // Fetch data of the every single movie from TMDB using the movie name        
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query=' + movie + '&include_adult=false&language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        console.log(json.results);
        return json.results;
    }

    let selectedLang = useSelector((store) => store.gpt.langSelected);
    
  return (
    <div>
        <div className='absolute max-h-full h-full w-full'>
            <img 
                src='https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/839d49d1-c05f-4069-a637-8d0433328538/CA-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_7810a47e-e741-49c0-965a-15801760c571_small.jpg'
                alt='background-image'
                className='h-full w-full'
            />
        </div>
        <form 
            className='absolute top-[15%] px-8 py-12 bg-black bg-opacity-90 w-[90%] mx-[5%]'
            onSubmit={(e) => e.preventDefault()}             
            onClick={() => handleGptSearchButton()}     
        >
            <input
                type='text'
                ref={searchQuery}
                placeholder={lang[selectedLang.lang].placeholder}
                className='px-4 py-2 w-[75%] bg-white ml-[5%] border border-white' 
            />
            <button              
                className='px-4 py-2 w-[15%] bg-black mr-[5%] text-white border border-white hover:bg-gray-900 cursor-pointer'
            >
                {lang[selectedLang.lang].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar