import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter} from "react-router-dom";

import './index.css';
import {ExplorePage} from "./containers/explorePage/explorePage";
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Switch>
                <Route path="/" component={App} exact/>
                <Route path="/curiosity">
                    <ExplorePage name="Curiosity"/>
                </Route>
                <Route path="/opportunity">
                    <ExplorePage name="Opportunity"/>
                </Route>
                <Route path="/spirit">
                    <ExplorePage name="Spirit"/>
                </Route>
            </Switch>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
