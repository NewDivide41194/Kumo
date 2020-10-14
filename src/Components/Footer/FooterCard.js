import React from 'react'
import './Footer.css'
const FooterCard = (props) => {
    return (
        <div className="container-fluid" style={{ background: "#212121" }} >
            <div className="row pt-5 pb-5 ">
                <div className="col-sm-4 " style={{ textAlign: 'center' }}>
                    <h2 className="cardTitle pt-2 pb-5 pt-5" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 20 }}>Technology</h2>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive</p>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive</p>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive </p>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive</p>
                </div>

                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                    <h2 className="cardTitle pt-2 pb-5 pt-5" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 20 }}>Links</h2>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive</p>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive</p>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive </p>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive</p>
                </div>

                <div className="col-sm-4" style={{ textAlign: 'center' }}>
                    <h2 className="cardTitle pt-2 pb-5 pt-5" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 20 }}>Technology</h2>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive</p>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive</p>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive </p>
                    <p className="pt-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 15 }}>Responsive</p>
                </div>
            </div>

            <hr className='' style={{ background: '#FFFFFF', height: 1 }} ></hr>
            <div className="row d-inline-block pt-5" >
                <p className="pt-2  col-sm-4" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 14  }}>
                    <i className="fa fa-map-marker px-1" ></i>
                    {props.Address}
                </p>
                <p className="pt-2  col-sm-2" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 14  }}>
                    <i className="fa fa-phone px-2" ></i>
                    {props.Phone}
                </p>
                <p className="pt-2  col-sm-3" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 14  }}>
                    <i className="fa fa-envelope-o  px-1" ></i>
                    {props.Mail}
                </p>

                <p className="pt-1  pl-5 col-sm-1" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 20 }}>
                    <i className="fa fa-facebook-official px-1" ></i>

                </p>
                <p className="pt-1 pl-5  col-sm-1" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 20 }}>
                    <i className="fa fa-linkedin-square px-1" ></i>

                </p>
                <p className="pt-1 pl-5  col-sm-1" style={{ color: "#FFFFFF", fontFamily: 'Cambo', fontSize: 20 }}>
                    <i className="fa fa-whatsapp px-1" ></i>

                </p>


            </div>


            <div className=" pt-5 pb-2" style={{ background: "#212121", textAlign: 'center', color: '#f7efef', fontFamily: 'Cambo', fontSize: 12 }}>
                <i class="fa fa-copyright" aria-hidden="true"></i> 2008 Kumo Solutions Co., Ltd. All Rights Reserved
            </div>
        </div >

    )
}

export default FooterCard