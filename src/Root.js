import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import React from 'react';

import Game from './components/Game'
import App from './App'

const Root = () => (

    <Router basename={process.env.PUBLIC_URL}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/reacttic" component={Game} />
            <Route exact path="/reduxtic" component='' />
        </Switch>
    </Router>
);

export default Root;