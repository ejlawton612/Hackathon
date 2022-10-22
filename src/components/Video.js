import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'

import apartmentVideo from '../assets/apartment.mp4'

const Video = () => {
    return (
        <div className='apartmentVid'>
            <video autoPlay loop muted id='video'>
                <source src={apartmentVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>Housing. Match.</h1>
                <p>The best housing website to find what you need</p>
                <div>
                    <Link to='/contact' className='btn btn-light'>Add Listings</Link>
                    <Link to='/pricing' className='btn'>Preferences</Link>
                </div>
            </div>
        </div>
    )
}

export default Video