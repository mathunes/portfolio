import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Projects from '../pages/Projects'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'} component={Home} />
            <Route path={process.env.PUBLIC_URL + '/about'} component={About} />
            <Route path={process.env.PUBLIC_URL + '/projects'} component={Projects} />
        </Switch>
    </BrowserRouter>
)

export default Routes;