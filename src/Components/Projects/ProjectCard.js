import React from 'react'
import './ProjectCard.css'
import Website1 from '../../Images/Website2.jpg'

const ProjectCard = () => {
    return (

        <div className='container-fluid  pt-5' style={{ background: 'linear-gradient(to bottom, #e1e9ef, #CFDCE4,#E0E9EF)' }}>
            <div className="row">
                <div className=" col-sm-6 " style={{ background: 'transparent' }}>
                    <img style={{ borderRadius: 10, }} src={Website1} alt="Avatar" width={"100%"} height={"100%"} />
                </div>
                <div className="col-sm-6 " style={{ visibility: 'false', background: 'linear-gradient(to bottom, #e1e9ef, #CFDCE4,#E0E9EF)', position: 'relative' }}>
                    <span>
                        <h1 style={{ fontFamily: 'Cambo', fontSize: 20,textDecoration:'underline solid #e07823' }}>Moon Stones </h1>
                        <p style={{ fontFamily: 'Cambo', fontSize: 16 }}>Moonstone is a variety of the feldspar-group mineral orthoclase. It’s composed of two feldspar minerals, orthoclase and albite. At first, the two minerals are intermingled. Then, as the newly formed mineral cools, the intergrown orthoclase and albite separate into stacked, alternating layers.</p>
                        <p style={{ fontFamily: 'Cambo', fontSize: 16 }}><i className="fa fa-phone pr-2" aria-hidden="true"></i>09787830081</p>
                        <p style={{ fontFamily: 'Cambo', fontSize: 16 }}><i className="fa fa-envelope pr-2" aria-hidden="true"></i>thureinwinswe@kumomyanmar.com</p>
                    </span>
                </div>
            </div>



        </div>
    )
}

export default ProjectCard