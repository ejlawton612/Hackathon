import React from 'react'
import './MatchingStyles.css'

import {Link} from 'react-router-dom'

//name, cost, sqft, rooms, bathrooms, location, safety
let listings = [["Inspire", 1400, 1500, 4, 2, 1, 4], ["SQ5", 1200, 1500, 4, 4, 3, 2]];
let roommates = [["Sophie", 1350, 1300, 4, 4, 2, 4], ["Eliza", 1500, 1200, 4, 2, 4, 2]];
let priority = [[1, 2, 2, 4, 3, 5], [3, 4, 2, 6, 1, 5]];

function personalScore(indexL, indexR) {
    if (roommates.length === 0) {
        //throw error
    } else if (listings.length === 0) {
        //throw error
    } 

    let sqFtScore = 0;
    let sqFtDiff = (parseInt(roommates[indexR][2]) - parseInt(listings[indexL][2])) / parseInt(roommates[indexR][2]);
    if (sqFtDiff <= 0) {
        sqFtScore = 100;
    } else if (sqFtDiff <= 0.2) {
        sqFtScore = 80;
    } else if (sqFtDiff <= 0.4) {
        sqFtScore = 60;
    } else if (sqFtDiff <= 0.6) {
        sqFtScore = 40;
    } else if (sqFtDiff <= 0.8) {
        sqFtScore = 20;
    } else {
        sqFtScore = 0;
    }

    let bedScore = 0;
    let numBeds = parseInt(listings[indexL][3]);
    let prefBeds = parseInt(roommates[indexR][3]);
    if (numBeds < prefBeds) {
        bedScore = 0;
    } else if (numBeds === prefBeds) {
        bedScore = 100;
    } else {
        bedScore = 50;
    }

    let bathScore = 0;
    let numBath = parseInt(listings[indexL][4]);
    let prefBath = parseInt(roommates[indexR][4]);
    if (numBath === prefBath) {
        bathScore = 100;
    } else if (numBath === prefBath + 1 || numBath === prefBath - 1) {
        bathScore = 66;
    } else if (numBath === prefBath + 2 || numBath === prefBath -2) {
        bathScore = 33;
    } else {
        bathScore = 0;
    }

    let costScore = 0;
    let cost = parseInt(listings[indexL][1]);
    let prefCost = parseInt(roommates[indexR][1]);
    if (cost <= prefCost) {
        costScore = 100;
    } else if (cost <= prefCost + 50) {
        costScore = 80;
    } else if (cost <= prefCost + 100) {
        costScore = 60;
    } else if (cost <= prefCost + 150) {
        costScore = 40;
    } else if (cost <= prefCost + 200) {
        costScore = 20;
    } else {
        costScore = 0;
    }

    let locationScore = 0;
    let distance = listings[indexL][5];
    let prefDistance = roommates[indexR][5];
    if (distance <= prefDistance) {
        locationScore = 100;
    } else if (distance <= prefDistance + 0.2) {
        locationScore = 80;
    } else if (distance <= prefDistance + 0.4) {
        locationScore = 60;
    } else if (distance <= prefDistance + 0.6) {
        locationScore = 40;
    } else if (distance <= prefDistance + 0.8) {
        locationScore = 20;
    } else {
        locationScore = 0;
    }

    let safetyScore = 0;
    let safety = listings[indexL][6];
    let prefSafety = roommates[indexR][6];
    if (safety >= prefSafety) {
        safetyScore = 100;
    } else if (safety === prefSafety - 1) {
        safetyScore = 66;
    } else if (safety === prefSafety - 2) {
        safetyScore = 33;
    } else {
        safetyScore = 0;
    }

    let myScores = [costScore, sqFtScore, bedScore, bathScore, locationScore, safetyScore];
    let totalSum = 0;
    let totalPriority = 0;
    for (let i = 0; i < priority[indexR].length; i++) {
        totalSum += parseInt(priority[indexR][i]) * myScores[i];
        totalPriority += parseInt(priority[indexR][i]);
    }
    let finalScore = totalSum / totalPriority;
    return finalScore;

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