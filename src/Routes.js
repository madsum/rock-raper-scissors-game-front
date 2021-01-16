import React, { Component } from "react";
import  { Router, Switch, Route } from "react-router-dom";
import Game from './Game/Game'
import RegisterName from './RegisterName/RegisterName';
import ViewResult from './ViewResult/ViewResult';
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={RegisterName} />
                    <Route path="/game/:title" exact component={Game} />
                    <Route path="/result" exact component={ViewResult} />
                </Switch>
            </Router>
        )
    }
}
