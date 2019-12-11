import React from 'react';

export default class Signup extends React.Component {
    state = {
        email: '',
        password: ''
    }

    render() {
        return (
            <form>
                <input type="text" placeholder="Email Address" value={this.state.email} />
                <input type="password" placeholder="Password" value={this.state.password} />
                <input type="submit" value="Sign Up" />
            </form>
        )
    }
}