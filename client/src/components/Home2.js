import React, {Component} from 'react';
import Registration from './auth/Registration';

export default class Home2 extends Component {
    constructor(props) {
        super(props);

        this.handleAuth = this.handleAuth.bind(this);
    }

    handleAuth(data) {
        this.props.handleLogin(data);
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div>
                <h1>Home</h1>
                <h1>Status: {this.props.loggedInStatus}</h1>
                <Registration handleAuth={this.handleAuth}/>
            </div>
        );
    }
}