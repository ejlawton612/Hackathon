import {useEffect, useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {useLocation} from "react-router-dom";

import ApartmentImage from '../components/ApartmentImage'

const Matching = () => {
    const location = useLocation();
    console.log(location);
    const [preferences, setPreferences] = useState([[]]);
    const [listing, setListing] = useState([[]]);
    const [importance, setImportance] = useState([[]]);
    const [vals, setVals] = useState([])
    const list = () => {
        if (location.state != null & location.state.listing != null) {
            setListing(location.state.listing);
        }
    }
    const imp = () => {
        if (location.state != null && location.state.importance != null) {
            setImportance(location.state.listing);
        }
    }
    const pref = () => {
        if (location.state != null && location.state.preferences != null) {
            setImportance(location.state.preferences);
        }
    }

    useEffect(list, []);
    useEffect(imp, []);
    useEffect(pref, []);
const Apartments = () => {
    console.log("here");
    for (let i = 1; i < listing.length; i++) {
        let a = 0;
        for (let b = 1; b < preferences.length; b++) {
            if (preferences == null || preferences.length === 1) {
            <div>
                <p>Add a roommates preferences to begin </p>
            </div>
            } else if (listing == null || listing.length === 1) {
                return (
                    <div>
                        <p>Add a listing to begin</p>
                    </div>
            )
            } else {
                a += (parseInt(preferences[b][2]) - parseInt(listing[i][2]));
                console.log(a);
            }
        }
        setVals(vals.concat(a / preferences.length));
    }
    console.log("vals",vals);
}
function personalScore(indexL, indexR) {
    if (preferences == null || preferences.length === 1) {
        <div>
            <p>Add a roommates preferences to begin </p>
        </div>
    } else if (listing == null || listing.length === 1) {
        return (
            <div>
                <p>Add a listing to begin</p>
            </div>
        )
    }

    let sqFtScore = 0;
    let sqFtDiff = (parseInt(preferences[indexR][2]) - parseInt(listing[indexL][2])) / parseInt(preferences[indexR][2]);
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
    let numBeds = parseInt(listing[indexL][3]);
    let prefBeds = parseInt(preferences[indexR][3]);
    if (numBeds < prefBeds) {
        bedScore = 0;
    } else if (numBeds === prefBeds) {
        bedScore = 100;
    } else {
        bedScore = 50;
    }

    let bathScore = 0;
    let numBath = parseInt(listing[indexL][4]);
    let prefBath = parseInt(preferences[indexR][4]);
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
    let cost = parseInt(listing[indexL][1]);
    let prefCost = parseInt(preferences[indexR][1]);
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
    let distance = listing[indexL][5];
    let prefDistance = preferences[indexR][5];
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
    let safety = listing[indexL][6];
    let prefSafety = preferences[indexR][6];
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
    for (let i = 0; i < importance[indexR].length; i++) {
        totalSum += parseInt(importance[indexR][i]) * myScores[i];
        totalPriority += parseInt(importance[indexR][i]);
    }
    let finalScore = totalSum / totalPriority;
    return finalScore;

}
    return (
        <div>
            <Navbar state = {location.state}/>
            <ApartmentImage heading='MATCHING.' text='Find your best match.' />
            <Footer />
        </div>
    )
}

export default Matching;
