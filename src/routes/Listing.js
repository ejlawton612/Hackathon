import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Form from '../components/Form'
import ApartmentImage from '../components/ApartmentImage'

const Listing = () => {
    return (
        <div>
            <Navbar />
            <ApartmentImage heading='LISTING.' text='Add info about a listing' />
            <Form />
            <Footer/>
        </div>
    )
}

export default Listing