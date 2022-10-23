import React from 'react'
import './MatchingStyles.css'

import {Link} from 'react-router-dom'

//let listings = [["Inspire", 1400, 900, 4, 4, 3, 1], ["SQ5", 1300, 1000, 3, 3, 4, 2]];
let roommates = [["Eliza", 1400, 900, 4, 2, 3, 1], ["sophie", 1300, 1200, 4, 4, 5, 2]];
//let priority = [[1, 4, 3, 2, 5, 6], [1, 1, 3, 4, 5, 6]];

//call on each individual listing to return the average score
//--> could change so that it returns the average score for each listing in an array...
//pass in the index of the listing array that we are calculating the score for
function averageScore(listingIndex) {
    let total = 0;
    for (let i = 0; i < roommates.length; i++) {
        total += personalScore(listingIndex, i);
    }
    let averageScore = total / roommates.length;
    return averageScore;
}

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