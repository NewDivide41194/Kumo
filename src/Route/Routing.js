import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import ContactUs from '../Pages/ContactUs';
import Services from '../Pages/Services';
import Project from '../Pages/Project';

const Routing = () => {
    return (

        <Switch>
            <Route path='//' component={Home} />
            <Route path='/aboutUs'><AboutUs /></Route>
            <Route path='/services'><Services /></Route>
            <Route path='/contactUs'><ContactUs /></Route>
            <Route path='/project'><Project /></Route>
            <Redirect exact from="/" to="//" />
        </Switch>

    )
}

export default Routing

