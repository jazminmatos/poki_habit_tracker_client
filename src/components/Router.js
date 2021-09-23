import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom'

import Home from './Home';
import About from './About';
import Profile from './Profile';
import Store from './Store';

const Router = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/about' component={About} />
            <Route exact path='/profile' component={Profile} />
            <Route exact path='/store' component={Store} />
        </Switch>
    );
}

export default Router;
