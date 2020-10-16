import React from 'react';
import ServiceCard from '../Components/Service/ServiceCard'
import WebAppLogo from '../Images/web_app.gif'
import MobileAppLogo from '../Images/mobile_app.gif'
const Services = () => {

    const Service1 = "Mobile Application"
    const Service2 = "Web Application"
    const Service3 = "POS"




    return (

        <div className="container-fluid">
            <h1 style={{ textAlign: 'center', marginTop:'30px', color: '#00000F', fontFamily: 'Cambo', fontSize: 20 }}>Kumo Solutions' Service and Technology</h1>
            <div className='row pt-5'>

                <div className='pl-4 col-sm-6' style={{ fontFamily: 'Cambo', fontSize: 15 }}>
                    <p style={{ fontFamily: 'Cambo', fontSize: 13 }} >  We provides the following services:
                <ul className="pt-2">
                            <li> Full-cycle Developer of Custom Enterprise Solutions with Extensive UX/UI</li>
                            <li>Enterprise resource planning apps</li>
                            <li>Blockchain solutions</li>
                            <li> Data visualization software</li>
                            <li>Social media apps</li>
                            <li>QA and software testing</li>
                            <li>IT staff augmentation</li>
                            <li>Application modernization</li>
                            <li>UI/UX development and design</li>
                        </ul>
                    </p>
                </div>
                <div className='pl-4 col-sm-6' style={{ fontFamily: 'Cambo', fontSize: 15 }}>
                    <p style={{ fontFamily: 'Cambo', fontSize: 13 }}>We are using the following technologies:
                <ul>
                            <li> Full-cycle Developer of Custom Enterprise Solutions with Extensive UX/UI</li>
                            <li>Enterprise resource planning apps</li>
                            <li>Blockchain solutions</li>
                            <li> Data visualization software</li>
                            <li>Social media apps</li>
                            <li>QA and software testing</li>
                            <li>IT staff augmentation</li>
                            <li>Application modernization</li>
                            <li>UI/UX development and design</li>
                        </ul>
                    </p>
                </div>
            </div>
            <div className="row pt-5 pb-5">
                <div className="col-sm-4 col-md-4 slide-in-down">
                    <ServiceCard service={Service1} image={MobileAppLogo} />
                </div>
                <div className="col-sm-4 col-md-4">
                    <ServiceCard service={Service2} image={WebAppLogo} />
                </div>
                <div className="col-sm-4 col-md-4">
                    <ServiceCard service={Service3} image={MobileAppLogo} />
                </div>
            </div>
        </div >
    )
}

export default Services