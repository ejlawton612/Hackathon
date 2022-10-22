import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PricingCards from '../components/Pricing'
import ApartmentImage from '../components/NewApartment'

const Pricing = () => {
    return (
        <div>
            <Navbar />
            <ApartmentImage heading='PREFERENCES.' text='Add in your preferences.' />
            <PricingCards />
            <Footer />
        </div>
    )
}

export default Pricing