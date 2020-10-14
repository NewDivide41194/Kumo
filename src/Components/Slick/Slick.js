import React from 'react';
import { render } from 'react-dom';
// import Header from './header';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';
import './Slick.css';
import './styles.css';



const content = [
    {
        title: 'Kumo Solutions',
        description:
            'Kumo Solutions Co., Ltd. was established on 14th October 2018 in Mandalay, Myanmar and Evercom Singapore investment company.For Myanmar and Global Markets, we offer variety of IT services. We hope to be any of useful services for your business.',
        button: 'Read More',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: 'Kumo Solutions',
        description:
            'Kumo Solutions Co., Ltd. was established on 14th October 2018 in Mandalay, Myanmar and Evercom Singapore investment company.For Myanmar and Global Markets, we offer variety of IT services. We hope to be any of useful services for your business.', button: 'Discover',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
        title: 'Kumo Solutions',
        description:
            'Kumo Solutions Co., Ltd. was established on 14th October 2018 in Mandalay, Myanmar and Evercom Singapore investment company.For Myanmar and Global Markets, we offer variety of IT services. We hope to be any of useful services for your business.', button: 'Buy now',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    }
];

const Slick = () => (
    <div className='py-5'>

        <Slider className="slider-wrapper pt-3" >
            {content.map((item, index) => (
                <div
                    key={index}
                    className="slider-content"
                    style={{ background: `url('${item.image}') no-repeat center center` }}
                >
                    <div className="inner" style={{ fontFamily: 'Saira Semi Condensed' }}>
                        <h1>{item.title}</h1>
                        <p style={{ fontSize: 15, fontFamily: 'Cambo' }}>{item.description}</p>
                        {/* <button>{item.button}</button> */}
                    </div>
                </div>
            ))}
        </Slider>
    </div>
);



export default Slick

