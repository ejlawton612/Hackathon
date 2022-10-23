import {useState, useEffect} from 'react'
import './FormStyles.css'
import {Link, useLocation} from "react-router-dom";
import Select from "react-dropdown-select";
const Listing = () => {
    const location = useLocation();
    console.log(location);
    useEffect(() => {console.log(location)},[]);
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [listing, setListing] = useState([[]]);
    const [sqf, setSqf] = useState("");
    const [rooms, setRooms] = useState("");
    const [bath, setBath] = useState("");
    const [loc, setLoc] = useState("");
    const [safety, setSafety] = useState("");
    const list = () => {
        if (location.state !== null && location.state.listing !== null) {
            setListing(location.state.listing);
        }
    }
    useEffect(list, []);
    const add = (event) => {
        event.preventDefault();
        console.log(listing === "");
        console.log("listing array", listing);
        if (name !== "" && cost !== "" && sqf !== "" && rooms !== "" && bath !== "" && loc !== "" && safety !== "") {
            let temp = [name, cost, sqf, rooms, bath, loc, safety];
            if (listing === [[]]) {
                setListing([temp]);
            } else {
                setListing(listing.concat([temp]));
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
    return (
        <div className='listing'>
            <form onSubmit = {add}>
                <label>Listing Name</label>
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
                <button type = "submit" className='btn'>Add</button>
            </form>
        </div>
    )
}

export default Listing
