import React from 'react'
import Todo from '../todo/Todo'
import About from '../about/About'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

export default props => (
    <Router>        
        <Switch>
            <Route path="/" exact component={Todo}/>
            <Route path="/about" component={About}/>
            <Route path="/todos" component={Todo}/>
            <Redirect from="*" to="/todos" />
        </Switch>        
    </Router>
)