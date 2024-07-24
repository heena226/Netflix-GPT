import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-[100%] aspect-video pt-[15%] px-10 absolute text-white gradient-corners-to-center'>
        <div className='text-sm font-bold md:text-5xl'>
            {title}
        </div>
        <div className='text-xs font-medium w-full mt-3 md:text-base md:w-1/2'>
            {overview}
        </div>
        <div className='mt-4'>
            <button className='border border-black bg-white rounded-lg text-black px-6 py-2 text-xs font-bold hover:opacity-70
                                md:text-lg'>
                <FontAwesomeIcon className='mr-1' icon={faPlay} />
                Play
            </button>
            <button className='border border-black bg-gray-500 opacity-90 rounded-lg text-white px-6 py-2 text-xs font-bold ml-4 hover:opacity-70
                                 md:text-lg'>
                <FontAwesomeIcon className='mr-1' icon={faInfoCircle} />
                More Info
            </button>
        </div>
    </div>
  )
}

export default VideoTitle