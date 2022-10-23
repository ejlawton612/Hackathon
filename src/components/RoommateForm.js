import {useState, useEffect} from 'react'
import './FormStyles.css'
import {Link, useLocation} from "react-router-dom";
import Select from "react-dropdown-select";
const RoommateForm = () => {
    const location = useLocation();
    console.log(location);
    useEffect(() => {console.log(location)},[]);
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [preferences, setPreferences] = useState([[]]);
    const [sqf, setSqf] = useState("");
    const [rooms, setRooms] = useState("");
    const [bath, setBath] = useState("");
    const [loc, setLoc] = useState("");
    const [safety, setSafety] = useState("");
    const [nameP, setNameP] = useState("");
    const [costP, setCostP] = useState("");
    const [importance, setImportance] = useState([[]]);
    const [sqfP, setSqfP] = useState("");
    const [roomsP, setRoomsP] = useState("");
    const [bathP, setBathP] = useState("");
    const [locP, setLocP] = useState("");
    const [safetyP, setSafetyP] = useState("");
    const list = () => {
        if (location.state !== null && location.state.preferences !== null) {
            setPreferences(location.state.preferences);
        }
    }
    useEffect(list, []);
    const add = (event) => {
        event.preventDefault();
        console.log(preferences === "");
        console.log("preference array", preferences);
        if (name !== "" && cost !== "" && sqf !== "" && rooms !== "" && bath !== "" && loc !== "" && safety !== "") {
            let temp = [name, cost, sqf, rooms, bath, loc, safety];
            if (preferences === [[]]) {
                setPreferences([temp]);
            } else {
                setPreferences(preferences.concat([temp]));
            }
            setName("")
            setCost("")
            setSafety("")
            setLoc("")
            setBath("")
            setRooms("")
            setSqf("")
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
    const changeNameP = (event) => {
        if (!isNaN(event.target.value)) {
            setNameP(event.target.value);
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
                    <input value = {bathP} onChange = {changeBathP}/>
                <label>Importance of Number of Bedrooms </label>
                    <input value = {roomsP} onChange = {changeRoomsP}/>
                <label>Importance of Safety</label>
                    <input value = {safetyP} onChange = {changeSafetyP}/>
                <label>Importance of Cost</label>
                    <input value = {costP} onChange = {changeCostP}/>
                <label>Importance of Square Feet</label>
                    <input value = {sqfP} onChange = {changeSqfP}/>
                <label>Importance of Location</label>
                    <input value = {locP} onChange = {changeLocP}/>
                <button type = "submit" className='btn'>Add</button>
            </form>
            <div>
            <h2>For the following elements below enter a number 1 - 5 to mark how important they are to you with 1 being the most important.</h2>
            </div>
            <form>

            </form>
        </div>
    )
}

export default RoommateForm;
