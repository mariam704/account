import React from 'react'
import './Text.css'
import { UilPlayCircle } from '@iconscout/react-unicons'


const Text = () => {
  return (
    <>
    <div className='text-container'>
          <h2>better markting results with clean design </h2>
          <p>
            we have been working very hard to create the new version of our course 
            .it comes with a lot of new
            features.check it out now!
          </p>
          <div className="flex">
          <button className="btn">
          <span class=""> <UilPlayCircle size='2rem'  /></span>  </button>
             <button className=" active"  >  see our price </button>
          </div>
       
        </div>
    </>
  )
}

export default Text