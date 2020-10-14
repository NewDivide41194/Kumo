import React from 'react';
import './ServiceCard.css'
const ServiceCard = (props) => {
    return (
        <div>
            <div className="" style={{ width: "100%", height: "100%" }}>

                <div className="">
                    <div className="">
                        <h3 style={{ fontFamily: 'Cambo',fontSize:20 }}>{props.service}</h3>
                        <img className="pt-3" height={"250px"} width={"100%"}
                            src={props.image}
                            alt="Example photo" />
                        {/* <p>This is what you see by default.</p> */}
                    </div>
                    <div className="">
                        <div className="details__inner">
                            <h3 className='pt-2' style={{ fontFamily: 'Cambo',fontSize:18 }}>Details</h3>
                            <p style={{ fontFamily: 'Cambo',fontSize:13 }}>A mobile app is a software application developed specifically for use on small, wireless computing devices, such as smartphones and tablets, rather than desktop or laptop computers.
                                Mobile apps are designed with consideration for the demands and constraints of the devices and also to take advantage of any specialized capabilities they have. A gaming app, for example, might take advantage of the iPhone's accelerometer.
                                Mobile apps are sometimes categorized according to whether they are web-based or native apps, which are created specifically for a given platform. A third category, hybrid apps, combines elements of both native and Web apps. As the technologies mature, it's expected that mobile application development efforts will focus on the creation of browser-based, device-agnostic Web applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ServiceCard