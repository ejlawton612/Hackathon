import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/MatchingC'
import ApartmentImage from '../components/ApartmentImage'

const Matching = () => {
    return (
        <div>
            <Navbar />
            <ApartmentImage heading='MATCHING.' text='Find your best match.' />
            <TrainingSection />
            <Footer />
        </div>
    )
}

export default Matching