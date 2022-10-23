import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Video from '../components/Video'
import {useLocation} from "react-router-dom";

const Home = () => {
const location = useLocation();
    return (
        <div>
            <Navbar state = {location.state}/>
            <Video />
            <Footer />
        </div>
    )
}

export default Home
