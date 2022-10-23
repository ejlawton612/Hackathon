import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ApartmentImage from '../components/ApartmentImage'
import {useState, useEffect} from 'react'
import '../components/FormStyles.css'
import {Link, useLocation} from "react-router-dom";
import Select from "react-dropdown-select";
import Modal from "react-modal";
const Listing = () => {
    const location = useLocation();
    const [name, setName] = useState("");
    const [cost, setCost] = useState("");
    const [listing, setListing] = useState([[]]);
    const [sqf, setSqf] = useState("");
    const [rooms, setRooms] = useState("");
    const [bath, setBath] = useState("");
    const [loc, setLoc] = useState("");
    const [safety, setSafety] = useState("");
    const [importance, setImportance] = useState([[]])
    const [preferences, setPreferences] = useState([[]]);
    const [open, setOpen] = useState(false);
    const close = () => {
        setOpen(false);
    }
    const list = () => {
        if (location.state != null && location.state.listing != null) {
            setListing(location.state.listing);
        }
    }
    const imp = () => {
        if (location.state != null && location.state.importance != null) {
            setImportance(location.state.importance);
        }
    }
    const pref = () => {
        if (location.state != null && location.state.preferences != null) {
            setPreferences(location.state.preferences);
        }
    }
    useEffect(list, []);
    useEffect(imp, []);
    useEffect(pref, []);
    const add = (event) => {
        event.preventDefault();
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
            setOpen(true);
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
    <div>
    <Navbar state = {{listing: listing, preferences: preferences, importance: importance}} />
    <ApartmentImage heading='LISTING.' text='Add info about a listing' />
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
            <Modal isOpen ={open} onRequestClose = {close} ariaHideApp = {false}>
            <div>
                <p>Your listing was added!</p>
                <button onClick = {close}>Close</p>
            </div>
            </Modal>
        </div>
        <Footer/>
        </div>
    )
}

export default Listing
