import React from 'react'
import './MatchingStyles.css'

import {Link} from 'react-router-dom'

const Matching = () => {
    return (
        <div className='matching'>
            <div className='left'>
                <h1>Add roommates</h1>
                <p>Add your roommates to see matches that fit everyone's criteria.</p>
                <Link to='/contact'><button className='btn'>Add roommate</button></Link>
            </div>
            <div className='right'>
                <h1> Current Matches</h1>
{                   <p> hi</p>
/*                 <div className='img-container'>
                    <div className='image-stack top'>
                        <img src={Moon} className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src={Pod} className='img' alt='' />
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Matching