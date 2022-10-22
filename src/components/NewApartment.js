import React, { Component } from 'react'
import './NewApartmentStyles.css'

class NewApartmentImage extends Component {
    render() {
        return (
            <div className='newapt-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>
            </div>
        )
    }
}

export default NewApartmentImage
