import React from 'react'
import FooterCard from './FooterCard'

const Footer = () => {
    const Address = "(Nga Gyi/ 98), 64Street, Between Sabal & Tharipyi Street,Mandalay, Myanmar ,Kumo Solutions Company"
    const Phone = "+959-787830081"
    const Mail = "office@kumomyanmar.com"
    return (
        <div className=" pt-3" >
            <FooterCard Address={Address} Phone={Phone} Mail={Mail} />
        </div>
    )
}

export default Footer