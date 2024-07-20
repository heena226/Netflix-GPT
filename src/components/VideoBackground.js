import React from 'react'
import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
    
    const trailer = useSelector((store) => store?.movies?.trailerVideo);

    useMovieTrailer(movieId);

  return (
    <div className='w-[100]'>
        {trailer ? (
            <iframe 
                className='w-[100%] aspect-video'
                src={`https://www.youtube.com/embed/${trailer.key}?modestbranding=1&rel=0&showinfo=0&autoplay=1&mute=1`}
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen
            ></iframe>
        ) : (
        <p>Loading Trailer</p>

        )}
    </div>
  )
}

export default VideoBackground