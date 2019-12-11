import React from 'react';

export default class Signup extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleOnSubmit = () => {
      // POST /users/new route
        //hit users#create in UsersController
    }

    handleOnChange = () => {
        this.setState({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    }

    render() {
        return (
            <form onSubmit={this.handleOnSubmit}>
                <input id="email" type="text" placeholder="Email Address" value={this.state.email} onChange={this.handleOnChange}/>
                <input id="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange}/>
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}