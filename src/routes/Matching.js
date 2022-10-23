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

    const list = () => {
        if (location.state != null && location.state.listing != null) {
            console.log("listing")
            setListing(location.state.listing);
        }
    }
    const imp = () => {
        if (location.state != null && location.state.importance != null) {
            console.log("importance")
            setImportance(location.state.listing);
        }
    }
    const pref = () => {
        if (location.state != null && location.state.preferences != null) {
            console.log("preferences")
            setPreferences(location.state.preferences);
        }
    }
var fun = function(x) {
    console.log(x.length);
    if (x == null || x.length === 0){
        return (
            -1
        )
    } else {
        return x[0];
    }
};
var comp = function Comparison(x) {
    if (x != null && x.length !== 0) {
        return (
            preferences.map((g) => {
                return (Math.abs(parseInt(x[1]) - parseInt(g[1])) + Math.abs(parseInt(x[2]) - parseInt(g[2])) + Math.abs(parseInt(x[3]) - parseInt(g[3])) + Math.abs(parseInt(x[4])-parseInt(g[4]))+ Math.abs(parseInt(x[5]) - parseInt(g[5])) + Math.abs(parseInt(x[6]) - parseInt(g[6])));
            })
        )
    }
    return -1;
}
    useEffect(list, []);
    useEffect(imp, []);
    useEffect(pref, []);
    const names = listing.map(fun);
    console.log(names);
    const score = listing.map(comp);
    console.log(score);
    var m = function k(l) {
        console.log(l)
        if (l !== -1) {
        return (
        <div>
            {l}
        </div>
        )
        } else {
            return (
                <div>
                </div>
            )
        }
    }
    var h = function k(l) {
            console.log(l)
            if (l !== -1 && !isNaN(l)) {
            return (
            <li>
                {l}
            </li>
            )
            } else {
                return (
                    <div>
                    </div>
                )
            }
        }
    var me = function sep(o) {
        if (o !== -1) {
            return (
                o.map(h)
            )
        }
    }
    const tags = names.map(m);
    const sc = score.map(me);
    return (
        <div>
            <Navbar state = {location.state}/>
            <ApartmentImage heading='MATCHING.' text='Find your best match.' />
            <div>
            <p>The larger the score the greater the difference between preferences and the listing </p>
            <p>The first Listing coresponds with the first x scores where x is the number of roommates </p>
            <p>Number of Roommates : {parseInt(preferences.length) - 1}</p>
            <p>Number of Listings : {parseInt(listing.length) - 1}</p>
            </div>
            <div>
            <p>Listings</p>
            <p>{tags}</p>
            </div>
            <div>
            <p>Scores</p>
            <p>{sc}</p>
            </div>
            <Footer />
        </div>
    )
}

export default Matching;
