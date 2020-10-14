import React from 'react'
import './HomeComponent.css'
import Dev1Profile from '../../Images/thureinWInSwe.jpg'
const HomeComponent = () => {
    return (
        <div className='container-fluid py-2' style={{ fontSize: 15 }}>
            <div class="blog-card">
                <div class="meta" >
                    <div class="photo" style={{ backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)' }}></div>
                </div>
                <div class="description" style={{ fontFamily: 'Cambo' }}>
                    <h1 style={{ fontFamily: 'Cambo' }}>Kumo Solutions</h1>
                    <h2 style={{ fontFamily: 'Cambo' }}>Opening a door to the future</h2>
                    <p> Kumo Solutions Co., Ltd. was established on 14th October 2018 in Mandalay, Myanmar and Evercom Singapore investment company.For Myanmar and Global Markets, we offer variety of IT services. We hope to be any of useful services for your business.</p>
                </div>
            </div>
            <div class="blog-card alt">
                <div class="meta">
                    <div class="photo" style={{ backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-2.jpg)' }}
                    ></div>
                </div>
                <div class="description" style={{ fontFamily: 'Cambo' }}>
                    <h1 style={{ fontFamily: 'Cambo' }}>Software</h1>
                    <h2 style={{ fontFamily: 'Cambo' }}>Software is a set of instructions, data or programs used to operate computers and execute specific tasks.</h2>
                    <p>Software is often divided into application software, or user downloaded programs that fulfill a want or need, and system software, which includes operating systems and any program that supports application software. The term middleware is sometimes used to describe programming that mediates between application and system software or between two different kinds of application software. </p>
                    {/* <p class="read-more">
                        <a href="#">More</a>
                    </p> */}
                </div>
            </div>
        </div>



    )
}
export default HomeComponent