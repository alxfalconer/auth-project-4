import React, { Component } from 'react';
import axios from 'axios';

export default class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            name: ""
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        axios.post("http://localhost:3001/users", {
            user: {
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
            }
        },
        // { withCredentials: true}
        )
        .then(response => {
            if (response.data.status === 'created') {
            this.props.handleAuth(response.data);
            }
            console.log("registration res", response);
        })
        .catch(error => {
            console.log("registration error", error);
        });
        console.log("form submitted");
        e.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type="email" 
                    name="email" 
                    placeholder='Email' 
                    value={this.state.email} 
                    onChange={this.handleChange} 
                    required 
                    />

                    <input 
                    type="password" 
                    name="password" 
                    placeholder='Password' 
                    value={this.state.password} 
                    onChange={this.handleChange} 
                    required 
                    />

                    <input 
                    type="name" 
                    name="name" 
                    placeholder='Name' 
                    value={this.state.name} 
                    onChange={this.handleChange} 
                    required 
                    />
                    <button type='submit'>Register</button>
                </form>

            </div>
            );
        
    }
}