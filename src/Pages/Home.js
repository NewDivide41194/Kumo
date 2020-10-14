import React from 'react'
import { lan } from '../Common/language'
import HomeComponent from '../Components/Home/HomeComponent'
const Home = () => {

    const country = 'mm'
    return (
        <div className='' style={{ background: 'linear-gradient(to bottom, #fcf9f9, #CFDCE4,#E0E9EF)' }}>
            <HomeComponent />
            <HomeComponent />
            {/* {lan[country].home} */}
        </div>
    )
}

export default Home