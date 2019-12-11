import React from 'react';
import fetchNewUser from '../actions/fetchNewUser';

export default class Signup extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleOnSubmit = e => {
      e.preventDefault();
      fetchNewUser(this.state.email, this.state.password)
    }

    handleOnChange = () => {
        this.setState({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    }

    render() {
        return (
            <form onSubmit={e => this.handleOnSubmit(e)}>
                <input id="email" type="text" placeholder="Email Address" value={this.state.email} onChange={this.handleOnChange}/>
                <input id="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange}/>
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}
