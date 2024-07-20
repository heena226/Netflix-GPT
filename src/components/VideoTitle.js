import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-10 absolute text-white bg-gradient-to-r from-black'>
        <div className='text-5xl font-bold'>
            {title}
        </div>
        <div className='font-medium w-1/2 mt-3'>
            {overview}
        </div>
        <div className='mt-4'>
            <button className='border border-black bg-white rounded-lg text-black px-6 py-2 text-lg font-bold hover:opacity-70'>
                <FontAwesomeIcon className='mr-1' icon={faPlay} />
                Play
            </button>
            <button className='border border-black bg-gray-500 opacity-90 rounded-lg text-white px-6 py-2 text-lg font-bold ml-4 hover:opacity-70'>
                <FontAwesomeIcon className='mr-1' icon={faInfoCircle} />
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle