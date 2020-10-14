import React, { Component } from 'react';
import Routing from './Route/Routing';
import Navbar from './Components/NavBar/Navbar';
import Slick from './Components/Slick/Slick';
import Footer from './Components/Footer/Footer'
const App = () => {
  return (
    <div className='container-fluid m-0' style={{background:' linear-gradient(to bottom, #e1e9ef, #CFDCE4,#E0E9EF)'}}>
     
      <Navbar />
      <Slick />
      <div style={{ background: ' linear-gradient(to bottom, #fcf9f9, #CFDCE4,#E0E9EF)' }}>
        <Routing />
      </div>
      <Footer />
    </div>
  )
}

export default App