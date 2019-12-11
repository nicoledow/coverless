import React from 'react';

export default class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleOnChange = () => {
        this.setState({
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        })
    }

    render() {
        return (
            <form>
                <input id="email" type="text" placeholder="Email Address" value={this.state.email} onChange={this.handleOnChange}/>
                <input id="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleOnChange}/>
                <input type="submit" value="Log In" />
            </form>
        )
    }
}