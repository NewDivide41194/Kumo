import React from 'react';
import { lan } from '../Common/language'
import DeveloperProfile from '../Components/AboutUs/DeveloperProfile'
import Photo from '../Images/thureinWInSwe.jpg'

const AboutUs = () => {
    const country = 'mm'
    return (
        <div className="container pb-5" style={{ background: 'linear-gradient(to bottom, #fcf9f9, #CFDCE4,#E0E9EF)' }} >
            {/* <div className="col-sm pt-5"> <CompanyProfile  /></div> */}
            <h1 className='pt-4' style={{ textAlign: 'center', fontFamily: 'Cambo', fontSize: 30 }}>Our Team</h1>
            <h5 className='py-3' style={{ fontFamily: 'Cambo', fontSize: 16 }}>Lateral is Special because of it's people - the quality of the team is outstanding.
           </h5>
            <h5 className='py-3' style={{ fontFamily: 'Cambo', fontSize: 16 }}> We take great pride in our people. who are our most valued asset .
               </h5>
            <h5 className='py-3' style={{ fontFamily: 'Cambo', fontSize: 16 }}> Looking to join the team , get started on our careers page .</h5>
            <div className="row" >
                <div className="col pt-4" style={{ fontFamily: 'Cambo', fontSize: 15 }}><DeveloperProfile Photo={Photo} /></div>
            </div>
            <h4 className='pt-5' style={{ fontFamily: 'Cambo', fontSize: 16 }}>Individual commitment to a group effort--that is what makes a team work, a company work, a society work, a civilization work."</h4>
            <h4 className='pt-5' style={{ fontFamily: 'Cambo', fontSize: 16 }}>Talent wins games, but teamwork and intelligence win championships." </h4>
            <h4 className='pt-5' style={{ fontFamily: 'Cambo', fontSize: 16 }}>Teamwork is the ability to work together toward a common vision. The ability to direct individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain    uncommon results." </h4>
        </div>
    )
}

export default AboutUs
