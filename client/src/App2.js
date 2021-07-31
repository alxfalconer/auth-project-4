import React, {Component} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Home2 from "./components/Home2";
import Dashboard from "./components/Dashboard"

export default class App2 extends Component {
    constructor() {
        super();

        this.state = {
            loggedInStatus: "NOT_LOGGED_IN",
            user: {}
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin(data) {
        this.setState({
            loggedInStatus: "LOGGED_IN",
            user: data
        });
    }

    render() {
        return (
            <div className='app'>
                 <BrowserRouter>
                 <Switch>
                     <Route 
                     exact 
                     path={"/"} 
                     render={props => (
                     <Home2 
                     {...props}
                     handleLogin={this.handleLogin}
                     loggedInStatus={this.state.loggedInStatus} />
                     )}
                     />
                     <Route 
                     exact 
                     path={"/dashboard"}
                     render={props => (
                        <Dashboard 
                        {...props} 
                        loggedInStatus={this.state.loggedInStatus} /> 
                     )}
                     />
                 </Switch>
                 </BrowserRouter>
            </div>
        );
    }
}