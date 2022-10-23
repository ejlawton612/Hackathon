import {useEffect, useState} from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import {useLocation} from "react-router-dom";

import ApartmentImage from '../components/ApartmentImage'

const Matching = () => {
    const location = useLocation();
    const [preferences, setPreferences] = useState([[]]);
    const [listing, setListing] = useState([[]]);
    const [importance, setImportance] = useState([[]]);
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
    return (
        <div>
            <Navbar state = {location.state}/>
            <ApartmentImage heading='MATCHING.' text='Find your best match.' />
            <Footer />
        </div>
    )
}

export default Matching
