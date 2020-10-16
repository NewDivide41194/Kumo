import React, { useState } from 'react';
import Routing from '../../Route/Routing';
import { Link } from 'react-router-dom';
import LocalizedStrings from 'react-localization';
import Selector from 'react-select'
import burger from '../../Images/burger.png'
import './navbar.css'

const Navbar = (props) => {
   
    const Strings = {
        eng: {
            home: "Home",
            about: "About Us",
            contentUs: "Contact Us",
            service: "Services",
            project: "Projects"
        }, mm: {
            home: "ေနအိမ္",
            about: "ကိုယ္တို.",
            contentUs: "ဆက္သြယ္",
            service: "ဝန္ေဆာင္မႈ",
            project: "စီမံကိန္း"
        }
    }


    const [width, setWidth] = useState(window.innerWidth);
    const [show, setShow] = useState(false)
    const [selecteddOption, setSelectedOption] = useState({ value: 'eng', label: 'English' });
    window.onresize = () => setWidth(window.innerWidth)
    const handleChange = selectedOption => {
        setSelectedOption(selectedOption)
    };
    console.log(selecteddOption.value)

    const desktopNavbar = <div className="container-fluid"
        style={{ background: " linear-gradient(to bottom, #DBE4E3, #E2EBEA,#DBE4E3)", fontSize: 15, fontFamily: 'Cambo', position: 'fixed', zIndex: 1000 }}>
        <div className="d-flex flex-row justify-content-between">
            <div className="col-sm-3 col-md-4">
                <div className="row">
                <div className="pl-0"><img width={100} height={80} src={process.env.PUBLIC_URL + '/kumo_tran.png'}></img></div>
                <div className="pt-5 px-2">
                    <text fontWeight={20} style={{ fontSize: 18, fontFamily: 'Cambo', color: '#121212' }}> Kumo Solutions</text>
                 </div>
                </div>
            </div>
            <div className="col-sm-9 col-md-8">
                <div className="d-flex flex-row" style={{marginRight:'20px'}}>
                <div className="pt-5 col-2" >
                    <Link to="/" style={{ fontSize: 16, fontFamily: 'Cambo', color: '#121212' }}>
                        {Strings[selecteddOption.value].home}
                    </Link>
                </div>
                <div className="pt-5 col-2">
                    <Link to="/aboutUs" style={{ fontSize: 16, fontFamily: 'Cambo', color: '#121212' }}>
                        {Strings[selecteddOption.value].about}
                    </Link>
                </div>
                <div className=" pt-5 col-2">
                    <Link to="/contactUs" style={{ fontSize: 16, fontFamily: 'Cambo', color: '#121212' }}>
                        {Strings[selecteddOption.value].contentUs}</Link>
                </div>
                <div className=" pt-5 col-2 ">
                    <Link to="/services" style={{ fontSize: 16, fontFamily: 'Cambo', color: '#121212' }}>
                        {Strings[selecteddOption.value].service}</Link>
                </div>
                <div className="pt-5 col-2 ">
                    <Link to="/project" style={{ fontSize: 16, fontFamily: 'Cambo', color: '#121212' }}>
                        {Strings[selecteddOption.value].project} </Link>
                </div>

                <div className="pb-4 col-2 px-0" style={{marginTop:'32px'}}>
                    <Selector
                        value={selecteddOption}
                        onChange={handleChange}
                        options={Languages} />
                </div>
                </div>

            </div>
        </div>
    </div >
    const mobileNavbar =
        <div className="container-fluid p-0"
            style={{ background: " linear-gradient(to bottom, #DBE4E3, #E2EBEA,#DBE4E3)", fontSize: 15, fontFamily: 'Cambo', position: 'relative' }}>

            <div className="d-flex flex-row justify-content-between">
                <div className="" >
                    <img width={100} height={80} src={process.env.PUBLIC_URL + '/kumo_tran.png'}></img>
                    <text fontWeight={20} style={{ fontSize: 20, fontFamily: 'Cambo', color: '#121212' }}> Kumo Solutions</text>
                </div>
                {/* <div className='spacer col-sm-4 pr-5'></div> */}
                <div className="pt-3 pb-2 pr-0" onClick={() => setShow(!show)} > <img className='pl-0' width="70" height="50" src={burger} /></div>
            </div>
            {show &&
                <div className="toggle pl-3">
                    <div className="pr-5 pt-5 row" >
                        <div className="col-sm-4"><Link to="/" onClick={() => setShow(!show)} style={{ fontSize: 20, fontFamily: 'Cambo', color: '#121212' }}>{Strings[selecteddOption.value].home}</Link></div>
                    </div>
                    <div className="pr-5 pt-5 row">
                        <div className="col-sm-4"><Link to="/aboutUs" onClick={() => setShow(!show)} style={{ fontSize: 20, fontFamily: 'Cambo', color: '#121212' }}>{Strings[selecteddOption.value].about}</Link></div>
                    </div>
                    <div className="pr-5 pt-5 row">
                        <div className="col-sm-4"><Link to="/contactUs" onClick={() => setShow(!show)} style={{ fontSize: 20, fontFamily: 'Cambo', color: '#121212' }}>{Strings[selecteddOption.value].contentUs}</Link></div>
                    </div>
                    <div className="pr-5 pt-5 row">
                        <div className="col-sm-4"><Link to="/services" onClick={() => setShow(!show)} style={{ fontSize: 20, fontFamily: 'Cambo', color: '#121212' }}> {Strings[selecteddOption.value].service}</Link></div>
                    </div>
                    <div className="pr-5 pt-5 row  ">
                        <div className="col-sm-4"><Link to="/project" onClick={() => setShow(!show)} style={{ fontSize: 20, fontFamily: 'Cambo', color: '#121212' }}>{Strings[selecteddOption.value].project} </Link></div>
                    </div>
                    <div className="pr-5 pt-5 row">
                        <div className='col-sm-4'>
                            <Selector
                                value={selecteddOption}
                                onChange={handleChange}
                                options={Languages} />
                        </div>
                    </div>
                </div>
            }
        </div>

    return (
        width < 900 ? mobileNavbar : desktopNavbar
    )
}
export default Navbar

const Languages = [{ value: 'mm', label: 'ျမန္မာ' }, { value: 'eng', label: 'English' }]