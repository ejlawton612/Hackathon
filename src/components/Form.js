import React from 'react'
import './FormStyles.css'

const Listing = () => {
    return (
        <div className='listing'>
            <form>
                <label>Listing Name</label>
                <input type='text'></input>
                <label>Number of Bathrooms</label>
                <input type='#'></input>
                <label>Number of Bedrooms</label>
                <input type='text'></input>
                <label>Safety Level</label>
                <input type='text'></input>
                <label>Details</label>
                <textarea rows='6' placeholder='Type a short message here' />
                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

export default Listing