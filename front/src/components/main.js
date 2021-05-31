import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';
import List from '../pages/List';
import Add from '../pages/Add';


const Main = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/signin' component={Signin}/>
            <Route exact path='/list' component={List}/>
            <Route exact path='/add' component={Add}/>
        </Switch>
    );
}

export default Main;