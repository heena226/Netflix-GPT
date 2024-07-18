import React from 'react'
import { NETFLIX_LOGO as APP_LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='z-10 absolute  px-10 py-10 w-full h-[200px] bg-gradient-to-b from-black'>
        <div className='w-32'>
            {APP_LOGO}
        </div>
    </div>
  )
}

export default Header;