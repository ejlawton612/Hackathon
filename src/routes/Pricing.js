import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ApartmentImage from '../components/NewApartment'
import {useState, useEffect} from 'react'
import '../components/FormStyles.css'
import {Link, useLocation} from "react-router-dom";
import Select from "react-dropdown-select";
const Pricing = () => {
    const location = useLocation();
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [preferences, setPreferences] = useState([[]]);
    const [sqf, setSqf] = useState("");
    const [rooms, setRooms] = useState("");
    const [bath, setBath] = useState("");
    const [loc, setLoc] = useState("");
    const [safety, setSafety] = useState("");
    const [costP, setCostP] = useState("");
    const [importance, setImportance] = useState([[]]);
    const [sqfP, setSqfP] = useState("");
    const [roomsP, setRoomsP] = useState("");
    const [bathP, setBathP] = useState("");
    const [locP, setLocP] = useState("");
    const [safetyP, setSafetyP] = useState("");
    const [listing, setListing] = useState([[]]);
    const Options = () => {
        return (
            <>
            <option value ="">Select Importance</option>
            <option value = "5">Important</option>
            <option value = "4">Somewhat Important</option>
            <option value = "3">Neutral</option>
            <option value = "2">Somewhat Unimportant</option>
            <option value = "1"> Unimportant</option>
            </>
        )
    }
    const list = () => {
        if (location.state != null && location.state.preferences != null) {
            setPreferences(location.state.preferences);
        }
    }
    const imp = () => {
        if (location.state != null && location.state.importance != null) {
            setImportance(location.state.importance);
        }
    }
    const listi = () => {
        if (location.state != null && location.state.listing != null) {
            setListing(location.state.listing);
        }
    }
    useEffect(list, []);
    useEffect(imp, []);
    useEffect(listi, []);
    const add = (event) => {
        event.preventDefault();
        if (name !== "" && cost !== "" && sqf !== "" && rooms !== "" && bath !== "" && loc !== "" && safety !== "") {
            let temp = [name, cost, sqf, rooms, bath, loc, safety];
            if (costP !== "" && sqfP !== "" && roomsP !== "" && bathP !== "" && locP !== "" && safetyP !== "") {
                if (preferences === [[]]) {
                    setPreferences([temp]);
                } else {
                    setPreferences(preferences.concat([temp]));
                }
                let t = [costP, sqfP, roomsP, bathP, locP, safetyP];
                if (importance === [[]]) {
                    setImportance([t]);
                } else {
                    setImportance(importance.concat([t]));
                }
                setName("")
                setCost("")
                setSafety("")
                setLoc("")
                setBath("")
                setRooms("")
                setSqf("")
                setCostP("")
                setSafetyP("")
                setLocP("")
                setBathP("")
                setRoomsP("")
                setSqfP("")
            }
        }
    }
    const changeName = (event) => {
        setName(event.target.value);
    }
    const changeCost = (event) => {
        if (!isNaN(event.target.value)){
            setCost(event.target.value);
        }
    }
    const changeSqf = (event) => {
        if (!isNaN(event.target.value)) {
            setSqf(event.target.value);
        }
    }
    const changeSafety = (event) => {
        setSafety(event.target.value);
    }
    const changeBath = (event) => {
        if (!isNaN(event.target.value)) {
            setBath(event.target.value);
        }
    }
    const changeRooms = (event) => {
        if (!isNaN(event.target.value)) {
            setRooms(event.target.value);
        }
    }
    const changeLoc = (event) => {
        if (!isNaN(event.target.value)) {
            setLoc(event.target.value);
        }
    }
    const changeCostP = (event) => {
        if (!isNaN(event.target.value)){
            setCostP(event.target.value);
        }
    }
    const changeSqfP = (event) => {
        if (!isNaN(event.target.value)) {
            setSqfP(event.target.value);
        }
    }
    const changeSafetyP = (event) => {
        if (!isNaN(event.target.value)){
            setSafetyP(event.target.value);
        }
    }
    const changeBathP = (event) => {
        if (!isNaN(event.target.value)) {
            setBathP(event.target.value);
        }
    }
    const changeRoomsP = (event) => {
        if (!isNaN(event.target.value)) {
            setRoomsP(event.target.value);
        }
    }
    const changeLocP = (event) => {
        if (!isNaN(event.target.value)) {
            setLocP(event.target.value);
        }
    }
    return (
        <div className='listing'>
        <div>
        <Navbar state = {{listing: listing, preferences: preferences, importance: importance}}/>
        <ApartmentImage heading='PREFERENCES.' text='Add in your preferences.' />
        </div>
            <form onSubmit = {add}>
                <label>Roommate Name</label>
                <input value = {name} onChange = {changeName}/>
                <label>Number of Bathrooms</label>
                <input value = {bath} onChange = {changeBath}/>
                <label>Number of Bedrooms</label>
                <input value = {rooms} onChange= {changeRooms}/>
                <label>Safety Level</label>
                <select value = {safety} onChange = {changeSafety}>
                    <option value = "">Select Safety Level</option>
                    <option value = "1">Very Safe</option>
                    <option value = "2">Safe</option>
                    <option value = "3">Somewhat Safe</option>
                    <option value = "4">Unsafe</option>
                </select>
                <label>Cost</label>
                <input value = {cost} onChange = {changeCost}/>
                <label>Square Feet</label>
                <input value = {sqf} onChange = {changeSqf}/>
                <label>Location</label>
                <input value = {loc} onChange = {changeLoc}/>
                <label>For the following sections rank importance as a number 1 - 5</label>
                <label>Importance of Number of Bathrooms </label>
                    <select value = {bathP} onChange = {changeBathP}>
                        <Options />
                    </select>
                <label>Importance of Number of Bedrooms </label>
                    <select value = {roomsP} onChange = {changeRoomsP}>
                        <Options />
                    </select>
                <label>Importance of Safety</label>
                    <select value = {safetyP} onChange = {changeSafetyP}>
                        <Options />
                    </select>
                <label>Importance of Cost</label>
                    <select value = {costP} onChange = {changeCostP}>
                    <Options />
                    </select>
                <label>Importance of Square Feet</label>
                    <select value = {sqfP} onChange = {changeSqfP}>
                    <Options />
                    </select>
                <label>Importance of Location</label>
                    <select value = {locP} onChange = {changeLocP}>
                    <Options />
                    </select>
                <button type = "submit" className='btn'>Add</button>
            </form>
        </div>
    )
}

export default Pricing;
