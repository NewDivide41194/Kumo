import React from 'react';
import MapView from '../Components/ContactUs/Map'
import AddressCard from '../Components/ContactUs/AddressCard'
const ContactUs = () => {
    return (
        <div>
         
            <div >  <AddressCard /> </div>
            <div className='spacer row pt-3'></div>
            <div>  <MapView /> </div>
        </div>

    )
}

export default ContactUs